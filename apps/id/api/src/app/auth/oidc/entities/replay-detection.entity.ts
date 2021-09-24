import { Entity } from 'typeorm';
import { BaseOIDCEntity } from './base-entity';

@Entity()
export class ReplayDetection extends BaseOIDCEntity {}
