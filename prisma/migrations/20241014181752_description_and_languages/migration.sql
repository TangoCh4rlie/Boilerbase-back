/*
  Warnings:

  - Made the column `authorId` on table `Boilerplate` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Boilerplate" DROP CONSTRAINT "Boilerplate_authorId_fkey";

-- AlterTable
ALTER TABLE "Boilerplate" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "languages" TEXT[],
ALTER COLUMN "authorId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Boilerplate" ADD CONSTRAINT "Boilerplate_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
