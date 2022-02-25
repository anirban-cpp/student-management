import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateStudentInput } from './student.input';
import { StudentService } from './student.service';
import { Studenttype } from './student.type';

@Resolver((of) => Studenttype)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query((returns) => [Studenttype])
  async Students() {
    return this.studentService.getStudents();
  }

  @Query((returns) => Studenttype)
  async Student(@Args('id') id: string) {
    return this.studentService.getStudent(id);
  }

  @Mutation((returns) => Studenttype)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}
