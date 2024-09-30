const levels = [
    {
        clue: "What has keys but can't open locks?",
        answer: "piano",
        image: "images/level1.png"
    },
    {
        clue: "I speak without a mouth and hear without ears. What am I?",
        answer: "echo",
        image: "images/level2.png"
    },
    {
        clue: "The more of this there is, the less you see. What is it?",
        answer: "darkness",
        image: "images/level3.png"
    },
    {
        clue: "I’m tall when I’m young, and I’m short when I’m old. What am I?",
        answer: "candle",
        image: "images/level4.png"
    },
    {
        clue: "What begins with T, ends with T, and has T in it?",
        answer: "teapot",
        image: "images/level5.png"
    },
    {
        clue: "What comes down but never goes up?",
        answer: "rain",
        image: "images/level6.png"
    },
    {
        clue: "Final level! Where do you find keys to open a door?",
        answer: "keyhole",
        image: "images/level7.png"
    }
];

let currentLevel = 0;

function checkAnswer() {
    const userAnswer = document.getElementById("answer-input").value.toLowerCase();
    const resultMessage = document.getElementById("result-message");

    if (userAnswer === levels[currentLevel].answer) {
        resultMessage.style.color = "green";
        resultMessage.textContent = "Correct! Moving to the next level...";
        currentLevel++;

        if (currentLevel < levels.length) {
            setTimeout(loadNextLevel, 1000);
        } else {
            resultMessage.textContent = "Congratulations! You've found the key and completed the game!";
            document.getElementById("level-container").innerHTML = '<h2>Game Completed</h2>';
        }
    } else {
        resultMessage.style.color = "red";
        resultMessage.textContent = "Wrong answer, try again!";
    }
}

function loadNextLevel() {
    document.getElementById("level-title").textContent = `Level ${currentLevel + 1}`;
    document.getElementById("clue-text").textContent = levels[currentLevel].clue;
    document.getElementById("level-image").src = levels[currentLevel].image; // Update image
    document.getElementById("answer-input").value = ""; // Clear previous answer
    document.getElementById("answer-input").placeholder = `Enter your answer for Level ${currentLevel + 1}`; // Update placeholder
    document.getElementById("result-message").textContent = ""; // Clear result message
    document.getElementById("answer-input").focus(); // Focus on input field
}
