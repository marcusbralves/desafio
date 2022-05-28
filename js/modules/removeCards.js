const removeCards = () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((item) => {
    item.remove();
  });
};
export default removeCards;
