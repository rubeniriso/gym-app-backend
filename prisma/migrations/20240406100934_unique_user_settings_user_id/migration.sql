/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `usersettings` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "usersettings_user_id_key" ON "usersettings"("user_id");
