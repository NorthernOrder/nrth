import { Controller, All, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { OidcService } from './oidc.service';

@Controller('auth/oidc')
export class OidcController {
  constructor(private readonly oidcService: OidcService) {}

  @All('/*')
  public mountedOidc(@Req() req: Request, @Res() res: Response): void {
    req.url = req.originalUrl.replace('/oidc', '');
    return this.oidcService.oidc.callback()(req, res);
  }
}
