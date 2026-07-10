/*
  Warnings:

  - You are about to drop the column `machineType` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `preferredDate` on the `Booking` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "machineType",
DROP COLUMN "preferredDate";
