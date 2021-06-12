import { Module } from '@nestjs/common';
import { MainApiStatusService } from './main-api-status.service';
import { MainApiStatusController } from './main-api-status.controller';

@Module({
  controllers: [MainApiStatusController],
  providers: [MainApiStatusService],
  exports: [MainApiStatusService],
})
export class MainApiStatusModule {}
