import { Injectable } from '@nestjs/common';
import { CreateConnectionInput } from './dto/create-connection.input';
import { UpdateConnectionInput } from './dto/update-connection.input';

@Injectable()
export class ConnectionService {
  create(createConnectionInput: CreateConnectionInput) {
    return 'This action adds a new connection';
  }

  findAll() {
    return `This action returns all connection`;
  }

  findOne(id: number) {
    return `This action returns a #${id} connection`;
  }

  update(id: number, updateConnectionInput: UpdateConnectionInput) {
    return `This action updates a #${id} connection`;
  }

  remove(id: number) {
    return `This action removes a #${id} connection`;
  }
}
