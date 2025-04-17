/*    JavaScript 7th Edition
      Chapter 8
      Chapter case

      Draw Poker Game using Object Oriented Programming
      Author: Chris Weaver
      Date:    03.30.25

      Filename:       js08.js
 */

"use strict";

function calculateDistanceBetweenPlanets(distanceFromSunPlanet1, distanceFromSunPlanet2) {
    if (typeof distanceFromSunPlanet1 !== "number" || typeof distanceFromSunPlanet2 !== "number") {
        throw new Error("Both distances must be numbers");
    }

    // Calculate and return the absolute difference
    return Math.abs(distanceFromSunPlanet1 - distanceFromSunPlanet2);
}

module.exports = {
    calculateDistanceBetweenPlanets
};