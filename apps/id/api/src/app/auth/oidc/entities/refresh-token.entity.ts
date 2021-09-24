import { Entity } from 'typeorm';
import { BaseGrantableEntity } from './grantable-entity';

@Entity()
export class RefreshToken extends BaseGrantableEntity {}
