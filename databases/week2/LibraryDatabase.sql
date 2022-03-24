CREATE DATABASE LibraryDatabase DEFAULT CHARSET=utf8mb4;

USE LibraryDatabase;

CREATE TABLE `Members` (
  `Member_ID` int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `First_Name` varchar(255) NOT NULL,
  `Last_Name` varchar(255) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `Email` varchar(255) NULL,
  `Phone` varchar(20) NULL
); 

CREATE TABLE `Book_Details` (
  `Book_ID` int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `Title` varchar(255) NOT NULL,
  `Author` varchar(255) NOT NULL,
  `Genre` varchar(255)
); 

CREATE TABLE `Status_Details` (
  `Status_ID` int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `Status_Name` int NOT NULL,
  `Borrowed_Date` DATETIME NULL,
  `Due_Date` DATETIME NULL
); 

CREATE TABLE `Members_Books` (
  `Index_ID` int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `Member_ID` int unsigned NOT NULL,
  `Book_ID` int unsigned NOT NULL,
  CONSTRAINT `fk_member` FOREIGN KEY (`Member_ID`) REFERENCES `Members`(`Member_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_book` FOREIGN KEY (`Book_ID`) REFERENCES `Book_Details`(`Book_ID`) ON DELETE CASCADE ON UPDATE CASCADE 
); 

CREATE TABLE `Books_Status` (
  `Index_ID` int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `Status_ID` int unsigned NOT NULL,
  `Book_ID` int unsigned NOT NULL,
  CONSTRAINT `fk_status` FOREIGN KEY (`Status_ID`) REFERENCES `Status_Details`(`Status_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_books` FOREIGN KEY (`Book_ID`) REFERENCES `Book_Details`(`Book_ID`) ON DELETE CASCADE ON UPDATE CASCADE 
); 

