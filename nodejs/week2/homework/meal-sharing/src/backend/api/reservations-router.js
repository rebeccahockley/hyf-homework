const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

const errorText = "Invalid request parameter";

router.get("/", async (request, response) => {
  try {
    response.send(reservations);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (request, response) => {
  let id = request.params.id;
  if (isNaN(id)) {
    response.status(406).send(errorText);
  } else {
    const reservationsID = reservations.filter(
      (reservation) => reservation.id === parseInt(id)
    );
    response.send(reservationsID);
  }
});

module.exports = router;
