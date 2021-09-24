import { BaseOIDCEntity } from './base-entity';
import { Column } from 'typeorm';

export class BaseGrantableEntity extends BaseOIDCEntity {
  @Column({ type: 'text', nullable: true })
  grantId?: string;
}
