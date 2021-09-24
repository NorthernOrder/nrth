import { Entity } from 'typeorm';
import { BaseGrantableEntity } from './grantable-entity';

@Entity()
export class AuthorizationCode extends BaseGrantableEntity {}
