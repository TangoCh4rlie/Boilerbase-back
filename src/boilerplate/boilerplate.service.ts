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
      },
    });
  }

  findOneByName(name: string) {
    return this.prisma.boilerplate.findUnique({
      where: { name },
      include: {
        author: {
          select: {
            id: true,
            username: true,
            avatar: true,
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

  async getTopOfTheMonth(take: number, userId: string) {
    if (userId) {
      return await this.prisma.$queryRaw`
        SELECT 
          b.*, 
          CASE WHEN l.id IS NULL THEN false ELSE true END AS "liked"
        FROM "Boilerplate" b
        LEFT JOIN "Like" l ON l."boilerplateId" = b.id AND l."userId" = ${userId}
        ORDER BY b."usesCounter" DESC
        LIMIT ${take}
      `;
    } else {
      return await this.prisma.$queryRaw`
        SELECT 
          b.*, 
          false AS "liked_by_user"
        FROM "Boilerplate" b
        ORDER BY b."usesCounter" DESC
        LIMIT ${take}
      `;
    }
  }

  async findBoilerplateWithFilter(
    names: string[],
    languages: string[] | null,
    features: string[] | null,
  ) {
    console.log(names, languages, features);
    return this.prisma.boilerplate.findMany({
      where: {
        ...(languages && { languages: { hasSome: languages } }),
        ...(features && { features: { hasSome: features } }),
        ...(names.length > 0 && {
          OR: names
            .filter((name: string) => name.length > 0)
            .map((name: string) => ({
              name: {
                contains: name,
                mode: 'insensitive',
              },
            })),
        }),
      },
      include: {
        author: true,
      },
    });
  }

  async getHistory(id: string) {
    return this.prisma.boilerplate.findMany({
      where: {
        authorId: id,
        id: {
          in: (
            await this.prisma.user.findUniqueOrThrow({
              where: { id },
              select: { boilerplatesHistory: true },
            })
          ).boilerplatesHistory,
        },
      },
    });
  }
}
