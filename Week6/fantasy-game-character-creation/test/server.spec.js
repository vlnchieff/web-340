const request = require("supertest");
const server = require("../server");

describe("Character Creation", () => {
  let characterId;

  beforeEach(async () => {
    // Create a character before running tests that require it
    const response = await request(server)
      .post("/create-character?class=Mage&gender=Female&funFact=Master of illusions");

    characterId = response.body.id;
  });

  test("POST /create-character should create a character", async () => {
    expect(characterId).toBeDefined();
  });

  test("POST /confirm-character should confirm character creation", async () => {
    const response = await request(server).post("/confirm-character");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Character confirmed");
  });

  test("GET /view-character should retrieve the created character", async () => {
    const response = await request(server).get("/view-character");

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(characterId);
  });
});
