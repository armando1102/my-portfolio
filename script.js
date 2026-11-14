

const hamburger = document.getElementById("hamburger");
const headingText = document.querySelector(".heading-text");

hamburger.addEventListener("click", () => {
    headingText.classList.toggle("active");
});