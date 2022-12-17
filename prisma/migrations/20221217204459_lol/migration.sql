/*
  Warnings:

  - You are about to drop the column `airdate` on the `Episode` table. All the data in the column will be lost.
  - Added the required column `air_date` to the `Episode` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Episode` DROP COLUMN `airdate`,
    ADD COLUMN `air_date` VARCHAR(255) NOT NULL;
