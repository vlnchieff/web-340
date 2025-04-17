/*    Node.js
      Chapter 8
      Chapter 2 Programming Exercise

      Recipe
      Author: Chris Weaver
      Date:    04.16.25

      Filename:       index.js
 */


function createRecipe(ingredients) {
  return `Recipe created with ingredients: ${ingredients.join(', ')}`;
}

function setTimer(minutes) {
  return `Timer set for ${minutes} minutes.`;
}

function quit() {
  return "Program exited";
}

// Demonstrating the functionality
console.log("Function Demonstrations:");

// 1. Demonstrate createRecipe
const recipeIngredients = ["bread", "chicken", "olive oil"];
console.log(createRecipe(recipeIngredients));

// 2. Demonstrate setTimer
const timerMinutes = 5;
console.log(setTimer(timerMinutes));

// 3. Demonstrate quit
console.log(quit());