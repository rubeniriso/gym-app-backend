/*
  Warnings:

  - The primary key for the `exercise` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `exercise_id` column on the `exercise` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `routine` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `routine_id` column on the `routine` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `routinetype` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `routinetype_id` column on the `routinetype` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `trainingday` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `trainingday_id` column on the `trainingday` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `week_id` column on the `trainingday` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `trainingdayexercise` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `trainingdayexercise_id` column on the `trainingdayexercise` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `usersettings` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `usersettings` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `activeroutine` column on the `usersettings` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `week` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `week_id` column on the `week` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `routinetype_id` on the `routine` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `exercise_id` on the `trainingdayexercise` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `trainingday_id` on the `trainingdayexercise` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `routine_id` on the `week` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "routine" DROP CONSTRAINT "routine_routinetype_id_fkey";

-- DropForeignKey
ALTER TABLE "trainingday" DROP CONSTRAINT "trainingday_week_id_fkey";

-- DropForeignKey
ALTER TABLE "trainingdayexercise" DROP CONSTRAINT "trainingdayexercise_exercise_id_fkey";

-- DropForeignKey
ALTER TABLE "trainingdayexercise" DROP CONSTRAINT "trainingdayexercise_trainingday_id_fkey";

-- DropForeignKey
ALTER TABLE "usersettings" DROP CONSTRAINT "usersettings_activeroutine_fkey";

-- DropForeignKey
ALTER TABLE "week" DROP CONSTRAINT "week_routine_id_fkey";

-- AlterTable
ALTER TABLE "exercise" DROP CONSTRAINT "exercise_pkey",
DROP COLUMN "exercise_id",
ADD COLUMN     "exercise_id" SERIAL NOT NULL,
ADD CONSTRAINT "exercise_pkey" PRIMARY KEY ("exercise_id");

-- AlterTable
ALTER TABLE "routine" DROP CONSTRAINT "routine_pkey",
DROP COLUMN "routine_id",
ADD COLUMN     "routine_id" SERIAL NOT NULL,
DROP COLUMN "routinetype_id",
ADD COLUMN     "routinetype_id" INTEGER NOT NULL,
ADD CONSTRAINT "routine_pkey" PRIMARY KEY ("routine_id");

-- AlterTable
ALTER TABLE "routinetype" DROP CONSTRAINT "routinetype_pkey",
DROP COLUMN "routinetype_id",
ADD COLUMN     "routinetype_id" SERIAL NOT NULL,
ADD CONSTRAINT "routinetype_pkey" PRIMARY KEY ("routinetype_id");

-- AlterTable
ALTER TABLE "trainingday" DROP CONSTRAINT "trainingday_pkey",
DROP COLUMN "trainingday_id",
ADD COLUMN     "trainingday_id" SERIAL NOT NULL,
DROP COLUMN "week_id",
ADD COLUMN     "week_id" INTEGER,
ADD CONSTRAINT "trainingday_pkey" PRIMARY KEY ("trainingday_id");

-- AlterTable
ALTER TABLE "trainingdayexercise" DROP CONSTRAINT "trainingdayexercise_pkey",
DROP COLUMN "trainingdayexercise_id",
ADD COLUMN     "trainingdayexercise_id" SERIAL NOT NULL,
DROP COLUMN "exercise_id",
ADD COLUMN     "exercise_id" INTEGER NOT NULL,
DROP COLUMN "trainingday_id",
ADD COLUMN     "trainingday_id" INTEGER NOT NULL,
ADD CONSTRAINT "trainingdayexercise_pkey" PRIMARY KEY ("trainingdayexercise_id");

-- AlterTable
ALTER TABLE "usersettings" DROP CONSTRAINT "usersettings_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "activeroutine",
ADD COLUMN     "activeroutine" INTEGER,
ADD CONSTRAINT "usersettings_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "week" DROP CONSTRAINT "week_pkey",
DROP COLUMN "week_id",
ADD COLUMN     "week_id" SERIAL NOT NULL,
DROP COLUMN "routine_id",
ADD COLUMN     "routine_id" INTEGER NOT NULL,
ADD CONSTRAINT "week_pkey" PRIMARY KEY ("week_id");

-- AddForeignKey
ALTER TABLE "usersettings" ADD CONSTRAINT "usersettings_activeroutine_fkey" FOREIGN KEY ("activeroutine") REFERENCES "routine"("routine_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "routine" ADD CONSTRAINT "routine_routinetype_id_fkey" FOREIGN KEY ("routinetype_id") REFERENCES "routinetype"("routinetype_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "trainingdayexercise" ADD CONSTRAINT "trainingdayexercise_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "exercise"("exercise_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "trainingdayexercise" ADD CONSTRAINT "trainingdayexercise_trainingday_id_fkey" FOREIGN KEY ("trainingday_id") REFERENCES "trainingday"("trainingday_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "trainingday" ADD CONSTRAINT "trainingday_week_id_fkey" FOREIGN KEY ("week_id") REFERENCES "week"("week_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "week" ADD CONSTRAINT "week_routine_id_fkey" FOREIGN KEY ("routine_id") REFERENCES "routine"("routine_id") ON DELETE CASCADE ON UPDATE NO ACTION;
