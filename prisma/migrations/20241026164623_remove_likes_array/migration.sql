-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_boilerplateId_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_userId_fkey";

-- AlterTable
ALTER TABLE "Boilerplate" ADD COLUMN     "features" TEXT[];
