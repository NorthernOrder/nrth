import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GroupService } from './group.service';
import { GroupResolver } from './group.resolver';
import { Group } from './entities/group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Group])],
  providers: [GroupResolver, GroupService],
})
export class GroupModule {}
