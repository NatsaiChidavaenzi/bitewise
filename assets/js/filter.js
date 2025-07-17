function filterFood(type) {
  document.querySelectorAll(".food-card").forEach(card => {
    const match = type === 'all' || card.dataset.type === type;
    card.style.display = match ? 'block' : 'none';
  });
}