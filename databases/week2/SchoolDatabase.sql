CREATE DATABASE SchoolDatabase;

USE SchoolDatabase;

CREATE TABLE `class` (
  `Class_id` int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `Name` varchar(100) NOT NULL,
  `BeginDate` DATE,
  `EndDate` DATE
);

CREATE TABLE `student` (
  `Student_id` int unsigned NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Phone` varchar(20) NULL,
  `Class_id` int
); 

-- Create an index on the name column of the student table
CREATE UNIQUE INDEX idx_id
ON student (name); 

-- Add new column to the class table named status
ALTER Table class
ADD Status ENUM("Not Started", "Ongoing", "Finished"); 
