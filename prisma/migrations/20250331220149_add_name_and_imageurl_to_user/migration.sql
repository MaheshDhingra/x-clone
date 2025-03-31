-- AlterTable
ALTER TABLE "User" ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "name" TEXT,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "password" DROP NOT NULL;
