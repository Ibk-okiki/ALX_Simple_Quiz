// Define the function to check the answer
function checkAnswer() {
    // Correct answer to the quiz
    const correctAnswer = "4";

    // Retrieve the selected radio input
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Get the feedback element
    const feedback = document.getElementById("feedback");

    // Check if an option is selected
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Compare user's answer with correct answer
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red";
        }
    } else {
        // If no option is selected
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "orange";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

