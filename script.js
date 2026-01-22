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

        if (section === "interests") {
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

        if (section === "skills") {
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

        returnBtn.classList.remove("show");
        fadeChange(html);
    }

    window.loadSection = loadSection;

    // Game Hub
    function loadGameHub() {
        fadeChange(`
            <div class="game-hub">
                <button id="flappyBtn">Flappy bird!</button>
                <button id="snakeBtn">Snake game!</button>
                <button id="dodgeBtn">Dodge the blocks!</button>
            </div>
        `);
        returnBtn.classList.add("show");
    }

    window.loadGameHub = loadGameHub;

    // Return Home
    function returnHome() {
        const existingGame = document.querySelector(".flappy-game-container, .snake-game-container");
        if (existingGame) existingGame.remove();

        returnBtn.classList.remove("show");
        loadSection("overview");
    }

    window.returnHome = returnHome;

    controllerBtn.addEventListener("click", loadGameHub);

    // Game button clicks
    content.addEventListener("click", (e) => {
        if (e.target.id === "flappyBtn") loadFlappyBird();
        if (e.target.id === "snakeBtn") loadSnakeGame();
    });

    loadSection("overview");
});

// ----------------------
// UPDATED FLAPPY BIRD GAME
// ----------------------

function startFlappyBird() {
    const canvas = document.getElementById("flappyCanvas");
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    // Easier physics + consistent style
    let bird = { x: 80, y: 300, width: 30, height: 30, dy: 0 };
    let gravity = 0.22;   // slower fall
    let jump = -7;        // smooth jump

    let pipes = [];
    let pipeWidth = 60;
    let pipeGap = 190;    // larger gap = easier

    let frame = 0;
    let score = 0;
    let gameOver = false;

    let pipeSpeed = 2;        // starts slow
    let spawnRate = 120;      // slower spawn
    let difficultyIncrease = 0.02; // speed increase per score

    const playAgainBtn = document.getElementById("playAgainBtn");
    const scoreDisplay = document.getElementById("score");

    function createPipe() {
        let topHeight = Math.floor(Math.random() * (height - pipeGap - 120)) + 60;
        pipes.push({
            x: width,
            top: topHeight,
            bottom: topHeight + pipeGap,
            passed: false
        });
    }

    function resetGame() {
        bird.y = 300;
        bird.dy = 0;
        pipes = [];
        frame = 0;
        score = 0;
        pipeSpeed = 2;
        spawnRate = 120;
        gameOver = false;
        scoreDisplay.innerText = score;
        playAgainBtn.style.display = "none";
        loop();
    }

    function flap() {
        if (!gameOver) bird.dy = jump;
    }

    document.addEventListener("keydown", e => {
        if (e.code === "Space") flap();
    });

    canvas.addEventListener("click", flap);
    playAgainBtn.addEventListener("click", resetGame);

    function loop() {
        ctx.clearRect(0, 0, width, height);

        // Bird physics
        bird.dy += gravity;
        bird.y += bird.dy;

        // Draw bird (white)
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(bird.x, bird.y, bird.width, bird.height);

        // Spawn pipes
        if (frame % spawnRate === 0) createPipe();

        // Draw & update pipes
        for (let i = 0; i < pipes.length; i++) {
            let p = pipes[i];
            p.x -= pipeSpeed;

            // Pillars purple
            ctx.fillStyle = "rgb(180, 0, 255)";
            ctx.fillRect(p.x, 0, pipeWidth, p.top);
            ctx.fillRect(p.x, p.bottom, pipeWidth, height - p.bottom);

            // Collision
            if (
                bird.x + bird.width > p.x &&
                bird.x < p.x + pipeWidth &&
                (bird.y < p.top || bird.y + bird.height > p.bottom)
            ) {
                gameOver = true;
            }

            // Score
            if (!p.passed && p.x + pipeWidth < bird.x) {
                score++;
                p.passed = true;
                scoreDisplay.innerText = score;

                // Difficulty increases
                pipeSpeed += difficultyIncrease;
                spawnRate = Math.max(80, spawnRate - 1);
            }
        }

        // Ground / ceiling collision
        if (bird.y + bird.height > height || bird.y < 0) gameOver = true;

        frame++;

        if (!gameOver) {
            requestAnimationFrame(loop);
        } else {
            playAgainBtn.style.display = "block";
        }
    }

    loop();
}

function loadFlappyBird() {
    const existingGame = document.querySelector(".flappy-game-container, .snake-game-container");
    if (existingGame) existingGame.remove();

    // hide global return button while in game
    returnBtn.classList.remove("show");

    content.innerHTML = `
        <div class="flappy-game-container">
            <canvas id="flappyCanvas" width="400" height="600"></canvas>

            <div class="score-display">
                Score: <span id="score">0</span>
            </div>

            <button id="playAgainBtn" 
                style="
                    position:absolute;
                    top:50%;
                    left:50%;
                    transform:translate(-50%, -50%);
                    padding:12px 20px;
                    background:var(--purple);
                    color:white;
                    border:none;
                    border-radius:8px;
                    font-size:18px;
                    display:none;
                    cursor:pointer;
                ">
                Play Again
            </button>

            <button id="returnFromGameBtn"
                style="
                    position:absolute;
                    bottom:20px;
                    left:20px;
                    padding:10px 15px;
                    background:#333;
                    color:white;
                    border:none;
                    border-radius:8px;
                    cursor:pointer;
                ">
                Return
            </button>
        </div>
    `;

    document.getElementById("returnFromGameBtn").addEventListener("click", returnHome);

    startFlappyBird();
}


// ----------------------
// SNAKE GAME
// ----------------------

function startSnakeGame() {
    const canvas = document.getElementById("snakeCanvas");
    const ctx = canvas.getContext("2d");
    const size = 400;
    const tileSize = 20;
    const tiles = size / tileSize;

    let snake = [{ x: 10, y: 10 }];
    let dx = 1;
    let dy = 0;
    let food = spawnFood();
    let score = 0;
    let gameOver = false;

    let speed = 150; // starting speed (ms per move)
    const speedIncrease = 5; // speed up slightly each food eaten

    const playAgainBtn = document.getElementById("snakePlayAgainBtn");
    const scoreSpan = document.getElementById("snakeScore");

    function spawnFood() {
        return {
            x: Math.floor(Math.random() * tiles),
            y: Math.floor(Math.random() * tiles)
        };
    }

    function resetGame() {
        snake = [{ x: 10, y: 10 }];
        dx = 1;
        dy = 0;
        food = spawnFood();
        score = 0;
        gameOver = false;
        speed = 150;
        scoreSpan.textContent = score;
        playAgainBtn.style.display = "none";
        loop();
    }

    function changeDirection(e) {
        if (e.code === "ArrowUp" || e.code === "KeyW") {
            if (dy === 1) return;
            dx = 0; dy = -1;
        } else if (e.code === "ArrowDown" || e.code === "KeyS") {
            if (dy === -1) return;
            dx = 0; dy = 1;
        } else if (e.code === "ArrowLeft" || e.code === "KeyA") {
            if (dx === 1) return;
            dx = -1; dy = 0;
        } else if (e.code === "ArrowRight" || e.code === "KeyD") {
            if (dx === -1) return;
            dx = 1; dy = 0;
        }
    }

    document.addEventListener("keydown", changeDirection);
    playAgainBtn.addEventListener("click", resetGame);

    function update() {
        const head = { x: snake[0].x + dx, y: snake[0].y + dy };

        // Wall collision
        if (head.x < 0 || head.x >= tiles || head.y < 0 || head.y >= tiles) {
            gameOver = true;
        }

        // Self collision
        for (let i = 0; i < snake.length; i++) {
            if (head.x === snake[i].x && head.y === snake[i].y) {
                gameOver = true;
            }
        }

        if (gameOver) return;

        snake.unshift(head);

        // Food collision
        if (head.x === food.x && head.y === food.y) {
            score++;
            scoreSpan.textContent = score;

            // Spawn new food
            food = spawnFood();

            // Increase difficulty slightly
            speed = Math.max(50, speed - speedIncrease);

        } else {
            snake.pop(); // normal movement
        }
    }

    function draw() {
        ctx.fillStyle = "#111";
        ctx.fillRect(0, 0, size, size);

        // Draw food (bright purple so it's visible)
        ctx.fillStyle = "rgb(180, 0, 255)";
        ctx.fillRect(food.x * tileSize, food.y * tileSize, tileSize, tileSize);

        // Draw snake
        for (let i = 0; i < snake.length; i++) {
            ctx.fillStyle = i === 0 ? "#fff" : "#ccc";
            ctx.fillRect(snake[i].x * tileSize, snake[i].y * tileSize, tileSize, tileSize);
        }
    }

    function loop() {
        if (gameOver) {
            playAgainBtn.style.display = "block";
            return;
        }

        update();
        draw();
        setTimeout(loop, speed);
    }

    loop();
}


function loadSnakeGame() {
    const existingGame = document.querySelector(".flappy-game-container, .snake-game-container");
    if (existingGame) existingGame.remove();

    // hide global return button while in game
    returnBtn.classList.remove("show");

    content.innerHTML = `
        <div class="snake-game-container" style="display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;height:100vh;background:#0f0f0f;overflow:hidden;">
            <canvas id="snakeCanvas" width="400" height="400" style="background:#111;border:2px solid var(--purple);border-radius:12px;display:block;"></canvas>
            <div class="score-display" style="top:20px;">
                Score: <span id="snakeScore">0</span>
            </div>

            <button id="snakePlayAgainBtn"
                style="
                    position:absolute;
                    top:50%;
                    left:50%;
                    transform:translate(-50%, -50%);
                    padding:12px 20px;
                    background:var(--purple);
                    color:white;
                    border:none;
                    border-radius:8px;
                    font-size:18px;
                    display:none;
                    cursor:pointer;
                ">
                Play Again
            </button>

            <button id="returnFromSnakeBtn"
                style="
                    position:absolute;
                    bottom:20px;
                    left:20px;
                    padding:10px 15px;
                    background:#333;
                    color:white;
                    border:none;
                    border-radius:8px;
                    cursor:pointer;
                ">
                Return
            </button>
        </div>
    `;

    document.getElementById("returnFromSnakeBtn").addEventListener("click", returnHome);

    startSnakeGame();
}


