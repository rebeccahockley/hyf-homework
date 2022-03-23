CREATE DATABASE LibraryDatabase DEFAULT CHARSET=utf8mb4;

USE LibraryDatabase;

CREATE TABLE `Member` (
  `Member_ID` int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `First_Name` varchar(255) NOT NULL,
  `Last_Name` varchar(255) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `Email` varchar(255) NULL,
  `Phone` varchar(20) NULL
); 

CREATE TABLE `Book_Status` (
  `Status_ID` int(10) unsigned NOT NULL PRIMARY KEY,
  `Name` varchar(255) NOT NULL
); 

CREATE TABLE `Book_Details` (
  `Book_ID` int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `Title` varchar(255) NOT NULL,
  `Author` varchar(255) NOT NULL,
  `Genre` varchar(255) NOT NULL,
  `Shelf_ID` int NOT NULL,
  `Status_ID` int(10) unsigned NOT NULL,
  `Reserved` varchar(20) NOT NULL,
  CONSTRAINT `fk_status` FOREIGN KEY (`Status_ID`) REFERENCES `Book_Status` (`Status_ID`) ON DELETE CASCADE ON UPDATE CASCADE
); 

CREATE TABLE `Loaned_Books` (
  `Index_ID` int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `Member_ID` int unsigned NOT NULL,
  `Book_ID` int unsigned NOT NULL,
  `Borrow_Date` DATETIME NOT NULL,
  `Due_Date` DATETIME NOT NULL,
  CONSTRAINT `fk_member` FOREIGN KEY (`Member_ID`) REFERENCES `Member`(`Member_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_book` FOREIGN KEY (`Book_ID`) REFERENCES `Book_Details`(`Book_ID`) ON DELETE CASCADE ON UPDATE CASCADE 
); 
