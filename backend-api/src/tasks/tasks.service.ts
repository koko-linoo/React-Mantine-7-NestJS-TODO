import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { FindAllQueryDto } from './dto/find-all-query.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateTaskDto) {
    return this.prisma.task.create({
      data,
    });
  }

  async findAll({ today, ...query }: FindAllQueryDto) {
    let startDate: Date | undefined;
    let endDate: Date | undefined;

    console.log(today, query);

    if (today) {
      startDate = new Date(today);
      startDate.setHours(0, 0, 0, 0);
      endDate = new Date(today);
      endDate.setHours(23, 59, 59, 999);

      console.log(startDate, endDate);
    }

    const total = await this.prisma.task.count();
    const data = await this.prisma.task.findMany({
      where: {
        schedule: today && {
          gte: startDate,
          lte: endDate,
        },
      },
      orderBy: {
        status: 'asc',
      },
    });

    return {
      data,
      total,
    };
  }

  findOne(id: string) {
    return this.prisma.task.findFirstOrThrow({ where: { id } });
  }

  update(id: string, data: UpdateTaskDto) {
    return this.prisma.task.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.task.delete({ where: { id } });
  }
}
