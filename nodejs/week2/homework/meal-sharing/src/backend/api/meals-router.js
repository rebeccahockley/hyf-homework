const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");
const errorText = "Invalid request parameter";

router.get("/", async (request, response) => {
  try {
    const supportedParameters = ["maxPrice", "title", "createdAfter", "limit"];
    const maxPrice = parseInt(request.query.maxPrice);
    const title = request.query.title;
    const createdAfter = request.query.createdAfter;
    const limit = parseInt(request.query.limit);

    if (Object.keys(request.query) != 0) {
      if (maxPrice) {
        const filteredPriceMeals = meals.filter(
          (meal) => meal.price < maxPrice
        );
        response.send(filteredPriceMeals);
      } else if (title) {
        const filteredTitleMeals = meals.filter((meal) =>
          meal.title.toLowerCase().includes(title.toLowerCase())
        );
        response.send(filteredTitleMeals);
      } else if (createdAfter) {
        if (isNaN(createdAfter)) {
          response.status(406).send(errorText);
        } else {
          const filteredDateMeals = meals.filter(
            (meal) => meal.createdAt > createdAfter
          );
          response.send(filteredDateMeals);
        }
      } else if (limit) {
        response.send(meals.slice(0, limit));
      } else if (!supportedParameters.includes(request.query)) {
        response.status(406).send(errorText);
      }
    } else {
      response.status(200).send(meals);
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (request, response) => {
  const id = request.params.id;
  if (isNaN(id)) {
    response.status(406).send(errorText);
  } else {
    const mealID = meals.filter((meal) => meal.id === parseInt(id));
    response.send(mealID);
  }
});

module.exports = router;
