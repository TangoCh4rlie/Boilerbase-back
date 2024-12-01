/*
  Warnings:

  - You are about to drop the column `likes` on the `Boilerplate` table. All the data in the column will be lost.
  - You are about to drop the column `uses` on the `Boilerplate` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Boilerplate" DROP COLUMN "likes",
DROP COLUMN "uses",
ADD COLUMN     "likesCounter" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "usesCounter" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Like" (
    "id" SERIAL NOT NULL,
    "boilerplateId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_boilerplateId_fkey" FOREIGN KEY ("boilerplateId") REFERENCES "Boilerplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
