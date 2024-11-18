-- AlterTable
ALTER TABLE "User" ADD COLUMN     "boilerplatesHistory" INTEGER[] DEFAULT ARRAY[]::INTEGER[];
