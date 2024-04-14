/*
  Warnings:

  - Added the required column `description` to the `muscle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "muscle" ADD COLUMN     "description" VARCHAR(200) NOT NULL;
