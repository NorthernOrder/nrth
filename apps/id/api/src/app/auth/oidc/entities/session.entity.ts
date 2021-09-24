import { Entity, Column } from 'typeorm';
import { BaseOIDCEntity } from './base-entity';

@Entity()
export class Session extends BaseOIDCEntity {
  @Column({ type: 'text' })
  uid!: string;
}
