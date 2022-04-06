const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");

const mealsWithReviews = meals.map((meal) => {
  meal.reviews = [];
  reviews.forEach((review) => {
    if (meal.id === review.mealId) {
      meal.reviews.push(review);
    }
  });
  return meal;
});

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

app.get("/meals", async (request, response) => {
  response.send(mealsWithReviews);
});

app.get("/cheap-meals", async (request, response) => {
  const cheapMeals = mealsWithReviews.filter((meal) => meal.price < 55);
  response.send(cheapMeals);
});

app.get("/large-meals", async (request, response) => {
  const largeMeals = mealsWithReviews.filter(
    (meal) => meal.maxNumberOfGuests > 12
  );
  response.send(largeMeals);
});

app.get("/meal", async (request, response) => {
  const randomMeal = meals[Math.floor(Math.random() * meals.length)];
  response.send(randomMeal);
});

app.get("/reservations", async (request, response) => {
  response.send(reservations);
});

app.get("/reservation", async (request, response) => {
  response.send(reservations[Math.floor(Math.random() * reservations.length)]);
});

module.exports = app;
