import express from "express";

const port = 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("Api Is Coming..");
});

app.listen(port, () => {
  console.log(`Server Running On Port ${port}`);
});
