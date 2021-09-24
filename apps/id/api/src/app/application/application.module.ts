import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ApplicationService } from './application.service';
import { ApplicationResolver } from './application.resolver';
import { Application } from './entities/application.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Application])],
  providers: [ApplicationResolver, ApplicationService],
})
export class ApplicationModule {}
