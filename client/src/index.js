import "@fortawesome/fontawesome-free/css/all.css";
import Modal from "./components/Modal";
import "./css/style.css";

const modal = new Modal();
const darkModeButton = document.querySelector("#darkModeButton");

darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("light");
  if (darkModeButton.classList.contains("fa-sun")) {
    darkModeButton.className = "fa-solid fa-moon";
  } else {
    darkModeButton.className = "fa-solid fa-sun";
  }
});
