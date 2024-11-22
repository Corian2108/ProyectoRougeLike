import { map } from "./classes/class.js";

function init() {
  const mapInstance = new map(0, 0, []);
  let inputX = (document.getElementById("inputX").value = 5);

  let generator = document
    .getElementById("generator")
    .addEventListener("click", () => {
      mapInstance.generate();
    });
}

init();
