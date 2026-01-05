document.addEventListener("DOMContentLoaded", () => {

    const content = document.getElementById("content");
    const contactBox = document.getElementById("contactBox");
    const returnBtn = document.getElementById("returnBtn");
    const controllerBtn = document.querySelector(".controller-btn");

    function toggleContact() {
        contactBox.classList.toggle("open");
    }

    window.toggleContact = toggleContact;

    function fadeChange(html) {
        content.classList.add("hide");
        setTimeout(() => {
            content.innerHTML = html;
            content.classList.remove("hide");
        }, 200);
    }

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
                Grundverständnis von Netzwerken<br>
                Sicherer Umgang mit Internet & E-Mail<br>
                Erste Erfahrungen mit CSS, HTML, JavaScript
                </p>
            `;
        }

        returnBtn.style.display = "none";
        fadeChange(html);
    }

    window.loadSection = loadSection;

    function loadGameHub() {
        fadeChange(`
            <div class="game-hub">
                <button>Flappy bird!</button>
                <button>Snake game!</button>
                <button>Dodge the blocks!</button>
            </div>
        `);
        returnBtn.style.display = "block";
    }

    function returnHome() {
        returnBtn.style.display = "none";
        loadSection("overview");
    }

    window.returnHome = returnHome;

    controllerBtn.addEventListener("click", loadGameHub);

    loadSection("overview");
});
