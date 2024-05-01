/*
  Warnings:

  - You are about to drop the column `order` on the `routine` table. All the data in the column will be lost.
  - You are about to drop the column `order` on the `trainingday` table. All the data in the column will be lost.
  - You are about to drop the column `order` on the `trainingdayexercise` table. All the data in the column will be lost.
  - You are about to drop the column `order` on the `week` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[order_]` on the table `routine` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[order_]` on the table `trainingday` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[order_]` on the table `trainingdayexercise` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[order_]` on the table `week` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "routine_order_key";

-- DropIndex
DROP INDEX "trainingday_order_key";

-- DropIndex
DROP INDEX "trainingdayexercise_order_key";

-- DropIndex
DROP INDEX "week_order_key";

-- AlterTable
ALTER TABLE "routine" DROP COLUMN "order",
ADD COLUMN     "order_" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "trainingday" DROP COLUMN "order",
ADD COLUMN     "order_" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "trainingdayexercise" DROP COLUMN "order",
ADD COLUMN     "order_" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "week" DROP COLUMN "order",
ADD COLUMN     "order_" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "routine_order__key" ON "routine"("order_");

-- CreateIndex
CREATE UNIQUE INDEX "trainingday_order__key" ON "trainingday"("order_");

-- CreateIndex
CREATE UNIQUE INDEX "trainingdayexercise_order__key" ON "trainingdayexercise"("order_");

-- CreateIndex
CREATE UNIQUE INDEX "week_order__key" ON "week"("order_");
