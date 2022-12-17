/*
  Warnings:

  - Added the required column `episode` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `origin` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `species` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Character` ADD COLUMN `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `episode` JSON NOT NULL,
    ADD COLUMN `gender` VARCHAR(255) NOT NULL,
    ADD COLUMN `location` JSON NOT NULL,
    ADD COLUMN `origin` JSON NOT NULL,
    ADD COLUMN `species` VARCHAR(255) NOT NULL,
    ADD COLUMN `status` VARCHAR(255) NOT NULL,
    ADD COLUMN `type` VARCHAR(255) NOT NULL,
    ADD COLUMN `url` VARCHAR(255) NOT NULL;
