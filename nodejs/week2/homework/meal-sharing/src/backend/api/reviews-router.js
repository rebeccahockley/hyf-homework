const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");

const errorText = "Invalid request parameter";

router.get("/", async (request, response) => {
  try {
    response.send(reviews);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (request, response) => {
  const id = request.params.id;
  if (isNaN(id)) {
    response.status(406).send(errorText);
  } else {
    const reviewsID = reviews.filter((review) => review.id === parseInt(id));
    response.send(reviewsID);
  }
});

module.exports = router;
