import "@fortawesome/fontawesome-free/css/all.css";
import Modal from "./components/Modal";
import IdeaForm from "./components/IdeaForm";
import IdeaList from "./components/IdeaList";
import "./css/style.css";

const modal = new Modal();
const ideaForm = new IdeaForm();
ideaForm.render();
const ideaList = new IdeaList();
// ideaList.render();

const darkModeButton = document.querySelector("#darkModeButton");

darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("light");
  if (darkModeButton.classList.contains("fa-sun")) {
    darkModeButton.className = "fa-solid fa-moon";
  } else {
    darkModeButton.className = "fa-solid fa-sun";
  }
});
