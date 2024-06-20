/*
  Warnings:

  - You are about to drop the column `Price` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `Price`,
    ADD COLUMN `price` INTEGER NOT NULL DEFAULT 1;
