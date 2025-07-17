

const foodData = {
  happy: {
    image: "assets/images/pizza.png",
    caption: "Pizza makes happiness last longer!"
  },
  sad: {
    image: "assets/images/chocolate.png",
    caption: "Chocolate: scientifically proven comfort."
  },
  bored: {
    image: "assets/images/ramen.png",
    caption: "Ramen never gets boring!"
  },
  stressed: {
    image: "assets/images/icecream.png",
    caption: "Ice cream + deep breaths = reset."
  }
};

function showFood(mood) {
  const card = document.getElementById(`${mood}-card`);
  const cardWrapper = card.parentElement.parentElement;

  // If already flipped, unflip it
  if (cardWrapper.classList.contains('flipped')) {
    cardWrapper.classList.remove('flipped');
    return;
  }

  // Otherwise flip and populate the card
  const data = foodData[mood];
  card.innerHTML = `
    <img src="${data.image}" alt="${mood} food">
    <p>${data.caption}</p>
  `;
  cardWrapper.classList.add('flipped');
}

