/*
  Warnings:

  - You are about to drop the column `primarymuscle_id` on the `exercise` table. All the data in the column will be lost.
  - Added the required column `bodypart_id` to the `exercise` table without a default value. This is not possible if the table is not empty.
  - Made the column `exercise_id` on table `trainingdayexercise` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "exercise" DROP CONSTRAINT "exercise_primarymuscle_id_fkey";

-- AlterTable
ALTER TABLE "exercise" DROP COLUMN "primarymuscle_id",
ADD COLUMN     "bodypart_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "trainingdayexercise" ALTER COLUMN "exercise_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "exercise" ADD CONSTRAINT "exercise_bodypart_id_fkey" FOREIGN KEY ("bodypart_id") REFERENCES "bodypart"("bodypart_id") ON DELETE CASCADE ON UPDATE NO ACTION;
