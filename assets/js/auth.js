function showForm(type) {
  document.getElementById('signupForm').classList.toggle('hidden', type !== 'signup');
  document.getElementById('loginForm').classList.toggle('hidden', type !== 'login');
}

function validateSignup() {
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const pass = document.getElementById('signupPassword').value;
  if (!name || !email || !pass) {
    alert("Please fill in all fields.");
    return false;
  }
  alert("Account created! 🎉");
  return false; // prevent reload
}

function validateLogin() {
  const email = document.getElementById('loginEmail').value;
  const pass = document.getElementById('loginPassword').value;
  if (!email || !pass) {
    alert("Please enter email and password.");
    return false;
  }
  alert("Login successful! 🎉");
  return false; // simulate success
}
