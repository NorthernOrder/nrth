import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ConnectionService } from './connection.service';
import { Connection } from './entities/connection.entity';
import { CreateConnectionInput } from './dto/create-connection.input';
import { UpdateConnectionInput } from './dto/update-connection.input';

@Resolver(() => Connection)
export class ConnectionResolver {
  constructor(private readonly connectionService: ConnectionService) {}

  @Mutation(() => Connection)
  createConnection(@Args('createConnectionInput') createConnectionInput: CreateConnectionInput) {
    return this.connectionService.create(createConnectionInput);
  }

  @Query(() => [Connection], { name: 'connection' })
  findAll() {
    return this.connectionService.findAll();
  }

  @Query(() => Connection, { name: 'connection' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.connectionService.findOne(id);
  }

  @Mutation(() => Connection)
  updateConnection(@Args('updateConnectionInput') updateConnectionInput: UpdateConnectionInput) {
    return this.connectionService.update(updateConnectionInput.id, updateConnectionInput);
  }

  @Mutation(() => Connection)
  removeConnection(@Args('id', { type: () => Int }) id: number) {
    return this.connectionService.remove(id);
  }
}
