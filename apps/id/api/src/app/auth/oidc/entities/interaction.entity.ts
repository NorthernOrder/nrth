import { Entity } from 'typeorm';
import { BaseOIDCEntity } from './base-entity';

@Entity()
export class Interaction extends BaseOIDCEntity {}
