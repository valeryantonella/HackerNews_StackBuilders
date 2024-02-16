import app from "./app.js";
import EntryController from "./controllers/EntryController.js";
import express from "express";
import path from "path";

app.use(express.static("client"));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "../client") });
});

app.get("/api/news", EntryController.getNews);

app.get("/api/news/filterByComments", (req, res) =>
  EntryController.filterByTitleLengthAndSortByComments(req, res)
);

app.get("/api/news/filterByPoints", (req, res) =>
  EntryController.filterByTitleLengthAndSortByPoints(req, res)
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
