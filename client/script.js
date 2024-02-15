async function fetchNews() {
  const response = await fetch("/api/news");
  const data = await response.json();

  const newsList = document.getElementById("newsList");
  data.forEach((newsItem) => {
    const li = document.createElement("li");
    li.textContent = ` ${newsItem.order} ${newsItem.title} - ${newsItem.points}, ${newsItem.comments}`;
    newsList.appendChild(li);
  });
}

// Fetch news data when the page loads
window.onload = fetchNews;
