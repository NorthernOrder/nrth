import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { toGlobalId } from '../../common/global-id';
import { Node } from '../../node/node.interface';

@Entity()
@ObjectType({ implements: Node })
export class Group implements Node {
  @PrimaryGeneratedColumn()
  readonly id!: number;

  @Field(() => ID, { name: 'id' })
  get relayId(): string {
    return toGlobalId('Group', this.id);
  }

  @Column('text')
  @Field()
  name!: string;
}
