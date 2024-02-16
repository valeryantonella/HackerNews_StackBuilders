import EntryModel from "../models/EntryModel.js";

class EntryController {
  static async getNews(req, res) {
    try {
      // Obtener las noticias sin filtrar
      let newsItems = await EntryModel.scrapeNews();

      // Devolver las noticias al cliente
      res.json(newsItems);
      //console.log(newsItems);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async filterByTitleLengthAndSortByComments(req, res) {
    try {
      // Obtener todas las noticias
      const newsItems = await EntryModel.scrapeNews();

      // Filtrar entradas según el número de palabras en el título
      const filteredEntries = newsItems.filter((entry) => {
        const titleWords = entry.title.split(" ");
        return titleWords.length > 5;
      });

      // Ordenar las entradas filtradas por el número de comentarios utilizando sortByComments
      const sortedEntries = EntryController.sortByComments(filteredEntries);

      // Devolver las entradas filtradas y ordenadas como respuesta en formato JSON
      res.json(sortedEntries);
      console.log(sortedEntries);
    } catch (error) {
      console.error("Error filtering news:", error);
      // Enviar una respuesta de error al cliente
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async filterByTitleLengthAndSortByPoints(req, res) {
    try {
      // Obtener todas las noticias
      const newsItems = await EntryModel.scrapeNews();

      // Filtrar entradas según el número de palabras en el título
      const filteredEntries = newsItems.filter((entry) => {
        const titleWords = entry.title.split(" ");
        return titleWords.length <= 5;
      });

      // Ordenar las entradas filtradas por puntos utilizando sortByPoints
      const sortedEntries = EntryController.sortByPoints(filteredEntries);

      // Devolver las entradas filtradas y ordenadas como respuesta en formato JSON
      res.json(sortedEntries);
      console.log(sortedEntries);
    } catch (error) {
      console.error("Error filtering news:", error);
      // Enviar una respuesta de error al cliente
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static sortByComments(entries) {
    // Ordenar las entradas por el número de comentarios
    return entries.sort((a, b) => {
      return parseInt(b.comments) - parseInt(a.comments);
    });
  }

  static sortByPoints(entries) {
    // Ordenar las entradas por puntos
    return entries.sort((a, b) => {
      return parseInt(b.points) - parseInt(a.points);
    });
  }
}

export default EntryController;
