const GameCharacters = require("../src/game-characters");
const path = require("path");

const VALID_SCRIPT = "game-characters-data.js";
const INVALID_SCRIPT = "non-existent.js";
const FAILING_SCRIPT = "failing-script.js";

describe("GameCharacters", () => {
    let gameCharacters;

    beforeEach(() => {
        gameCharacters = new GameCharacters(VALID_SCRIPT);
    });

    test("Return game characters data", (done) => {
        gameCharacters.getCharacters((data, error) => {
            expect(error).toBeNull();
            expect(Array.isArray(data)).toBe(true);
            expect(data.length).toBeGreaterThan(0);
            expect(typeof data[0]).toBe("object");
            done();
        });
    });

    test("Missing script file", (done) => {
        const invalidInstance = new GameCharacters(INVALID_SCRIPT);
        invalidInstance.getCharacters((data, error) => {
            expect(data).toBeNull();
            expect(error).not.toBeNull();
            done();
        });
    });

    test("Script execution failure", (done) => {
        const failingInstance = new GameCharacters(FAILING_SCRIPT);
        failingInstance.getCharacters((data, error) => {
            expect(data).toBeNull();
            expect(error).not.toBeNull();
            done();
        });
    });
});
