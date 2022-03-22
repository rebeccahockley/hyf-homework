CREATE DATABASE LibraryDatabase;

USE LibraryDatabase;

CREATE TABLE `Member` (
  `Member_ID` int unsigned NOT NULL AUTO_INCREMENT,
  `First_Name` varchar(255) NOT NULL,
  `Last_Name` varchar(255) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `Email` varchar(255) NULL,
  `Phone` varchar(20) NULL
); 

CREATE TABLE `Book_Details` (
  `Book_ID` int unsigned NOT NULL AUTO_INCREMENT,
  `Title` varchar(255) NOT NULL,
  `Author` varchar(255) NOT NULL,
  `Genre` varchar(255) NOT NULL,
  `Shelf_ID` int NOT NULL,
  `Status_ID` int NOT NULL,
  `Reserved` varchar(20) NOT NULL
); 

CREATE TABLE `Loaned_Books` (
  `Index_ID` int unsigned NOT NULL AUTO_INCREMENT,
  `Member_ID` int unsigned NOT NULL,
  `Book_ID` int unsigned NOT NULL,
  `Borrow_Date` DATETIME NOT NULL,
  `Due_Date` DATETIME NOT NULL,
); 

CREATE TABLE `Book_Status` (
  `Status_ID` int(10) unsigned NOT NULL,
  `Name` varchar(255) NOT NULL
); 