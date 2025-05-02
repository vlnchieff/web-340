/*
Chris Weaver
2025May02
Filename: server.js
*/

const http = require("http");
const url = require("url");

let character = {}; // Store created character

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (req.method === "POST" && parsedUrl.pathname === "/create-character") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const params = parsedUrl.query;

      character = {
        id: Date.now().toString(),
        class: params.class,
        gender: params.gender,
        funFact: params.funFact,
        confirmed: false,
      };

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(character));
    });

  } else if (req.method === "POST" && parsedUrl.pathname === "/confirm-character") {
    if (character.id) {
      character.confirmed = true;

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Character confirmed", confirmed: true }));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "No character created" }));
    }

  } else if (req.method === "GET" && parsedUrl.pathname === "/view-character") {
    if (character.id) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(character));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Character not found" }));
    }

  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Route not found" }));
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

module.exports = server;


