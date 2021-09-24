import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { NodeResolver } from './node.resolver';

@Module({
  imports: [UserModule],
  providers: [NodeResolver],
})
export class NodeModule {}
