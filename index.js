const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.use("/", require("./routes/start"));

const initializeApp = () => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

initializeApp();
