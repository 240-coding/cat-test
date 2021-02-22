const start = document.querySelector(".start");
const intro = document.querySelector(".intro");
const progress = document.querySelector(".progress");
const result = document.querySelector(".result");

start.addEventListener("click", startTest)

function startTest() {
    intro.classList.add("hidden");
    progress.classList.remove("hidden");
}