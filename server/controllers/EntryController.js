import EntryModel from "../models/EntryModel.js";

class EntryController {
  static async getNews(req, res) {
    try {
      let newsItems = await EntryModel.scrapeNews();

      res.json(newsItems);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async filterByTitleLengthAndSortByComments(req, res) {
    try {
      const newsItems = await EntryModel.scrapeNews();

      const filteredEntries = newsItems.filter((entry) => {
        const titleWords = entry.title.split(" ");
        return titleWords.length > 5;
      });

      const sortedEntries = EntryController.sortByComments(filteredEntries);

      res.json(sortedEntries);
    } catch (error) {
      console.error("Error filtering news:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async filterByTitleLengthAndSortByPoints(req, res) {
    try {
      const newsItems = await EntryModel.scrapeNews();

      const filteredEntries = newsItems.filter((entry) => {
        const titleWords = entry.title.split(" ");
        return titleWords.length <= 5;
      });

      const sortedEntries = EntryController.sortByPoints(filteredEntries);

      res.json(sortedEntries);
    } catch (error) {
      console.error("Error filtering news:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static sortByComments(entries) {
    return entries.sort((a, b) => {
      return parseInt(b.comments) - parseInt(a.comments);
    });
  }

  static sortByPoints(entries) {
    return entries.sort((a, b) => {
      return parseInt(b.points) - parseInt(a.points);
    });
  }
}

export default EntryController;
