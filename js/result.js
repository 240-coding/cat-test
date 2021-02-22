const again = document.querySelector(".again");

again.addEventListener("click", restart);

function restart() {
    location.reload(true);
}