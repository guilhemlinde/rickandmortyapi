/*
  Warnings:

  - You are about to alter the column `episode` on the `Character` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.
  - You are about to drop the `Location` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `Character` MODIFY `episode` JSON NOT NULL;

-- DropTable
DROP TABLE `Location`;
