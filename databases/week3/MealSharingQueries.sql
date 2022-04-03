USE MealSharing;

--Get all meals
SELECT *
FROM Meal;

--Add a new meal
INSERT INTO Meal (`Title`, `Description`, `Location`, `When`, `Max_Reservations`, `Price`, `Created_Date`)
VALUES ('Greek Meatballs', 'Meatballs served with mixed salad and potato wedges', 'Randers', '2022-03-26 14:30:00', '8', '20', NULL);

--Get a meal with any id, fx 1
SELECT *
FROM Meal
WHERE id = 2;

--Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Meal
SET Location = 'Copenhagen'
WHERE id = 3;

--Delete a meal with any id, fx 1
DELETE FROM Meal
WHERE id = 1;

--Get all reservations
SELECT *
FROM Reservation;

--Add a new reservation
INSERT INTO Reservation (`No_Of_Guests`, `Meal_ID`, `Created_Date`, `Contact_PhoneNumber`, `Contact_Name`, `Contact_Email`)
VALUES ('3', '5', '2022-03-25 09:39:25', '94758515', 'Jeffery', 'jeffery@gmail.com');

--Get a reservation with any id, fx 1
SELECT *
FROM Reservation
WHERE id = 4;

--Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Reservation
SET Contact_PhoneNumber = '64975923'
WHERE id = 3; --Meal ID or Reservation ID?

--Delete a reservation with any id, fx 1
DELETE FROM Reservation
WHERE id = 4;

--Get all reviews
SELECT *
FROM Review;

--Add a new review
INSERT INTO Review (`Title`, `Description`, `Meal_ID`, `Stars`, `Created_Date`)
VALUES ('Good food, would come again', 'The title says it all', '5', '4', NULL)

--Get a review with any id, fx 1
SELECT *
FROM Review
WHERE id = 1;

--Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Review
SET Stars = '2'
WHERE id = 2;

--Delete a review with any id, fx 1
DELETE FROM Review
WHERE id = 1;



--Get meals that has a price smaller than a specific price fx 90
SELECT *
FROM Meal
WHERE Price < 30;

--Get meals that still has available reservations
SELECT Meal.Title, Reservation.No_Of_Guests, Meal.Max_Reservations
FROM Meal
JOIN Reservation ON Meal.ID = Reservation.Meal_ID
WHERE Meal.Max_Reservations > Reservation.No_Of_Guests;


--Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT *
FROM Meal
WHERE Title LIKE '%Meat%';

--Get meals that has been created between two dates
SELECT *
FROM Meal
WHERE Created_Date BETWEEN '2022-02-01' AND '2022-03-01';

--Get only specific number of meals fx return only 5 meals
SELECT *
FROM Meal
LIMIT 3;

--Get the meals that have good reviews
SELECT Meal.Title, Review.Stars 
FROM Meal
JOIN Review ON Meal.ID = Review.Meal_ID 
WHERE Review.Stars > 3;


--Get reservations for a specific meal sorted by created_date
SELECT *
FROM Reservation
WHERE Reservation.Meal_ID = 4
ORDER BY Created_Date;


--Sort all meals by average number of stars in the reviews
SELECT AVG(Stars), Meal.Title
FROM Review
JOIN Meal ON Review.Meal_ID = Meal.ID
GROUP BY Review.Meal_ID
ORDER BY AVG(Stars) DESC;