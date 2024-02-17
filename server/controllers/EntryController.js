const EntryModel = require("../models/EntryModel.js");

class EntryController {
  static async getNewsJson() {
    try {
      const newsItems = await EntryModel.scrapeNews();
      return newsItems;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

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
      const data = await this.getNewsJson();
      const filteredEntries = await EntryController.filterMoreThanWords(
        5,
        data
      );
      const sortedEntries = EntryController.sortByComments(filteredEntries);
      res.json(sortedEntries);
    } catch (error) {
      console.error("Error filtering news:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async getNewsFilterLessEqualWordsSorted(req, res) {
    try {
      const data = await this.getNewsJson();
      const filteredEntries = await EntryController.filterLessEqualWords(
        5,
        data
      );
      const sortedEntries = EntryController.sortByPoints(filteredEntries);
      res.json(sortedEntries);
    } catch (error) {
      console.error("Error filtering news:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static filterLessEqualWords(numWords, data) {
    let filteredEntries = [];

    if (this.isEmptyOrNotArray(data)) {
      return [];
    }

    filteredEntries = data.filter((entry) => {
      const titleWords = entry.title.split(" ");
      return titleWords.length <= numWords;
    });
    return filteredEntries;
  }

  static filterMoreThanWords(numWords, data) {
    let filteredEntries = [];

    if (this.isEmptyOrNotArray(data)) {
      return [];
    }

    filteredEntries = data.filter((entry) => {
      const titleWords = entry.title.split(" ");
      return titleWords.length > numWords;
    });
    return filteredEntries;
  }

  static sortByComments(entries) {
    if (this.isEmptyOrNotArray(entries)) {
      return [];
    }

    return entries.sort((a, b) => parseInt(b.comments) - parseInt(a.comments));
  }

  static sortByPoints(entries) {
    if (this.isEmptyOrNotArray(entries)) {
      return [];
    }

    return entries.sort((a, b) => parseInt(b.points) - parseInt(a.points));
  }

  static isEmptyOrNotArray(data) {
    return !Array.isArray(data) || data.length === 0;
  }
}

module.exports = EntryController;
