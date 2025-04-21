import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ToDoService {
  constructor(private readonly prisma: PrismaService) {}

  async addToDo(title: string) {
    const task = await this.prisma.toDo.create({
      data: {
        title,
      },
    });

    return { message: 'To-do item added', task };
  }

  getTodos(): string {
    return 'To do List';
  }
}