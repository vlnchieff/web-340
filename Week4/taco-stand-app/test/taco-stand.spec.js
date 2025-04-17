"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/taco-stand");

// Test 1: Ensures that the "serve" event is emitted
function testServeCustomer() {
    try {
        const tacoStand = new TacoStandEmitter();
        tacoStand.on("serve", (customer) => {
            assert.strictEqual(customer, "Alice", "The served customer should be Alice");
        });
        tacoStand.serveCustomer("Alice");
        console.log("testServeCustomer passed.");
        return true;
    } catch (err) {
        console.error(`testServeCustomer failed: ${err}`);
        return false;
    }
}

// Test 2: Ensures that the "prepare" event is emitted
function testPrepareTaco() {
    try {
        const tacoStand = new TacoStandEmitter();
        tacoStand.on("prepare", (taco) => {
            assert.strictEqual(taco, "Veggie Taco", "The prepared taco should be Veggie Taco");
        });
        tacoStand.prepareTaco("Veggie Taco");
        console.log("testPrepareTaco passed.");
        return true;
    } catch (err) {
        console.error(`testPrepareTaco failed: ${err}`);
        return false;
    }
}

// Test 3: Ensures that the "rush" event is emitted
function testHandleRush() {
    try {
        const tacoStand = new TacoStandEmitter();
        tacoStand.on("rush", (rush) => {
            assert.strictEqual(rush, "Lunch Rush", "The rush should be Lunch Rush");
        });
        tacoStand.handleRush("Lunch Rush");
        console.log("testHandleRush passed.");
        return true;
    } catch (err) {
        console.error(`testHandleRush failed: ${err}`);
        return false;
    }
}

// Execute the tests
testServeCustomer();
testPrepareTaco();
testHandleRush();
