document.querySelector("#toggleButton").addEventListener("click", function() {
    let card = document.querySelector(".card");
    if (card.style.display === "none") {
        card.style.display = "block";
    } else {
        card.style.display = "none";
    }
 });
 window.onload = function() {
    let card = document.querySelector(".card");
    card.style.opacity = 0;
    setTimeout(function() {
        card.style.transition = "opacity 1s";
        card.style.opacity = 1;
    }, 100);
 };
 let icons = document.querySelectorAll(".fa");
 icons.forEach(icon => {
    icon.addEventListener("click", function() {
        window.open(this.href, "_blank");
    });
 });
   