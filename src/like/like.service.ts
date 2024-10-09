import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LikeService {
  constructor(private readonly prisma: PrismaService) {}

  async likeBoilerplate(userId: number, boilerplateId: number) {
    await this.prisma.like.create({
      data: {
        userId: userId,
        boilerplateId: boilerplateId,
      },
    });
    await this.prisma.boilerplate.update({
      where: {
        id: boilerplateId,
      },
      data: {
        likesCounter: {
          increment: 1,
        },
      },
    });
    // return like;
  }

  async unlikeBoilerplate(userId: number, boilerplateId: number) {
    await this.prisma.like.delete({
      where: {
        userId_boilerplateId: {
          userId: userId,
          boilerplateId: boilerplateId,
        },
      },
    });
    await this.prisma.boilerplate.update({
      where: {
        id: boilerplateId,
      },
      data: {
        likesCounter: {
          decrement: 1,
        },
      },
    });
  }
}
