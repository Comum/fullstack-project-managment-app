const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

app.get("/", (request, response) => {
  response.send({ hello: "world" });
});

app.listen(8001, () => {
  console.log("App listening on port 8001!");
});
