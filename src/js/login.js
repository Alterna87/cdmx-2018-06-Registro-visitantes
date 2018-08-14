let login = document.getElementById('login');
const loginAdmin = () => {
  let email = document.getElementById('email-admin').value;
  let password = document.getElementById('password-admin').value;
  database.singIn(email, password);
  location.href = './home.html';
};


login.addEventListener('click', loginAdmin);
