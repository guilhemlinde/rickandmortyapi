/*
  Warnings:

  - You are about to alter the column `episode` on the `Character` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `Character` MODIFY `episode` JSON NOT NULL;
