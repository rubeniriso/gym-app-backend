-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usersettings" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" TEXT NOT NULL,
    "activeroutine" UUID,

    CONSTRAINT "usersettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "bodypart" (
    "bodypart_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "bodypart_pkey" PRIMARY KEY ("bodypart_id")
);

-- CreateTable
CREATE TABLE "equipment" (
    "equipment_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "equipment_pkey" PRIMARY KEY ("equipment_id")
);

-- CreateTable
CREATE TABLE "muscle" (
    "muscle_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(100) NOT NULL,
    "bodypart_id" UUID NOT NULL,

    CONSTRAINT "muscle_pkey" PRIMARY KEY ("muscle_id")
);

-- CreateTable
CREATE TABLE "muscleexercise" (
    "muscleexercise_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "muscle_id" UUID NOT NULL,
    "exercise_id" UUID NOT NULL,

    CONSTRAINT "muscleexercise_pkey" PRIMARY KEY ("muscleexercise_id")
);

-- CreateTable
CREATE TABLE "exercise" (
    "exercise_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(100),
    "equipment" VARCHAR(100),
    "gif_url" VARCHAR(255),
    "primarymuscle_id" UUID NOT NULL,
    "instructions" TEXT[],

    CONSTRAINT "exercise_pkey" PRIMARY KEY ("exercise_id")
);

-- CreateTable
CREATE TABLE "routine" (
    "routine_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "user_id" TEXT NOT NULL,
    "routinetype_id" UUID NOT NULL,

    CONSTRAINT "routine_pkey" PRIMARY KEY ("routine_id")
);

-- CreateTable
CREATE TABLE "routinetype" (
    "routinetype_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "icon_url" TEXT NOT NULL,
    "icon_alt_text" TEXT NOT NULL,

    CONSTRAINT "routinetype_pkey" PRIMARY KEY ("routinetype_id")
);

-- CreateTable
CREATE TABLE "trainingdayexercise" (
    "trainingdayexercise_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(100) NOT NULL,
    "sets" INTEGER,
    "reps" INTEGER,
    "weight" INTEGER,
    "rir" INTEGER,
    "exercise_id" UUID NOT NULL,
    "trainingday_id" UUID NOT NULL,

    CONSTRAINT "trainingdayexercise_pkey" PRIMARY KEY ("trainingdayexercise_id")
);

-- CreateTable
CREATE TABLE "trainingday" (
    "trainingday_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "week_id" UUID,

    CONSTRAINT "trainingday_pkey" PRIMARY KEY ("trainingday_id")
);

-- CreateTable
CREATE TABLE "week" (
    "week_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "routine_id" UUID NOT NULL,

    CONSTRAINT "week_pkey" PRIMARY KEY ("week_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "usersettings_user_id_key" ON "usersettings"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usersettings" ADD CONSTRAINT "usersettings_activeroutine_fkey" FOREIGN KEY ("activeroutine") REFERENCES "routine"("routine_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usersettings" ADD CONSTRAINT "usersettings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "muscle" ADD CONSTRAINT "muscle_bodypart_id_fkey" FOREIGN KEY ("bodypart_id") REFERENCES "bodypart"("bodypart_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "muscleexercise" ADD CONSTRAINT "muscleexercise_muscle_id_fkey" FOREIGN KEY ("muscle_id") REFERENCES "muscle"("muscle_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "muscleexercise" ADD CONSTRAINT "muscleexercise_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "exercise"("exercise_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "exercise" ADD CONSTRAINT "exercise_primarymuscle_id_fkey" FOREIGN KEY ("primarymuscle_id") REFERENCES "muscle"("muscle_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "routine" ADD CONSTRAINT "routine_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
