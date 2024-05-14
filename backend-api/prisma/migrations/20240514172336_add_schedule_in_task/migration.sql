/*
  Warnings:

  - Added the required column `schedule` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tasks" ADD COLUMN     "schedule" TIMESTAMP(3) NOT NULL;
