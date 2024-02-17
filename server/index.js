const express = require("express");
const path = require("path");
const app = require("./app.js");
const EntryController = require("./controllers/EntryController.js");

app.use(express.static("client"));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "../client") });
});

app.get("/api/news", EntryController.getNews);

app.get("/api/news/filterByComments", (req, res) =>
  EntryController.getNewsFilterMoreThanWordsSorted(req, res)
);

app.get("/api/news/filterByPoints", (req, res) =>
  EntryController.getNewsFilterLessEqualWordsSorted(req, res)
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
