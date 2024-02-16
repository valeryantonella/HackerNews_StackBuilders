async function fetchAndDisplayAllNews() {
  try {
    const response = await fetch("/api/news");
    const data = await response.json();

    const newsList = document.getElementById("newsList");
    newsList.innerHTML = "";

    data.forEach((newsItem) => {
      const li = document.createElement("li");
      li.textContent = ` ${newsItem.order} ${newsItem.title} - Points: ${newsItem.points}, Comments: ${newsItem.comments}`;
      newsList.appendChild(li);
    });
  } catch (error) {
    console.error("Error fetching news:", error);
  }
}

async function fetchAndDisplayFilteredNews(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const newsList = document.getElementById("newsList");
    newsList.innerHTML = "";

    data.forEach((newsItem) => {
      const li = document.createElement("li");
      li.textContent = ` ${newsItem.order} ${newsItem.title} - Points: ${newsItem.points}, Comments: ${newsItem.comments}`;
      newsList.appendChild(li);
    });
  } catch (error) {
    console.error("Error fetching filtered news:", error);
  }
}

// Display news list
window.onload = fetchAndDisplayAllNews;

// Display list of filtered news
document
  .getElementById("filterByMoreThan5WordsBtn")
  .addEventListener("click", () => {
    fetchAndDisplayFilteredNews("/api/news/filterByComments");
  });

document
  .getElementById("filterByLessThanOrEqual5WordsBtn")
  .addEventListener("click", () => {
    fetchAndDisplayFilteredNews("/api/news/filterByPoints");
  });
