-- CreateTable
CREATE TABLE `Coaster` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Drink` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CoasterDrinks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `coasterId` INTEGER NOT NULL,
    `drinkId` INTEGER NOT NULL,
    `date` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`, `coasterId`, `drinkId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CoasterDrinks` ADD CONSTRAINT `CoasterDrinks_coasterId_fkey` FOREIGN KEY (`coasterId`) REFERENCES `Coaster`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CoasterDrinks` ADD CONSTRAINT `CoasterDrinks_drinkId_fkey` FOREIGN KEY (`drinkId`) REFERENCES `Drink`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
