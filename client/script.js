// Función para obtener y mostrar todas las noticias
async function fetchAndDisplayAllNews() {
  try {
    const response = await fetch("/api/news");
    const data = await response.json();

    const newsList = document.getElementById("newsList");
    // Limpiar la lista antes de agregar nuevas noticias
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

// Función para realizar la solicitud y mostrar las noticias filtradas
async function fetchAndDisplayFilteredNews(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const newsList = document.getElementById("newsList");
    // Limpiar la lista antes de agregar nuevas noticias filtradas
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

// Mostrar todas las noticias al cargar la página
window.onload = fetchAndDisplayAllNews;

// Función para filtrar por más de 5 palabras en el título
document
  .getElementById("filterByMoreThan5WordsBtn")
  .addEventListener("click", () => {
    fetchAndDisplayFilteredNews("/api/news/filterByComments");
  });

// Función para filtrar por menos o igual a 5 palabras en el título
document
  .getElementById("filterByLessThanOrEqual5WordsBtn")
  .addEventListener("click", () => {
    fetchAndDisplayFilteredNews("/api/news/filterByPoints");
  });
