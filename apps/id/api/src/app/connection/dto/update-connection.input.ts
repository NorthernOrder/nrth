import { CreateConnectionInput } from './create-connection.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateConnectionInput extends PartialType(CreateConnectionInput) {
  @Field(() => Int)
  id: number;
}
