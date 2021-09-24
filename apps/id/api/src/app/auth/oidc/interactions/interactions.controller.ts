import { Controller } from '@nestjs/common';
import { AccountService } from '../account/account.service';
import { OidcService } from '../oidc.service';

@Controller('auth/interaction')
export class InteractionsController {
  constructor(
    private readonly oidcService: OidcService,
    private readonly accountService: AccountService
  ) {}
}
