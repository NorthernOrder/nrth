import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Connection {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
