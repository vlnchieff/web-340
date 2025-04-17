"use strict";
/*    Node.js
      Chapter 8
      Chapter 2 Programming Exercise

      Recipe
      Author: Chris Weaver
      Date:    04.16.25

      Filename:       recipe.js
 */

function createRecipe(ingredients){
  return `Recipe created with ingredients: ${ingredients.join(', ')}`;
}


function setTimer(minutes){
  return `Timer set for ${minutes} minutes.`;
}


function quit() {
  return "Program exited";
}


module.exports = {
  createRecipe,
  setTimer,
  quit
};