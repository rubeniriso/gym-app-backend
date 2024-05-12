/*
  Warnings:

  - You are about to drop the column `equipment` on the `exercise` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "exercise" DROP COLUMN "equipment",
ADD COLUMN     "bodypart_id" UUID,
ADD COLUMN     "equipment_id" UUID;

-- AddForeignKey
ALTER TABLE "exercise" ADD CONSTRAINT "exercise_equipment_id_fkey" FOREIGN KEY ("equipment_id") REFERENCES "equipment"("equipment_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exercise" ADD CONSTRAINT "exercise_bodypart_id_fkey" FOREIGN KEY ("bodypart_id") REFERENCES "bodypart"("bodypart_id") ON DELETE SET NULL ON UPDATE CASCADE;
