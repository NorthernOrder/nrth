import { Entity, Column } from 'typeorm';
import { BaseGrantableEntity } from './grantable-entity';

@Entity()
export class DeviceCode extends BaseGrantableEntity {
  @Column({ type: 'text', nullable: true })
  userCode?: string;
}
