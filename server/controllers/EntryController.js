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

  static async getNewsFilterMoreThanWordsSorted(req, res) {
    try {
      const filteredEntries = await EntryController.filterMoreThanWords(5);
      const sortedEntries = EntryController.sortByComments(filteredEntries);
      res.json(sortedEntries);
    } catch (error) {
      console.error("Error filtering news:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async getNewsFilterLessEqualWordsSorted(req, res) {
    try {
      const filteredEntries = await EntryController.filterLessEqualWords(5);
      const sortedEntries = EntryController.sortByPoints(filteredEntries);
      res.json(sortedEntries);
    } catch (error) {
      console.error("Error filtering news:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async filterLessEqualWords(numWords) {
    let filteredEntries = [];
    const newsItems = await EntryModel.scrapeNews();
    filteredEntries = newsItems.filter((entry) => {
      const titleWords = entry.title.split(" ");
      return titleWords.length <= numWords;
    });
    return filteredEntries;
  }

  static async filterMoreThanWords(numWords) {
    let filteredEntries = [];
    const newsItems = await EntryModel.scrapeNews();
    filteredEntries = newsItems.filter((entry) => {
      const titleWords = entry.title.split(" ");
      return titleWords.length > numWords;
    });
    return filteredEntries;
  }

  static sortByComments(entries) {
    return entries.sort((a, b) => parseInt(b.comments) - parseInt(a.comments));
  }

  static sortByPoints(entries) {
    return entries.sort((a, b) => parseInt(b.points) - parseInt(a.points));
  }
}

export default EntryController;
