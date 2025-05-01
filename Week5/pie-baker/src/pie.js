/*
Chris Weaver
2025.May.01
Filename: pie.js
*/

"use strict";

function bakePie(type, ingredients) {
    const essentialIngredients = ["flour", "sugar", "butter"];

    // Check for missing essential ingredients
    const missingIngredients = [...essentialIngredients].filter(ingredient => !ingredients.includes(ingredient));

    if (missingIngredients.length > 0) {
        console.warn(`Missing essential ingredients: ${missingIngredients.join(", ")}`);
        process.exit(1);
    }

    return `YUMMY! Your ${type} pie has been baked with delicious ${ingredients.join(", ")}.`;
}


module.exports = bakePie;


