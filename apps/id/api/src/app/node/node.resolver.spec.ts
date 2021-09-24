import { Test, TestingModule } from '@nestjs/testing';
import { NodeResolver } from './node.resolver';
import { ApplicationModule } from '../application/application.module';
import { ConnectionModule } from '../connection/connection.module';
import { GroupModule } from '../group/group.module';
import { UserModule } from '../user/user.module';

describe('NodeResolver', () => {
  let resolver: NodeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ApplicationModule, ConnectionModule, GroupModule, UserModule],
      providers: [NodeResolver],
    }).compile();

    resolver = module.get<NodeResolver>(NodeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
