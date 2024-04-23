/*
  Warnings:

  - You are about to drop the column `bodypart_id` on the `exercise` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "exercise" DROP CONSTRAINT "exercise_bodypart_id_fkey";

-- AlterTable
ALTER TABLE "exercise" DROP COLUMN "bodypart_id";
