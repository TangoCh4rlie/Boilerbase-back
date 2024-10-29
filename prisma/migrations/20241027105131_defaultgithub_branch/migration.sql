/*
  Warnings:

  - Added the required column `defaultBranch` to the `Boilerplate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Boilerplate" ADD COLUMN     "defaultBranch" TEXT NOT NULL;
