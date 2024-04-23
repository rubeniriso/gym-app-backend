-- DropForeignKey
ALTER TABLE "routine" DROP CONSTRAINT "routine_user_id_fkey";

-- AddForeignKey
ALTER TABLE "routine" ADD CONSTRAINT "routine_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
