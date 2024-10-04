-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Boilerplate" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "gitUrl" TEXT NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "uses" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Boilerplate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Boilerplate_name_key" ON "Boilerplate"("name");
