const content = document.getElementById("content");
const returnBtn = document.getElementById("returnBtn");
const controllerBtn = document.querySelector(".controller-btn");
const contactBox = document.getElementById("contactBox");

document.addEventListener("DOMContentLoaded", () => {

    // Toggle contact box
    function toggleContact() {
        contactBox.classList.toggle("open");
    }
    window.toggleContact = toggleContact;

    // Fade change function
    function fadeChange(html, callback) {
        content.classList.add("hide");
        setTimeout(() => {
            content.innerHTML = html;
            content.classList.remove("hide");
            if (callback) callback();
        }, 200);
    }

    // Load text sections
    function loadSection(section) {
        let html = "";

        if (section === "overview") {
            html = `
            <h2>Überblick</h2>
            <p>
            Ich habe meinen Schulabschluss nach der 10. Klasse gemacht und habe seit jungen Jahren großes Interesse an der IT.
            Bereits in der 6. und 7. Klasse habe ich an ersten IT-Kursen teilgenommen und dadurch grundlegende Einblicke in die
            Welt der Informationstechnologie erhalten. Besonders gefällt mir an der IT das Arbeiten mit Problemen und das Finden
            von Lösungen. Ich bin motiviert, mir neues Wissen anzueignen und dieses praktisch anzuwenden. Mein Ziel ist es,
            meine Kenntnisse Schritt für Schritt zu erweitern und mich in diesem Bereich weiterzuentwickeln. Ich arbeite
            zuverlässig, lerne schnell und habe Freude daran, mich mit technischen Themen zu beschäftigen.
            </p>`;
        }

        if (section === "experience") {
            html = `
            <h2>Erfahrungen</h2>
            <p>
            Während meiner Schulzeit habe ich erste praktische Erfahrungen im IT-Bereich gesammelt. In der 6. und 7. Klasse
            nahm ich an IT-bezogenen Unterrichtseinheiten teil, in denen ich grundlegende Kenntnisse im Umgang mit Computern,
            Software und digitalen Systemen erwerben konnte.
            <br><br>
            In meiner Freizeit habe ich mich selbstständig mit verschiedenen IT-Themen beschäftigt und eigene kleine Projekte
            umgesetzt. Dazu gehört der Versuch, ein einfaches Spiel mit der Programmiersprache Lua zu entwickeln, sowie das
            Erstellen einer einfachen Webseite mit HTML und CSS. Dadurch habe ich ein besseres Verständnis für
            Programmierlogik, Fehleranalyse und strukturiertes Arbeiten entwickelt.
            <br><br>
            Diese Erfahrungen haben mein Interesse an der IT weiter verstärkt und motivieren mich, meine Kenntnisse
            kontinuierlich auszubauen.
            </p>`;
        }

