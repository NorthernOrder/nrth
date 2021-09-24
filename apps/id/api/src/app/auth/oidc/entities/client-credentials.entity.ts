import { Entity } from 'typeorm';
import { BaseOIDCEntity } from './base-entity';

@Entity()
export class ClientCredentials extends BaseOIDCEntity {}
