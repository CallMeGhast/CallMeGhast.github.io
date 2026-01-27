const content = document.getElementById("content");
const returnBtn = document.getElementById("returnBtn");
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
            if (callback) callback();
        }, 200);
    }

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

    function returnHome() {
        const existingGame = document.querySelector(
            ".flappy-game-container, .snake-game-container, .dodge-game-container"
        );
        if (existingGame) existingGame.remove();

        returnBtn.classList.remove("show");
        loadSection("overview");
    }

    window.returnHome = returnHome;

    content.addEventListener("click", (e) => {
        if (e.target.id === "flappyBtn") loadFlappyBird();
        if (e.target.id === "snakeBtn") loadSnakeGame();
        if (e.target.id === "dodgeBtn") loadDodgeGame();
    });

    loadSection("overview");
});


// -----------------------------------------------------
// FLAPPY BIRD (with highscore)
// -----------------------------------------------------

function startFlappyBird() {
    const canvas = document.getElementById("flappyCanvas");
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    let bird = { x: 80, y: 300, width: 30, height: 30, dy: 0 };
    let gravity = 0.15;
    let jump = -6;

    let pipes = [];
    let pipeWidth = 60;
    let pipeGap = 230;

    let frame = 0;
    let score = 0;
    let gameOver = false;

    let pipeSpeed = 1.6;
    let spawnRate = 130;
    let difficultyIncrease = 0.015;

    const playAgainBtn = document.getElementById("playAgainBtn");
    const scoreDisplay = document.getElementById("score");

    // HIGH SCORE
    let highscore = Number(localStorage.getItem("flappyHighscore")) || 0;
    document.getElementById("flappyHigh").innerText = highscore;

    function createPipe() {
        let topHeight = Math.floor(Math.random() * (height - pipeGap - 140)) + 70;
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
        pipeSpeed = 1.6;
        spawnRate = 130;
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

        bird.dy += gravity;
        bird.y += bird.dy;

        ctx.fillStyle = "#ffffff";
        ctx.fillRect(bird.x, bird.y, bird.width, bird.height);

        if (frame % spawnRate === 0) createPipe();

        for (let i = 0; i < pipes.length; i++) {
            let p = pipes[i];
            p.x -= pipeSpeed;

            ctx.fillStyle = "rgb(180, 0, 255)";
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
                scoreDisplay.innerText = score;

                if (score > highscore) {
                    highscore = score;
                    localStorage.setItem("flappyHighscore", highscore);
                    document.getElementById("flappyHigh").innerText = highscore;
                }

                pipeSpeed += difficultyIncrease;
                spawnRate = Math.max(90, spawnRate - 1);
            }
        }

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
    const existingGame = document.querySelector(
        ".flappy-game-container, .snake-game-container, .dodge-game-container"
    );
    if (existingGame) existingGame.remove();

    returnBtn.classList.remove("show");

    content.innerHTML = `
        <div class="flappy-game-container">
            <canvas id="flappyCanvas" width="400" height="600"></canvas>

            <div class="highscore-display">
                Highscore: <span id="flappyHigh">0</span>
            </div>

            <div class="score-display" style="top:40px;">
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


// -----------------------------------------------------
// SNAKE GAME (with highscore)
// -----------------------------------------------------

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

    let speed = 150;
    const speedIncrease = 5;

    const playAgainBtn = document.getElementById("snakePlayAgainBtn");
    const scoreSpan = document.getElementById("snakeScore");

    // HIGH SCORE
    let highscore = Number(localStorage.getItem("snakeHighscore")) || 0;
    document.getElementById("snakeHigh").innerText = highscore;

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

        if (head.x < 0 || head.x >= tiles || head.y < 0 || head.y >= tiles) {
            gameOver = true;
        }

        for (let i = 0; i < snake.length; i++) {
            if (head.x === snake[i].x && head.y === snake[i].y) {
                gameOver = true;
            }
        }

        if (gameOver) return;

        snake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
            score++;
            scoreSpan.textContent = score;

            if (score > highscore) {
                highscore = score;
                localStorage.setItem("snakeHighscore", highscore);
                document.getElementById("snakeHigh").innerText = highscore;
            }

            food = spawnFood();
            speed = Math.max(50, speed - speedIncrease);
        } else {
            snake.pop();
        }
    }

    function draw() {
        ctx.fillStyle = "#111";
        ctx.fillRect(0, 0, size, size);

        ctx.fillStyle = "rgb(180, 0, 255)";
        ctx.fillRect(food.x * tileSize, food.y * tileSize, tileSize, tileSize);

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
    const existingGame = document.querySelector(
        ".flappy-game-container, .snake-game-container, .dodge-game-container"
    );
    if (existingGame) existingGame.remove();

    returnBtn.classList.remove("show");

    content.innerHTML = `
        <div class="snake-game-container" style="display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;height:100vh;background:#0f0f0f;overflow:hidden;">
            <canvas id="snakeCanvas" width="400" height="400" style="background:#111;border:2px solid var(--purple);border-radius:12px;display:block;"></canvas>

            <div class="highscore-display">
                Highscore: <span id="snakeHigh">0</span>
            </div>

            <div class="score-display" style="top:40px;">
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


// -----------------------------------------------------
// DODGE THE BLOCKS (with highscore)
// -----------------------------------------------------

function startDodgeGame() {
    const canvas = document.getElementById("dodgeCanvas");
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    const playerWidth = 40;
    const playerHeight = 20;
    let playerX = width / 2 - playerWidth / 2;
    const playerY = height - 60;

    const stepSize = 20; // <-- needed for moveStep

    let leftHeld = false;
    let rightHeld = false;
    let stepRepeatTimer = 0;
    const stepRepeatDelay = 6;

    // Blocks
    let blocks = [];
    let blockSpeed = 1.4;
    let blockSpawnRate = 80;
    let frame = 0;
    let score = 0;
    let gameOver = false;

    // Projectiles
    let projectiles = [];
    const projectileSpeed = 8;
    let lastShotTime = 0;
    const shotCooldown = 250; // 0.25 seconds

    // Energy bar
    const maxEnergy = 4;
    let energy = maxEnergy;
    let energyFraction = 0;

    // Highscore
    let highscore = Number(localStorage.getItem("dodgeHighscore")) || 0;
    document.getElementById("dodgeHigh").innerText = highscore;

    const scoreSpan = document.getElementById("dodgeScore");
    const playAgainBtn = document.getElementById("dodgePlayAgainBtn");

    function spawnBlock() {
        const blockWidth = 40 + Math.random() * 40;
        const x = Math.random() * (width - blockWidth);
        blocks.push({
            x,
            y: -30,
            width: blockWidth,
            height: 20,
            passed: false,
            vanishing: false,
            vanishTimer: 0
        });
    }

    function resetGame() {
        playerX = width / 2 - playerWidth / 2;
        blocks = [];
        projectiles = [];
        blockSpeed = 1.4;
        blockSpawnRate = 80;
        frame = 0;
        score = 0;
        gameOver = false;
        energy = maxEnergy;
        energyFraction = 0;
        scoreSpan.textContent = score;
        playAgainBtn.style.display = "none";
        loop();
    }

    // STEP MOVEMENT
    function keyDown(e) {
        if (e.code === "ArrowLeft" || e.code === "KeyA") {
            leftHeld = true;
            moveStep(-1);
        }
        if (e.code === "ArrowRight" || e.code === "KeyD") {
            rightHeld = true;
            moveStep(1);
        }
    }

    function keyUp(e) {
        if (e.code === "ArrowLeft" || e.code === "KeyA") leftHeld = false;
        if (e.code === "ArrowRight" || e.code === "KeyD") rightHeld = false;
    }

    function moveStep(direction) {
        playerX += direction * stepSize;
        if (playerX < 0) playerX = 0;
        if (playerX + playerWidth > width) playerX = width - playerWidth;
    }

    // SHOOTING
    function shoot() {
        const now = performance.now();
        if (now - lastShotTime < shotCooldown) return;
        if (energy <= 0) return;

        lastShotTime = now;
        energy -= 1;

        projectiles.push({
            x: playerX + playerWidth / 2 - 3,
            y: playerY - 10,
            width: 6,
            height: 14,
            active: true
        });
    }

    document.addEventListener("keydown", keyDown);
    document.addEventListener("keyup", keyUp);
    canvas.addEventListener("click", shoot);
    playAgainBtn.addEventListener("click", resetGame);

    function update() {
        // Step movement hold-repeat
        if (leftHeld || rightHeld) {
            stepRepeatTimer++;
            if (stepRepeatTimer >= stepRepeatDelay) {
                stepRepeatTimer = 0;
                if (leftHeld) moveStep(-1);
                if (rightHeld) moveStep(1);
            }
        } else {
            stepRepeatTimer = 0;
        }

        // Spawn blocks
        if (frame % blockSpawnRate === 0) spawnBlock();

        // Update blocks
        for (let i = 0; i < blocks.length; i++) {
            const b = blocks[i];

            if (!b.vanishing) {
                b.y += blockSpeed;
            } else {
                b.vanishTimer++;
            }

            // Collision with player
            if (
                !b.vanishing &&
                playerX < b.x + b.width &&
                playerX + playerWidth > b.x &&
                playerY < b.y + b.height &&
                playerY + playerHeight > b.y
            ) {
                gameOver = true;
            }

            // Passed bottom
            if (!b.passed && b.y > height) {
                b.passed = true;
                score++;
                scoreSpan.textContent = score;

                // Update highscore
                if (score > highscore) {
                    highscore = score;
                    localStorage.setItem("dodgeHighscore", highscore);
                    document.getElementById("dodgeHigh").innerText = highscore;
                }

                // Difficulty increase
                blockSpeed += 0.05;
                blockSpawnRate = Math.max(40, blockSpawnRate - 1);

                // Energy gain (0.1 per block)
                energyFraction += 0.1;
                if (energyFraction >= 1) {
                    energyFraction -= 1;
                    energy = Math.min(maxEnergy, energy + 1);
                }
            }
        }

        // Update projectiles
        for (let i = 0; i < projectiles.length; i++) {
            const p = projectiles[i];
            if (!p.active) continue;

            p.y -= projectileSpeed;
            if (p.y + p.height < 0) p.active = false;

            // Collision with blocks
            for (let j = 0; j < blocks.length; j++) {
                const b = blocks[j];
                if (b.vanishing) continue;

                if (
                    p.x < b.x + b.width &&
                    p.x + p.width > b.x &&
                    p.y < b.y + b.height &&
                    p.y + p.height > b.y
                ) {
                    p.active = false;
                    b.vanishing = true;
                    b.vanishTimer = 0;
                    b.passed = true;

                    score++;
                    scoreSpan.textContent = score;

                    if (score > highscore) {
                        highscore = score;
                        localStorage.setItem("dodgeHighscore", highscore);
                        document.getElementById("dodgeHigh").innerText = highscore;
                    }
                }
            }
        }

        projectiles = projectiles.filter(p => p.active);
        blocks = blocks.filter(b => !(b.vanishing && b.vanishTimer > 15) && b.y < height + 80);

        frame++;
    }

    function drawEnergyBar() {
        const barX = 20;
        const barY = 20;
        const barWidth = 18;
        const barHeight = 10;
        const gap = 6;

        for (let i = 0; i < maxEnergy; i++) {
            ctx.fillStyle = i < energy ? "rgb(180, 0, 255)" : "#333";
            ctx.fillRect(barX + i * (barWidth + gap), barY, barWidth, barHeight);
        }
    }

    function draw() {
        ctx.fillStyle = "#111";
        ctx.fillRect(0, 0, width, height);

        // Player
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(playerX, playerY, playerWidth, playerHeight);

        // Blocks
        for (let i = 0; i < blocks.length; i++) {
            const b = blocks[i];
            let alpha = b.vanishing ? Math.max(0, 1 - b.vanishTimer / 15) : 1;

            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.fillStyle = "rgb(180, 0, 255)";
            ctx.fillRect(b.x, b.y, b.width, b.height);
            ctx.restore();
        }

        // Projectiles
        ctx.fillStyle = "rgb(200, 120, 255)";
        for (let i = 0; i < projectiles.length; i++) {
            const p = projectiles[i];
            ctx.fillRect(p.x, p.y, p.width, p.height);
        }

        drawEnergyBar();
    }

    function loop() {
        if (gameOver) {
            playAgainBtn.style.display = "block";
            return;
        }

        update();
        draw();
        requestAnimationFrame(loop);
    }

    loop();
}

function loadDodgeGame() {
    const existingGame = document.querySelector(
        ".flappy-game-container, .snake-game-container, .dodge-game-container"
    );
    if (existingGame) existingGame.remove();

    returnBtn.classList.remove("show");

    content.innerHTML = `
        <div class="dodge-game-container" style="display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;height:100vh;background:#0f0f0f;overflow:hidden;">
            <canvas id="dodgeCanvas" width="400" height="600" style="background:#111;border:2px solid var(--purple);border-radius:12px;display:block;"></canvas>

            <div class="highscore-display">
                Highscore: <span id="dodgeHigh">0</span>
            </div>

            <div class="score-display" style="top:40px;">
                Score: <span id="dodgeScore">0</span>
            </div>

            <button id="dodgePlayAgainBtn"
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

            <button id="returnFromDodgeBtn"
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

    document.getElementById("returnFromDodgeBtn").addEventListener("click", returnHome);

    startDodgeGame();
}



