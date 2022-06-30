/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Animals` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Animals_name_key" ON "Animals"("name");
