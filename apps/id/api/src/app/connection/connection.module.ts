import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConnectionService } from './connection.service';
import { ConnectionResolver } from './connection.resolver';
import { Connection } from './entities/connection.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Connection])],
  providers: [ConnectionResolver, ConnectionService],
})
export class ConnectionModule {}
