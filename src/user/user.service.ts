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
        likes: {
          select: {
            boilerplateId: true,
          },
        },
      },
    });
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        boilerplates: true,
        likes: {
          select: {
            boilerplateId: true,
          },
        },
      },
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
