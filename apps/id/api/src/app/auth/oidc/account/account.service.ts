import { Injectable } from '@nestjs/common';
import { FindAccount } from 'oidc-provider';
import { UserService } from '../../../user/user.service';

@Injectable()
export class AccountService {
  constructor(private readonly userService: UserService) {}

  findAccount: FindAccount = async (ctx, id) => {
    const user = await this.userService.findOne(id);

    if (!user) return;

    return {
      accountId: id,
      async claims() {
        return {
          sub: user.email,
          email: user.email,
          fullName: user.firstName + ' ' + user.lastName,
        };
      },
    };
  };

  async authenticate() {
    const user = await this.userService.authenticate();

    return user.id;
  }
}
