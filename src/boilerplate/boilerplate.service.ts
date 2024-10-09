import { Injectable } from '@nestjs/common';
import { CreateBoilerplateDto } from './dto/create-boilerplate.dto';
import { UpdateBoilerplateDto } from './dto/update-boilerplate.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BoilerplateService {
  constructor(private readonly prisma: PrismaService) {}

  create(createBoilerplateDto: CreateBoilerplateDto) {
    return this.prisma.boilerplate.create({
      data: createBoilerplateDto,
    });
  }

  findAll() {
    return this.prisma.boilerplate.findMany({
      include: {
        author: {
          select: {
            id: true,
            username: true,
            avatar: true,
          },
        },
        likes: {
          select: {
            userId: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.boilerplate.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            id: true,
            username: true,
            avatar: true,
          },
        },
        likes: {
          select: {
            userId: true,
          },
        },
      },
    });
  }

  update(id: number, updateBoilerplateDto: UpdateBoilerplateDto) {
    return this.prisma.boilerplate.update({
      where: { id },
      data: updateBoilerplateDto,
    });
  }

  remove(id: number) {
    return this.prisma.boilerplate.delete({
      where: { id },
    });
  }

  getTopOfTheMonth() {
    return this.prisma.boilerplate.findMany({
      take: 5,
      orderBy: {
        usesCounter: 'desc',
      },
      include: {
        author: {
          select: {
            id: true,
            username: true,
            avatar: true,
          },
        },
        likes: {
          select: {
            userId: true,
          },
        },
      },
    });
  }
}
