const createCards = (news) => {
  const section = document.querySelector(".news-list");

  news.map((item) => {
    const container = document.createElement("div");
    const containerHeader = document.createElement("div");
    const heart = document.createElement("div");
    const span = document.createElement("span");
    const title = document.createElement("h2");
    const paragraph = document.createElement("p");
    const link = document.createElement("a");
    const date = new Date(item.publishedAt);
    const dateOptions = {
    };

    heart.classList.add("heart");
    heart.addEventListener("click", () => {
      if (!heart.classList.contains("heart-clicked")) {
        heart.classList.toggle("is_animating");
      }
    });
    heart.addEventListener("animationend", () => {
      heart.classList.toggle("is_animating");
    });

    containerHeader.classList.add("news-header");
    containerHeader.appendChild(span);
    containerHeader.appendChild(heart);

    span.classList.add("date");
    span.innerText = date.toLocaleDateString("pt-BR", dateOptions);

    title.classList.add("title");
    title.innerText = item.title;

    paragraph.classList.add("paragraph");
    paragraph.innerText = item.description;

    container.classList.add("card");
    container.appendChild(link);
    link.appendChild(title);
    container.appendChild(paragraph);
    container.insertBefore(containerHeader, link);

    section.appendChild(container);
  });
};

export default createCards;
