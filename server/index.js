import app from "./app.js";
import EntryController from "./controllers/EntryController.js";
import express from "express";
import path from "path"; // Importar el módulo 'path'

// Servir archivos estáticos desde la carpeta 'client'
app.use(express.static("client"));

// Configurar ruta para la raíz del servidor
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "../client") });
});

// Configurar ruta para obtener noticias
app.get("/api/news", EntryController.getNews);

app.get("/api/news/filterByComments", (req, res) =>
  EntryController.filterByTitleLengthAndSortByComments(req, res)
);

app.get("/api/news/filterByPoints", (req, res) =>
  EntryController.filterByTitleLengthAndSortByPoints(req, res)
);
// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
