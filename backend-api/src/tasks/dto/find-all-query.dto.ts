import { Transform } from 'class-transformer';
import { IsDate, IsOptional } from 'class-validator';

export class FindAllQueryDto {
  @IsDate()
  @IsOptional()
  @Transform((obj) => (obj.value ? new Date(obj.value) : obj.value))
  today: Date;
}
