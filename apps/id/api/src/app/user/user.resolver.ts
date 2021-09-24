import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'users' })
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user', nullable: true })
  async findOne(@Args('id') id: string): Promise<User | undefined> {
    return this.userService.findOne(id);
  }

  @Mutation(() => User, { nullable: true })
  updateUser(@Args('data') data: UpdateUserInput): Promise<User | undefined> {
    return this.userService.update(data);
  }

  @Mutation(() => Boolean)
  async removeUser(@Args('id') id: string): Promise<boolean> {
    return await this.userService.remove(id);
  }
}
