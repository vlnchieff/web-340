/*
Chris Weaver
2025.May.01
Filename: pie.spec.js
*/

"use strict";

const bakePie = require("../src/pie");

describe("bakePie Tests", () => {
    beforeEach(() => {
        jest.spyOn(process, "exit").mockImplementation(() => {});
        console.warn = jest.fn();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test("bakes a pie when all ingredients are provided", () => {
        const result = bakePie("apple", ["flour", "sugar", "butter", "apples"]);
        expect(result).toBe(
            "Heck Yeah!! Your apple pie has been baked with organic flour, sugar, butter, and fresh apples."
        );
    });

    test("triggers an error when missing one ingredient", () => {
        bakePie("cherry", ["sugar", "butter", "cherry"]);
        expect(console.warn).toHaveBeenCalledWith("Missing ingredients: flour");
        expect(process.exit).toHaveBeenCalledWith(1);
    });

    test("triggers an error when missing multiple ingredients", () => {
        bakePie("blueberry", ["sugar", "butter", "blueberries"]);
        expect(console.warn).toHaveBeenCalledWith("Missing ingredients: flour, sugar");
        expect(process.exit).toHaveBeenCalledWith(1);
    });
});
