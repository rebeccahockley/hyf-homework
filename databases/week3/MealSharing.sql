CREATE DATABASE MealSharing
    DEFAULT CHARACTER SET = 'utf8mb4';

USE MealSharing;

CREATE TABLE `Meal` (
  `ID` INT unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `Title` varchar(255) NOT NULL,
  `Description` TEXT NULL DEFAULT NULL,
  `Location` varchar(255) NOT NULL,
  `When` DATETIME NOT NULL,
  `Max_Reservations` INT unsigned NOT NULL,
  `Price` DECIMAL (5, 2) NOT NULL,
  `Created_Date` DATE DEFAULT NULL
); 

CREATE TABLE `Reservation` (
  `ID` INT unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `No_Of_Guests` INT UNSIGNED NOT NULL,
  `Meal_ID` INT UNSIGNED NOT NULL,
  `Created_Date` DATE DEFAULT NULL,
  `Contact_PhoneNumber` VARCHAR(255) NULL,
  `Contact_Name` VARCHAR(255) NOT NULL,
  `Contact_Email` VARCHAR(255) NOT NULL,
  CONSTRAINT `fk_meal` FOREIGN KEY (`Meal_ID`) REFERENCES `Meal`(`ID`) ON DELETE CASCADE ON UPDATE CASCADE
); 

CREATE TABLE `Review` (
  `ID` INT unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `Title` varchar(255) NOT NULL,
  `Description` TEXT NULL DEFAULT NULL,
  `Meal_ID` INT UNSIGNED NOT NULL,
  `Stars` INT UNSIGNED DEFAULT NULL,
  `Created_Date` DATE DEFAULT NULL,
  CONSTRAINT `fk_meal_review` FOREIGN KEY (`Meal_ID`) REFERENCES `Meal`(`ID`) ON DELETE CASCADE ON UPDATE CASCADE
); 

INSERT INTO 
Meal (`Title`, `Description`, `Location`, `When`, `Max_Reservations`, `Price`, `Created_Date`)
VALUES 
('4 Bean Chilli', '4 different types of beans in a spicy chilli', 'Aarhus', '2022-03-29 16:30:00', '10', '20.50', NULL),
('Spaghetti Bolognaise', 'Freshly made spaghetti topped with a meat sauce', 'Randers', '2022-03-28 17:30:00', '5', '25', '2022-02-24'),
('Boller i Karry', 'Meatballs in a curry sauce, served with rice', 'Horsens', '2022-04-17 12:30:00', '20', '35', '2022-03-19'),
('Pulled Pork Burgers', 'BYOB: Build Your Own Burger, All ingredients provided.', 'Aarhus C', '2022-05-05 12:00:00', '15', '50', NULL);

INSERT INTO Reservation (`No_Of_Guests`, `Meal_ID`, `Created_Date`, `Contact_PhoneNumber`, `Contact_Name`, `Contact_Email`)
VALUES 
('7', '2', NULL, '60523794', 'Benjamin Button', 'youngereachday@buttons.com'),
('3', '4', '2022-04-17', '22164457', 'Louisa Paddilino', 'louisa_p@gmail.com'),
('11', '1', '2022-03-24', NULL, 'Meredith Grey', 'meredith@greysloan.com'),
('2', '3', NULL, '46795132', 'James Wilson', 'wpsjames@yahoo.co.uk');

INSERT INTO Review (`Title`, `Description`, `Meal_ID`, `Stars`, `Created_Date`)
VALUES 
('Fantastic!', NULL, '1', '4', '2022-04-04'),
('Company: Great! Food: Average!', 'The people were so fun, but the food lacked flavour', '2', '3', '2022-03-31'),
('Filling and scumptious!', 'Very tasty, home cooked food', '3', '5', NULL),
('Chaotic!', 'BOYB was totally chaotic! Too many people there, not enough food! Lady said people had turned up without booking!!!!', '4', '1', NULL);

