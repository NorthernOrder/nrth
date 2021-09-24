import { Query, Resolver, Args, ID } from '@nestjs/graphql';
import { fromGlobalId } from 'graphql-relay';
import { ApplicationService } from '../application/application.service';
import { ConnectionService } from '../connection/connection.service';
import { GroupService } from '../group/group.service';
import { UserService } from '../user/user.service';
import { Node } from './node.interface';

export type IDType = 'User' | 'Group' | 'Connection' | 'Application';

@Resolver()
export class NodeResolver {
  constructor(
    private readonly applicationService: ApplicationService,
    private readonly connectionService: ConnectionService,
    private readonly groupService: GroupService,
    private readonly userService: UserService
  ) {}

  @Query(() => Node, { nullable: true })
  async node(
    @Args({ name: 'id', type: () => ID }) globalId: string
  ): Promise<Node | undefined> {
    const { id, type } = fromGlobalId(globalId);

    switch (type as IDType) {
      case 'Application':
        return this.applicationService.findOne(id);
      case 'Connection':
        return this.connectionService.findOne(id);
      case 'Group':
        return this.groupService.findOne(id);
      case 'User':
        return this.userService.findOne(id);
    }
  }
}
