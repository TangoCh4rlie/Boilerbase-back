import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LikeService {
  constructor(private readonly prisma: PrismaService) {}

  async likeUnlikeBoilerplate(userId: string, boilerplateId: number) {
    const existingLike = await this.prisma.like.findUnique({
      where: {
        userId_boilerplateId: {
          userId: userId,
          boilerplateId: boilerplateId,
        },
      },
    });

    if (existingLike) {
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

      return {
        status: 200,
        message: 'Boilerplate unliked liked successfully',
      };
    } else {
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

      return {
        status: 200,
        message: 'Boilerplate liked successfully',
      };
    }
  }
}
