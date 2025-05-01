const http = require("http");
const url = require("url");

let character = null;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (req.method === "POST" && parsedUrl.pathname === "/create-character") {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const params = parsedUrl.query;
      if (!params.class || !params.gender || !params.funFact) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ error: "Missing character details" }));
      }

      character = { id: Date.now(), class: params.class, gender: params.gender, funFact: params.funFact };
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(character));
    });
  } else if (req.method === "POST" && parsedUrl.pathname === "/confirm-character") {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      if (!character) {
        res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ error: "No character found" }));
      }

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Character confirmed" }));
    });
  } else if (req.method === "GET" && parsedUrl.pathname === "/view-character") {
    if (!character) {
      res.writeHead(404, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ error: "No character found" }));
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(character));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Route not found" }));
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

