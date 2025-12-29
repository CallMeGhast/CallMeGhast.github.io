const enterBtn = document.getElementById("enter-btn");
const welcome = document.getElementById("welcome-screen");
const menu = document.getElementById("main-menu");
const content = document.getElementById("content");

enterBtn.addEventListener("click", () => {
    welcome.classList.remove("active");
    setTimeout(() => {
        menu.classList.add("active");
    }, 800);
});

function showContent() {
    content.style.opacity = 0;
    setTimeout(() => {
        content.innerText = "Not added yet.";
        content.style.opacity = 1;
    }, 300);
}
