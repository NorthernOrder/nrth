import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { fromGlobalId } from '../common/global-id';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  async create(
    firstName: string,
    lastName: string,
    username: string,
    email: string
  ): Promise<User> {
    const user = this.userRepository.create({
      firstName,
      lastName,
      username,
      email,
    });

    return this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(globalId: string): Promise<User | undefined> {
    const { id } = fromGlobalId(globalId);
    return this.userRepository.findOne(id);
  }

  async update({
    id: globalId,
    ...data
  }: UpdateUserInput): Promise<User | undefined> {
    const { id } = fromGlobalId(globalId);
    const user = await this.userRepository.findOne(id);
    if (!user) return;

    this.userRepository.merge(user, data);

    return this.userRepository.save(user);
  }

  async remove(globalId: string): Promise<boolean> {
    const { id } = fromGlobalId(globalId);
    await this.userRepository.delete(id);

    return true;
  }
}
