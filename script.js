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
    const nextButton = document.getElementById("next-btn");

    // Correct answer
    if (userAnswer === levels[currentLevel].answer) {
        resultMessage.style.color = "green";
        resultMessage.textContent = "Correct! Click 'Next' to move to the next level.";
        
        // Enable "Next" button and disable "Submit" button
        nextButton.disabled = false;
        document.getElementById("submit-btn").disabled = true;  
    } else {
        // Wrong answer
        resultMessage.style.color = "red";
        resultMessage.textContent = "Wrong answer, try again!";
    }
}

function loadNextLevel() {
    const nextButton = document.getElementById("next-btn");
    const submitButton = document.getElementById("submit-btn");

    currentLevel++; // Move to the next level

    // Check if the current level is within the levels array
    if (currentLevel < levels.length) {
        // Update the content for the new level
        document.getElementById("level-title").textContent = `Level ${currentLevel + 1}`;
        document.getElementById("clue-text").textContent = levels[currentLevel].clue;
        document.getElementById("answer-input").value = ""; // Clear the previous answer
        document.getElementById("answer-input").placeholder = `Enter your answer for Level ${currentLevel + 1}`; // Update placeholder
        document.getElementById("result-message").textContent = ""; // Clear the result message

        // Reset button states
        submitButton.disabled = false; // Re-enable "Submit" button
        nextButton.disabled = true;  // Disable "Next" button until a new answer is correct

        // Focus on the answer input for the next level
        document.getElementById("answer-input").focus();
    } else {
        // If there are no more levels, show game completion message
        document.getElementById("level-container").innerHTML = '<h2>Congratulations! You\'ve completed the game!</h2>';
    }
}
