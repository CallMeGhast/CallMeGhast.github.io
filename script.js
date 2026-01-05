// Grab main content and contact box
const content = document.getElementById("content");
const contactBox = document.getElementById("contactBox");

// Grab Return button (always in DOM)
const returnBtn = document.getElementById("returnBtn");

// Contact box toggle
function toggleContact() {
    contactBox.classList.toggle("open");
}

// Fade in/out content
function fadeChange(html) {
    content.classList.add("hide");
    setTimeout(() => {
        content.innerHTML = html;
        content.classList.remove("hide");
    }, 200);
}

// Load main site sections
function loadSection(section) {

    let html = "";

    if (section === "overview") {
        html = `
            <h2>Überblick</h2>
            <p>
            Ich habe meinen Schulabschluss nach der 10. Klasse gemacht und habe seit jungen Jahren großes Interesse an der IT...
            </p>
        `;
    }

    if (section === "experience") {
        html = `
            <h2>Erfahrungen</h2>
            <p>
            Während meiner Schulzeit habe ich erste praktische Erfahrungen im IT-Bereich gesammelt...
            </p>
        `;
    }

    if (section === "interests") {
        html = `
            <h2>Interessen</h2>
            <p>
            Mein Interesse an der Informationstechnologie entwickelte sich schon früh...
            </p>
        `;
    }

    if (section === "skills") {
        html = `
            <h2>Grundkenntnisse in Informationstechnologie</h2>
            <p>
            PC- & Windows-Kenntnisse<br>
            Umgang mit Hardware<br>
            ...
            </p>
        `;
    }

    // Hide Return button if coming back to normal sections
    returnBtn.style.display = "none";
    fadeChange(html);
}

// Load Game Hub
function loadGameHub() {
    fadeChange(`
        <div class="game-hub">
            <button onclick="alert('Flappy Bird coming soon!')">Flappy bird!</button>
            <button onclick="alert('Snake Game coming soon!')">Snake game!</button>
            <button onclick="alert('Dodge the blocks coming soon!')">Dodge the blocks!</button>
        </div>
    `);

    // Show Return button
    returnBtn.style.display = "block";
}

// Return button handler
function returnHome() {
    returnBtn.style.display = "none";
    loadSection("overview");
}

// Initial load
loadSection("overview");

// Controller button listener
const controllerBtn = document.querySelector(".controller-btn");
controllerBtn.addEventListener("click", loadGameHub);
