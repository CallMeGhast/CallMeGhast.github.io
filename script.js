function showInfo() {
    const info = document.getElementById("info-section");
    info.style.display = "block";

    // Optional: animate intro text fading out
    const intro = document.getElementById("intro-text");
    intro.style.transition = "opacity 1s";
    intro.style.opacity = 0;

    const tagline = document.getElementById("tagline");
    tagline.style.transition = "opacity 1s";
    tagline.style.opacity = 0;
}
