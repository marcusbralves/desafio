import createCards from "./createCards.js";

const getNews = async (search_field) => {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=${search_field}&language=pt&sortBy=publishedAt&apiKey=4b70f1f1a4234d6997d61b8969c6a64e`
    );
    const news = await res.json();
    createCards(news.articles);
  } catch (error) {
    console.log(error);
  }
};

export default getNews;
