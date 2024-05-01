/*
  Warnings:

  - A unique constraint covering the columns `[order]` on the table `routine` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[order]` on the table `trainingday` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[order]` on the table `trainingdayexercise` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[order]` on the table `week` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "routine" ADD COLUMN     "order" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "trainingday" ADD COLUMN     "order" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "trainingdayexercise" ADD COLUMN     "order" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "week" ADD COLUMN     "order" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "routine_order_key" ON "routine"("order");

-- CreateIndex
CREATE UNIQUE INDEX "trainingday_order_key" ON "trainingday"("order");

-- CreateIndex
CREATE UNIQUE INDEX "trainingdayexercise_order_key" ON "trainingdayexercise"("order");

-- CreateIndex
CREATE UNIQUE INDEX "week_order_key" ON "week"("order");
