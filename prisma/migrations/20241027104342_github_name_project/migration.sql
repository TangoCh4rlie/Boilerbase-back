/*
  Warnings:

  - Added the required column `githubName` to the `Boilerplate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Boilerplate" ADD COLUMN     "githubName" TEXT NOT NULL;
