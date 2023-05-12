// LOGIN FUNCTIONALITY
const form = document.getElementById("form");

const logSubmit = (event) => {
  const uname = document.getElementById("uname").value;
  const pass = document.getElementById("pass").value;
  event.preventDefault();

  if (pass === localStorage.getItem(uname)) {
    console.log("124");
  }
  window.location.replace("http://localhost:5500/index.html");
};

form.addEventListener("submit", logSubmit);
