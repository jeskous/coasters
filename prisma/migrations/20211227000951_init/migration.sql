/*
  Warnings:

  - You are about to drop the column `userId` on the `Drink` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `coasterId` to the `Drink` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Drink` DROP FOREIGN KEY `Drink_userId_fkey`;

-- AlterTable
ALTER TABLE `Drink` DROP COLUMN `userId`,
    ADD COLUMN `coasterId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `Coaster` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Drink` ADD CONSTRAINT `Drink_coasterId_fkey` FOREIGN KEY (`coasterId`) REFERENCES `Coaster`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
