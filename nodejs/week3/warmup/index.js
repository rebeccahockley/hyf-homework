const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const calculatorRouter = require("./calculatorRouter");

app.use("/calculator", calculatorRouter);

app.listen(3000, () => console.log(`Calculator: Listening on port 3000`));
