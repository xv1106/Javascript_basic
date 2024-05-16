function acneBot() {
  // Prompt window to get user input
  const userInput = prompt("Parle au bot:");

  // Check if the user input is not null (user didn't cancel)
  if (userInput !== null) {
      // Check conversation rules
      if (userInput.endsWith("?")) {
          // If the input ends with "?", respond with "Ouais Ouais..."
          console.log("Ouais Ouais...");
      } else if (userInput === userInput.toUpperCase() && userInput.trim() !== "") {
          // If the input is all uppercase and not empty, respond with "Pwa, calme-toi..."
          console.log("Pwa, calme-toi...");
      } else if (userInput.includes("Fortnite")) {
          // If the input contains "Fortnite", respond with "on s' fait une partie soum-soum ?"
          console.log("on s' fait une partie soum-soum ?");
      } else if (userInput.trim() === "") {
          // If the input is empty, respond with "t'es en PLS ?"
          console.log("t'es en PLS ?");
      } else {
          // For any other input, respond with "balek."
          console.log("balek.");
      }
  }
}

// Call the function to start the conversation
acneBot();
