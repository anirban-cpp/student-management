import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Studenttype } from 'src/student/student.type';

@ObjectType('Lesson')
export class Lessontype {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @Field((type) => [Studenttype])
  students: string[];
}
