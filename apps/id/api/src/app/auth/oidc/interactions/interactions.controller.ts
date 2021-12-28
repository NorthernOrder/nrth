import { Request, Response, NextFunction } from 'express';
import { Controller, Get, Next, Post, Req, Res } from '@nestjs/common';
import { AccountService } from '../account/account.service';
import { OidcService } from '../oidc.service';
import { LoginPage } from '@nrth/id-api-templates';
import assert = require('assert');
import { BaseGrantableEntity } from '../entities/grantable-entity';
import { Provider } from 'oidc-provider';

@Controller('auth/interaction')
export class InteractionsController {
  constructor(
    private readonly oidcService: OidcService,
    private readonly accountService: AccountService
  ) {}

  @Get(':uid')
  async renderInteraction(
    @Req() request: Request,
    @Res() response: Response,
    @Next() next: NextFunction
  ) {
    try {
      const interactionDetails = await this.oidcService.oidc.interactionDetails(
        request,
        response
      );
      const { uid, params, prompt, session } = interactionDetails;
      let { grantId } = interactionDetails;
      let grant: InstanceType<Provider['Grant']>;

      const client = await this.oidcService.oidc.Client.find(
        params.client_id as string
      );

      if (!client) throw new Error('No client found');

      if (prompt.name === 'login') {
        return LoginPage(uid);
      }

      if (grantId) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        grant = (await this.oidcService.oidc.Grant.find(grantId))!;
      } else {
        grant = new this.oidcService.oidc.Grant({
          accountId: session?.accountId,
          clientId: client.clientId,
        });
      }

      if (prompt.details.missingOIDCScope) {
        grant.addOIDCScope(
          (prompt.details.missingOIDCScope as string[]).join(' ')
        );
      }
      if (prompt.details.missingOIDCClaims) {
        grant.addOIDCClaims(prompt.details.missingOIDCClaims as string[]);
        // use grant.rejectOIDCClaims to reject a subset or the whole thing
      }
      if (prompt.details.missingResourceScopes) {
        for (const [indicator, scopes] of Object.entries(
          prompt.details.missingResourceScopes as Record<string, string[]>
        )) {
          grant.addResourceScope(indicator, scopes.join(' '));
          // use grant.rejectResourceScope to reject a subset or the whole thing
        }
      }

      grantId = await grant.save();

      const consent = {} as BaseGrantableEntity;
      if (!interactionDetails.grantId) consent.grantId = grantId;

      await this.oidcService.oidc.interactionFinished(
        request,
        response,
        { consent },
        {
          mergeWithLastSubmission: true,
        }
      );
    } catch (err) {
      return next(err);
    }
  }

  @Post(':uid/login')
  async login(
    @Req() request: Request,
    @Res() response: Response,
    @Next() next: NextFunction
  ) {
    try {
      const { uid, prompt, params } =
        await this.oidcService.oidc.interactionDetails(request, response);

      assert.strictEqual(prompt.name, 'login');

      const client = await this.oidcService.oidc.Client.find(
        params.client_id as string
      );

      const account = await this.accountService.authenticate();

      if (!account) {
        console.log;
      }
    } catch (err) {
      return next(err);
    }
  }
}
