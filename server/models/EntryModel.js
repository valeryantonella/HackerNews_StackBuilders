// EntryModel.js
import puppeteer from "puppeteer";

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
          const title = element.querySelector(".titleline").textContent;
          const order = element.querySelector(".rank").textContent;

          // Verificar si el elemento existe antes de intentar acceder a sus propiedades
          const subtext = element.nextElementSibling.querySelector(".subline");
          const fullComments = subtext ? subtext.textContent.trim() : "";
          const fullPoints = subtext ? subtext.textContent.trim() : "";

          const commentsMatch = fullComments.match(/(\d+)\s+comment/);
          const pointsMatch = fullPoints.match(/(\d+)\s+point/);

          // Verificar si se encontraron coincidencias y extraer los números
          const comments = commentsMatch ? commentsMatch[1] + " comments" : "";
          const points = pointsMatch ? pointsMatch[1] + " points" : "";

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

export default EntryModel;
