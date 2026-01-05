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

        if(section==="overview"){
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

        if(section==="experience"){
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

        if(section==="interests"){
            html = `
            <h2>Interessen</h2>
            <p>
            Mein Interesse an der Informationstechnologie entwickelte sich schon früh, da mich Computer und digitale Systeme
            schon immer fasziniert haben. Besonders spannend finde ich es, wie aus Code funktionierende Programme und
            Anwendungen entstehen.
            <br><br>
            Um erste praktische Erfahrungen zu sammeln, habe ich selbst kleine Projekte ausprobiert. Unter anderem habe ich
            einmal versucht, ein eigenes Spiel mit der Programmiersprache Lua zu erstellen. Außerdem habe ich bereits einfache
            Webseiten mit HTML und CSS umgesetzt. Diese Projekte haben mir gezeigt, wie vielseitig die IT ist und wie viel man
            durch eigenes Ausprobieren lernen kann.
            <br><br>
            Ich arbeite gerne an Problemen und suche aktiv nach Lösungen, wenn etwas nicht auf Anhieb funktioniert. Mein Ziel
            ist es, meine Kenntnisse kontinuierlich zu erweitern und meine Interessen in der IT weiter zu vertiefen.
            </p>`;
        }

        if(section==="skills"){
            html = `
            <h2>Grundkenntnisse in Informationstechnologie</h2>
            <p>
            PC- & Windows-Kenntnisse<br>
            Umgang mit Hardware<br>
            Grundverständnis von Netzwerken<br>
            Sicherer Umgang mit Internet & E-Mail<br>
            Microsoft Office / Google Docs<br>
            Grundkenntnisse im Umgang mit Software & Updates<br>
            Schnelle Auffassungsgabe bei neuen Programmen<br>
            Grundwissen im Aufbau von Programmiersprachen<br>
            Erste Erfahrungen mit CSS, HTML, JavaScript
            </p>

            <h2>Sprachen</h2>
            <p>
            Deutsch – sehr gut<br>
            Englisch – fließend<br>
            Arabisch – fließend
            </p>

            <h2>Kommunikations-Skills</h2>
            <p>
            Freundlicher Umgang mit Kunden / Kollegen<br>
            Erklären technischer Probleme in einfacher Sprache<br>
            Hilfsbereitschaft
            </p>

            <h2>Persönliche Stärken</h2>
            <p>
            Problemlösungsorientiertes Denken<br>
            Zuverlässigkeit & Pünktlichkeit<br>
            Lernbereitschaft<br>
            Selbstständiges Arbeiten<br>
            Teamfähigkeit<br>
            Geduld bei technischen Problemen<br>
            Sorgfältige Arbeitsweise<br>
            Verantwortungsbewusstsein
            </p>`;
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
    returnBtn.classList.add("show");
}

function returnHome() {
    returnBtn.classList.remove("show");
    loadSection("overview");
}

    window.returnHome = returnHome;

    controllerBtn.addEventListener("click", loadGameHub);

    loadSection("overview");
});


