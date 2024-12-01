-- AlterTable
ALTER TABLE "Boilerplate" ADD COLUMN     "authorId" INTEGER;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "email" TEXT;

-- AddForeignKey
ALTER TABLE "Boilerplate" ADD CONSTRAINT "Boilerplate_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
