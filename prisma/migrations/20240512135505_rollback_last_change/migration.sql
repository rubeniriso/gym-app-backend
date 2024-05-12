/*
  Warnings:

  - You are about to drop the column `bodypart_id` on the `trainingdayexercise` table. All the data in the column will be lost.
  - You are about to drop the column `muscle_id` on the `trainingdayexercise` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "trainingdayexercise" DROP CONSTRAINT "trainingdayexercise_bodypart_id_fkey";

-- DropForeignKey
ALTER TABLE "trainingdayexercise" DROP CONSTRAINT "trainingdayexercise_muscle_id_fkey";

-- AlterTable
ALTER TABLE "exercise" ADD COLUMN     "bodypart_id" UUID;

-- AlterTable
ALTER TABLE "trainingdayexercise" DROP COLUMN "bodypart_id",
DROP COLUMN "muscle_id";

-- AddForeignKey
ALTER TABLE "exercise" ADD CONSTRAINT "exercise_bodypart_id_fkey" FOREIGN KEY ("bodypart_id") REFERENCES "bodypart"("bodypart_id") ON DELETE SET NULL ON UPDATE CASCADE;
