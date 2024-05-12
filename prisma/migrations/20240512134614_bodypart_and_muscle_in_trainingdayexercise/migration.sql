/*
  Warnings:

  - You are about to drop the column `bodypart_id` on the `exercise` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "exercise" DROP CONSTRAINT "exercise_bodypart_id_fkey";

-- AlterTable
ALTER TABLE "exercise" DROP COLUMN "bodypart_id";

-- AlterTable
ALTER TABLE "trainingdayexercise" ADD COLUMN     "bodypart_id" UUID,
ADD COLUMN     "muscle_id" UUID;

-- AddForeignKey
ALTER TABLE "trainingdayexercise" ADD CONSTRAINT "trainingdayexercise_muscle_id_fkey" FOREIGN KEY ("muscle_id") REFERENCES "muscle"("muscle_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trainingdayexercise" ADD CONSTRAINT "trainingdayexercise_bodypart_id_fkey" FOREIGN KEY ("bodypart_id") REFERENCES "bodypart"("bodypart_id") ON DELETE SET NULL ON UPDATE CASCADE;
