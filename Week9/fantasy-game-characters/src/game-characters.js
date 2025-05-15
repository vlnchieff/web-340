const { spawn } = require("child_process");
const path = require("path");

class GameCharacters {
    constructor(scriptFileName) {
        this.scriptFilePath = path.join(__dirname, scriptFileName);
    }

    getCharacters(callback) {
        const process = spawn("node", [this.scriptFilePath]);
        let data = "";

        process.stdout.on("data", (chunk) => {
            data += chunk;
        });

        process.stderr.on("data", (error) => {
            callback(null, error.toString());
        });

        process.on("close", (code) => {
            if (code === 0) {
                callback(JSON.parse(data), null);
            } else {
                callback(null, `Process exited with code ${code}`);
            }
        });
    }
}

module.exports = GameCharacters;
