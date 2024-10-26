-- CreateTable
CREATE TABLE "_BoilerplateToLike" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BoilerplateToLike_AB_unique" ON "_BoilerplateToLike"("A", "B");

-- CreateIndex
CREATE INDEX "_BoilerplateToLike_B_index" ON "_BoilerplateToLike"("B");

-- AddForeignKey
ALTER TABLE "_BoilerplateToLike" ADD CONSTRAINT "_BoilerplateToLike_A_fkey" FOREIGN KEY ("A") REFERENCES "Boilerplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoilerplateToLike" ADD CONSTRAINT "_BoilerplateToLike_B_fkey" FOREIGN KEY ("B") REFERENCES "Like"("id") ON DELETE CASCADE ON UPDATE CASCADE;
