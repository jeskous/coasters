/*
  Warnings:

  - You are about to drop the column `coasterId` on the `Drink` table. All the data in the column will be lost.
  - You are about to drop the `DrinkHistory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Drink` DROP FOREIGN KEY `Drink_coasterId_fkey`;

-- AlterTable
ALTER TABLE `Drink` DROP COLUMN `coasterId`;

-- DropTable
DROP TABLE `DrinkHistory`;

-- CreateTable
CREATE TABLE `CoasterDrinks` (
    `coasterId` INTEGER NOT NULL,
    `drinkId` INTEGER NOT NULL,

    PRIMARY KEY (`coasterId`, `drinkId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CoasterDrinks` ADD CONSTRAINT `CoasterDrinks_coasterId_fkey` FOREIGN KEY (`coasterId`) REFERENCES `Coaster`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CoasterDrinks` ADD CONSTRAINT `CoasterDrinks_drinkId_fkey` FOREIGN KEY (`drinkId`) REFERENCES `Drink`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
