const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.get("/numbers/add", async (request, response) => {
  const first = parseInt(request.query.first);
  const second = parseInt(request.query.second);
  const answer = first + second;
  if (isNaN(first) || isNaN(second)) {
    response.send(`Error! Not a number. Please enter 2 numbers`);
  } else {
    response.send(`Answer: ${answer}`);
  }
});

app.get("/numbers/multiply", async (request, response) => {
  const first = parseInt(request.query.first);
  const second = parseInt(request.query.second);
  const answer = first * second;
  if (isNaN(first) || isNaN(second)) {
    response.send(`Error! Not a number. Please enter 2 numbers`);
  } else {
    response.send(`Answer: ${answer}`);
  }
});

app.listen(3000, () => console.log(`Calculator: Listening on port 3000`));
