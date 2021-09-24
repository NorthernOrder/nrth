import { Entity } from 'typeorm';
import { BaseGrantableEntity } from './grantable-entity';

@Entity()
export class AccessToken extends BaseGrantableEntity {}
