import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Student')
export class Studenttype {
  @Field()
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
