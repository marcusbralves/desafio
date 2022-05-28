import getNews from "./getNews.js";
import removeCards from "./removeCards.js";

const getSearchField = () => {
  const search_input = document.getElementById("search");
  search_input.addEventListener("", (e) => {
    removeCards();
    getNews(search_input.value);
  });
};

export default getSearchField;
