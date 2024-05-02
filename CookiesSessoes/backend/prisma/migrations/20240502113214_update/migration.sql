/*
  Warnings:

  - You are about to drop the column `esoque` on the `produtos` table. All the data in the column will be lost.
  - You are about to alter the column `preco` on the `produtos` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal(10,2)`.
  - Added the required column `estoque` to the `produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `produtos` DROP COLUMN `esoque`,
    ADD COLUMN `estoque` INTEGER NOT NULL,
    MODIFY `preco` DECIMAL(10, 2) NOT NULL;

-- CreateTable
CREATE TABLE `usuarios` (
    `id` CHAR(36) NOT NULL,
    `nome` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `senha` VARCHAR(100) NOT NULL,
    `tipoUsuarioId` CHAR(36) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `usuarios_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipos_usuarios` (
    `id` CHAR(36) NOT NULL,
    `rotulo` CHAR(8) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `usuarios` ADD CONSTRAINT `usuarios_tipoUsuarioId_fkey` FOREIGN KEY (`tipoUsuarioId`) REFERENCES `tipos_usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
