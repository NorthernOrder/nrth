import { Controller } from '@nestjs/common';
import { MainApiStatusService } from './main-api-status.service';

@Controller('main-api-status')
export class MainApiStatusController {
  constructor(private mainApiStatusService: MainApiStatusService) {}
}
