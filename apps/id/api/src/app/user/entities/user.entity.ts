import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { toGlobalId } from '../../common/global-id';
import { Node } from '../../node/node.interface';

@Entity()
@ObjectType({ implements: Node })
export class User implements Node {
  @PrimaryGeneratedColumn()
  readonly id!: number;

  @Field(() => ID, { name: 'id' })
  get relayId(): string {
    return toGlobalId('User', this.id);
  }

  @Column('text')
  @Field()
  firstName!: string;

  @Column('text')
  @Field()
  lastName!: string;

  @Column('text')
  @Field()
  username!: string;

  @Column('text')
  @Field({})
  email!: string;
}
