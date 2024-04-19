/*
  Warnings:

  - You are about to drop the column `esoque` on the `produtos` table. All the data in the column will be lost.
  - You are about to alter the column `preco` on the `produtos` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal`.
  - Added the required column `estoque` to the `produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `produtos` DROP COLUMN `esoque`,
    ADD COLUMN `estoque` INTEGER NOT NULL,
    MODIFY `preco` DECIMAL NOT NULL;
