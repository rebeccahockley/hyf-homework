const express = require("express");
const router = express.Router();

router.get("/add", async (request, response) => {
  try {
    const parameters = request.query;
    if (
      Object.keys(parameters).length === 0 ||
      Object.keys(parameters).length === 1
    ) {
      response
        .status(400)
        .send("Invalid input: Please enter 2 or more numbers");
    } else {
      let valuesFromParameters = Object.values(parameters);
      let additionResult = valuesFromParameters
        .map((value) => parseInt(value))
        .reduce((sum, value) => sum + value);
      response.send({ Result: additionResult });
    }
  } catch (error) {
    response.status(500).send("Sorry, we didn't complete this request");
  }
});

router.get("/multiply", async (request, response) => {
  try {
    const parameters = request.query;
    if (
      Object.keys(parameters).length === 0 ||
      Object.keys(parameters).length === 1
    ) {
      response
        .status(400)
        .send("Invalid input: Please enter 2 or more numbers");
    } else {
      let valuesFromParameters = Object.values(parameters);
      let multiplicationResult = valuesFromParameters
        .map((value) => parseInt(value))
        .reduce((sum, value) => sum * value);
      response.status(200).send({ Result: multiplicationResult });
    }
  } catch {
    response.status(500).send("Sorry, we didn't complete this request");
  }
});

router.get("/subtract", async (request, response) => {
  const parameters = request.query;
  try {
    if (
      Object.keys(parameters).length === 0 ||
      Object.keys(parameters).length === 1
    ) {
      response
        .status(400)
        .send("Invalid input: Please enter 2 or more numbers");
    } else {
      let valuesFromParameters = Object.values(parameters);
      let subtractionResult = valuesFromParameters
        .map((value) => parseInt(value))
        .reduce((sum, value) => sum - value);
      response.send({ Result: subtractionResult });
    }
  } catch {
    response.status(500).send("Sorry, we didn't complete this request");
  }
});

router.get("/divide", async (request, response) => {
  const parameters = request.query;
  try {
    if (
      Object.keys(parameters).length === 0 ||
      Object.keys(parameters).length === 1
    ) {
      response
        .status(400)
        .send("Invalid input: Please enter 2 or more numbers");
    } else {
      let valuesFromParameters = Object.values(parameters);
      let divisionResult = valuesFromParameters
        .map((value) => parseInt(value))
        .reduce((sum, value) => sum / value);
      response.send({ Result: divisionResult });
    }
  } catch {
    response.status(500).send("Sorry, we didn't complete this request");
  }
});

//Get through POST

router.post("/add", async (request, response) => {
  const inputtedValues = request.body;
  try {
    if (inputtedValues.length === 0 || inputtedValues.length === 1) {
      response
        .status(400)
        .send("Invalid input: Please enter 2 or more numbers");
    } else {
      let additionResult = Object.values(inputtedValues).reduce(
        (sum, value) => sum + value
      );
      response.send({ Result: additionResult });
    }
  } catch {
    response.status(500).send("Sorry, we didn't complete this request");
  }
});

router.post("/multiply", async (request, response) => {
  const inputtedValues = request.body;
  try {
    if (inputtedValues.length === 0 || inputtedValues.length === 1) {
      response
        .status(400)
        .send("Invalid input: Please enter 2 or more numbers");
    } else {
      let multiplicationResult = Object.values(inputtedValues).reduce(
        (sum, value) => sum * value
      );
      response.send({ Result: multiplicationResult });
    }
  } catch {
    response.status(500).send("Sorry, we didn't complete this request");
  }
});

router.post("/subtract", async (request, response) => {
  const inputtedValues = request.body;
  try {
    if (inputtedValues.length === 0 || inputtedValues.length === 1) {
      response
        .status(400)
        .send("Invalid input: Please enter 2 or more numbers");
    } else {
      let subtractionResult = Object.values(inputtedValues).reduce(
        (sum, value) => sum - value
      );
      response.send({ Result: subtractionResult });
    }
  } catch {
    response.status(500).send("Sorry, we didn't complete this request");
  }
});

router.post("/divide", async (request, response) => {
  const inputtedValues = request.body;
  try {
    if (inputtedValues.length === 0 || inputtedValues.length === 1) {
      response
        .status(400)
        .send("Invalid input: Please enter 2 or more numbers");
    } else {
      let divisionResult = Object.values(inputtedValues).reduce(
        (sum, value) => sum / value
      );
      response.send({ Result: divisionResult });
    }
  } catch {
    response.status(500).send("Sorry, we didn't complete this request");
  }
});

module.exports = router;
