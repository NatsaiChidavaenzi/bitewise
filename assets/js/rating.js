function validateForm() {
  const form = document.getElementById('reviewForm');
  const { name, dish, rating, comment } = form;
  if (!name.value || !dish.value || !rating.value || !comment.value) {
    alert('All fields are required!');
    return false;
  }
  alert('Review submitted — thanks!');
  return false;
}