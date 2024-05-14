import { IsDateString, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  name: string;

  @IsDateString()
  schedule: Date;
}
