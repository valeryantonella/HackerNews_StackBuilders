import EntryModel from "../models/EntryModel.js";

class EntryController {
  static async getNews(req, res) {
    try {
      // Obtener las noticias sin filtrar
      let newsItems = await EntryModel.scrapeNews();

      // Aplicar filtros si es necesario
      // Aquí puedes agregar la lógica de filtrado según lo requerido

      // Devolver las noticias al cliente
      res.json(newsItems);
      console.log(newsItems);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default EntryController;
