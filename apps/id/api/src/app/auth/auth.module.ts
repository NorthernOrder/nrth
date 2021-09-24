import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthController } from './auth.controller';

import { AccessToken } from './oidc/entities/access-token.entity';
import { AuthorizationCode } from './oidc/entities/authorization-code.entity';
import { ClientCredentials } from './oidc/entities/client-credentials.entity';
import { Client } from './oidc/entities/client.entity';
import { DeviceCode } from './oidc/entities/device-code.entity';
import { Grant } from './oidc/entities/grant.entity';
import { InitialAccessToken } from './oidc/entities/initial-access-token.entity';
import { Interaction } from './oidc/entities/interaction.entity';
import { PushedAuthorizationRequest } from './oidc/entities/pushed-authorization-request.entity';
import { RefreshToken } from './oidc/entities/refresh-token.entity';
import { RegistrationAccessToken } from './oidc/entities/registration-access-token.entity';
import { ReplayDetection } from './oidc/entities/replay-detection.entity';
import { Session } from './oidc/entities/session.entity';

import { OidcController } from './oidc/oidc.controller';
import { OidcService } from './oidc/oidc.service';
import { AccountService } from './oidc/account/account.service';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([
      AccessToken,
      AuthorizationCode,
      ClientCredentials,
      Client,
      DeviceCode,
      Grant,
      InitialAccessToken,
      Interaction,
      PushedAuthorizationRequest,
      RefreshToken,
      RegistrationAccessToken,
      ReplayDetection,
      Session,
    ]),
  ],
  controllers: [AuthController, OidcController],
  providers: [OidcService, AccountService],
})
export class AuthModule {}
