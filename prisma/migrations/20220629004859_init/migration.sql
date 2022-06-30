-- CreateTable
CREATE TABLE "Animals" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "imagen" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Animals_pkey" PRIMARY KEY ("id")
);
