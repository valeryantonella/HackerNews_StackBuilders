const puppeteer = require("puppeteer");

class EntryModel {
  static async scrapeNews() {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.goto("https://news.ycombinator.com/");
      const newsItems = await page.evaluate(() => {
        const elements = document.querySelectorAll(".athing");
        const newsItems = [];

        elements.forEach((element) => {
          const titleElement = element.querySelector(".title a");
          const title = titleElement ? titleElement.textContent.trim() : "";
          const order = element.querySelector(".rank").textContent;

          const subtext = element.nextElementSibling.querySelector(".subline");
          const fullCommentsPoints = subtext ? subtext.textContent.trim() : "";

          const commentsMatch = fullCommentsPoints.match(/(\d+)\s+comment/);
          const pointsMatch = fullCommentsPoints.match(/(\d+)\s+point/);

          const comments = commentsMatch ? commentsMatch[1] : "";
          const points = pointsMatch ? pointsMatch[1] : "";

          newsItems.push({
            title,
            order,
            comments,
            points,
          });
        });

        return newsItems;
      });

      await browser.close();
      return newsItems;
    } catch (error) {
      console.error("Error scraping news:", error);
      return [];
    }
  }
}

module.exports = EntryModel;
