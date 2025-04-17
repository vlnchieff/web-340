"use strict";

const assert = require("assert");

const { calculateDistanceBetweenPlanets } = require("../src/distance-calculator");

// Test 1: Calculates the distance between Earth and Mars
function testEarthToMars() {
    try {
        const result = calculateDistanceBetweenPlanets(1, 0.5);
        assert.strictEqual(result, 0.9, "Test failed: Expected distance between Earth and Mars to be 0.5 AU");
        console.log("The test EarthToMars passed.");
        return true;
    } catch (error) {
        console.error(`The test EarthToMars failed: ${error.message}`);
        return false;
    }
}

// Test 2: Calculates distance when both planets are the same distance from the Sun
function testEqualDistances() {
    try {
      const result = calculateDistanceBetweenPlanets(2.0, 2.0);
        assert.strictEqual(result, 0, "Test failed: Expected distance between the same distances to be 0 AU");
        console.log("The test EqualDistances passed.");
        return true;
    } catch (error) {
        console.error(`testEqualDistances failed: ${error.message}`);
        return false;
    }
}

// Test 3: Calculates distance when one distance is negative
function testNegativeDistance() {
    try {
        const result = calculateDistanceBetweenPlanets(-3.0, 4.0);
        assert.strictEqual(result, 7.0, "Test failed: Expected distance between -2 AU and 3 AU to be 5.0 AU");
        console.log("The test NegativeDistance passed.");
        return true;
    } catch (error) {
        console.error(`testNegativeDistance failed: ${error.message}`);
        return false;
    }
}

// Execute tests
testEarthToMars();
testEqualDistances();
testNegativeDistance();
