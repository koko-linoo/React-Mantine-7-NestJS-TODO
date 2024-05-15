import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateTaskDto) {
    return this.prisma.task.create({
      data,
    });
  }

  async findAll() {
    const total = await this.prisma.task.count();
    const data = await this.prisma.task.findMany({
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
