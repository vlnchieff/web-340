/*    Node.js
      Chapter 8
      Chapter 2 Programming Exercise

      Recipe
      Author: Chris Weaver
      Date:    04.16.25

      Filename:       recipe.js
 */
"use strict";

function createRecipe(ingredients) {
  return `Recipe created with ingredients: ${ingredients.join(', ')}`;
}

function setTimer(minutes) {
  return `Timer set for ${minutes} minutes.`;
}

function quit() {
  return "Program exited";
}

// Test cases for createRecipe
console.log("Testing createRecipe:");
const testIngredients1 = ["bread", "chicken", "olive oil"];
console.log(createRecipe(testIngredients1) === "Recipe created with ingredients: bread", "chicken", "olive oil");

const testIngredients2 = [];
console.log(createRecipe(testIngredients2) === "Recipe created with ingredients: ");

// Test cases for setTimer
console.log("\nTesting setTimer:");
console.log(setTimer(5) === "Timer set for 5 minutes.");
console.log(setTimer(0) === "Timer set for 0 minutes.");

// Test cases for quit
console.log("\nTesting quit:");
console.log(quit() === "Program exited");
