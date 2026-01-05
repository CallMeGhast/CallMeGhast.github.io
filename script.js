const content = document.getElementById("content");
const returnBtn = document.getElementById("returnBtn");
const controllerBtn = document.querySelector(".controller-btn");
const contactBox = document.getElementById("contactBox");

document.addEventListener("DOMContentLoaded", () => {

    function toggleContact() {
        contactBox.classList.toggle("open");
    }
    window.toggleContact = toggleContact;

    function fadeChange(html, callback) {
        content.classList.add("hide");
        setTimeout(() => {
            content.innerHTML = html;
            content.classList.remove("hide");
            if(callback) callback(); // run the function after content is updated
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
                <button id="flappyBtn">Flappy bird!</button>
                <button id="snakeBtn">Snake game!</button>
                <button id="dodgeBtn">Dodge the blocks!</button>
            </div>
        `, () => {
            returnBtn.classList.add("show"); // show return button

            // Flappy Bird button now functional
            document.getElementById("flappyBtn").addEventListener("click", loadFlappyBird);
            // Snake and Dodge buttons can be added similarly
            // document.getElementById("snakeBtn").addEventListener("click", loadSnake);
            // document.getElementById("dodgeBtn").addEventListener("click", loadDodgeBlocks);
        });
    }

    function returnHome() {
        returnBtn.classList.remove("show"); // hide it
        loadSection("overview"); // go back to overview text
    }

    window.returnHome = returnHome;

    controllerBtn.addEventListener("click", loadGameHub);

    loadSection("overview");
});

function startFlappyBird() {
    const canvas = document.getElementById("flappyCanvas");
    const ctx = canvas.getContext("2d");

    const width = canvas.width;
    const height = canvas.height;

    let bird = { x: 80, y: 300, width: 30, height: 30, dy: 0 };
    let gravity = 0.6;
    let jump = -10;
    let pipes = [];
    let pipeWidth = 50;
    let pipeGap = 150;
    let frame = 0;
    let score = 0;
    let gameOver = false;

    function createPipe() {
        let topHeight = Math.floor(Math.random() * (height - pipeGap - 100)) + 50;
        pipes.push({ x: width, top: topHeight, bottom: topHeight + pipeGap });
    }

    function resetGame() {
        bird.y = 300;
        bird.dy = 0;
        pipes = [];
        frame = 0;
        score = 0;
        gameOver = false;
        document.getElementById("score").innerText = score;
    }

    function flap() {
        if (!gameOver) bird.dy = jump;
        else resetGame();
    }

    document.addEventListener("keydown", e => {
        if (e.code === "Space") flap();
    });
    canvas.addEventListener("click", flap);

    function loop() {
        ctx.clearRect(0, 0, width, height);

        bird.dy += gravity;
        bird.y += bird.dy;

        ctx.fillStyle = "var(--purple)";
        ctx.fillRect(bird.x, bird.y, bird.width, bird.height);

        if (frame % 90 === 0) createPipe();
        for (let i = 0; i < pipes.length; i++) {
            let p = pipes[i];
            p.x -= 3;

            ctx.fillStyle = "#444";
            ctx.fillRect(p.x, 0, pipeWidth, p.top);
            ctx.fillRect(p.x, p.bottom, pipeWidth, height - p.bottom);

            if (
                bird.x + bird.width > p.x &&
                bird.x < p.x + pipeWidth &&
                (bird.y < p.top || bird.y + bird.height > p.bottom)
            ) {
                gameOver = true;
            }

            if (!p.passed && p.x + pipeWidth < bird.x) {
                score++;
                p.passed = true;
                document.getElementById("score").innerText = score;
            }
        }

        if (bird.y + bird.height > height || bird.y < 0) gameOver = true;

        frame++;
        if (!gameOver) requestAnimationFrame(loop);
        else {
            ctx.fillStyle = "var(--white)";
            ctx.font = "32px Inter";
            ctx.fillText("Game Over", width / 2 - 80, height / 2);
            ctx.font = "20px Inter";
            ctx.fillText("Click or press Space to restart", width / 2 - 130, height / 2 + 30);
        }
    }

    loop();
}

function loadFlappyBird() {
    fadeChange(`
        <div class="flappy-game-container">
            <canvas id="flappyCanvas" width="400" height="600"></canvas>
            <div class="score-display">Score: <span id="score">0</span></div>
        </div>
    `, startFlappyBird); // callback ensures canvas exists first
}
