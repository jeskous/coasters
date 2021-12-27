-- DropForeignKey
ALTER TABLE `CoasterDrinks` DROP FOREIGN KEY `CoasterDrinks_coasterId_fkey`;

-- DropForeignKey
ALTER TABLE `CoasterDrinks` DROP FOREIGN KEY `CoasterDrinks_drinkId_fkey`;

-- AddForeignKey
ALTER TABLE `CoasterDrinks` ADD CONSTRAINT `CoasterDrinks_coasterId_fkey` FOREIGN KEY (`coasterId`) REFERENCES `Coaster`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CoasterDrinks` ADD CONSTRAINT `CoasterDrinks_drinkId_fkey` FOREIGN KEY (`drinkId`) REFERENCES `Drink`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
