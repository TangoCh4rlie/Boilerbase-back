import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Profile } from 'passport-github';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  findOrCreate(profile: Profile) {
    const { id, username, photos } = profile;
    if (id != null && username != null && photos != null) {
      return this.prisma.user.upsert({
        where: { id },
        create: {
          id,
          username,
          avatar: profile.photos?.[0].value ?? '',
        },
        update: {
          username,
          avatar: profile.photos?.[0].value ?? '',
        },
      });
    }
  }

  findAll() {
    return this.prisma.user.findMany({
      include: {
        boilerplates: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        boilerplates: true,
      },
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }

  async me(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        boilerplates: {
          include: {
            likes: {
              where: {
                userId: id,
              },
              select: {
                id: true,
              },
            },
          },
        },
      },
    });

    if (!user) return null;

    // Transformer les boilerplates pour ajouter la propriété liked
    return {
      ...user,
      boilerplates: user.boilerplates.map((boilerplate) => ({
        ...boilerplate,
        liked: boilerplate.likes.length > 0,
      })),
    };
  }

  async addHistoryBoilerplate(boilerplateId: number, userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { boilerplatesHistory: true },
    });

    if (!user?.boilerplatesHistory.includes(boilerplateId)) {
      await this.prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          boilerplatesHistory: {
            push: boilerplateId,
          },
        },
      });
    }
  }
}
