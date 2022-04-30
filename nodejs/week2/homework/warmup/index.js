const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.get("/numbers/add", async (request, response) => {
  if (isNaN(request.query.first) || isNaN(request.query.second)) {
    response.status(406).json(`Error! Not a number. Please enter 2 numbers`);
  } else {
    response.send(
      `Answer: ${
        parseInt(request.query.first) + parseInt(request.query.second)
      } `
    );
  }
});

app.get("/numbers/multiply", async (request, response) => {
  if (isNaN(request.query.first) || isNaN(request.query.second)) {
    response.status(406).json(`Error! Not a number. Please enter 2 numbers`);
  } else {
    response.send(
      `Answer: ${
        parseInt(request.query.first) * parseInt(request.query.second)
      } `
    );
  }
});

app.listen(3000, () => console.log(`Calculator: Listening on port 3000`));
