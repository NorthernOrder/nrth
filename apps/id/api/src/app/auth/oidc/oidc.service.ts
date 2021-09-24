import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Provider } from 'oidc-provider';
import jwks from '../../../assets/jwks.json';
import { AccountService } from './account/account.service';
import { TypeOrmAdapter } from './typeorm.adapter';

@Injectable()
export class OidcService {
  public readonly oidc: Provider;

  constructor(
    private readonly accountService: AccountService,
    private readonly configService: ConfigService
  ) {
    this.oidc = new Provider(this.configService.get('address') as string, {
      cookies: {
        keys: this.configService.get('secure_key').split(':'),
      },
      jwks,
      adapter: TypeOrmAdapter,
      findAccount: this.accountService.findAccount.bind(this.accountService),
      interactions: {
        url(ctx, interaction) {
          return `/auth/interaction/${interaction.uid}`;
        },
      },
      claims: {
        openid: ['sub'],
        email: ['email', 'fullName'],
      },
      features: {
        devInteractions: { enabled: false },
      },
    });
    this.oidc.on('authorization_code.saved', console.log);
    this.oidc.on('grant.error', console.log);
    this.oidc.on('introspection.error', console.log);
    this.oidc.on('revocation.error', console.log);
  }
}
