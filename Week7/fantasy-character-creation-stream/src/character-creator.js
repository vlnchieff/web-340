const { Duplex } = require('stream');

class CharacterCreator extends Duplex {
    constructor(options) {
        super(options);
        this.characterData = [];
    }

    _write(chunk, encoding, callback) {
      if (!chunk.toString().trim()) {
          this.emit('error', new Error('Invalid character data format')); // Emit error
          return callback(new Error('Invalid character data format'));
      }
      this.characterData.push(JSON.parse(chunk.toString()));
      callback();
  }


    _read(size) {
      if (this.characterData.length > 0) {
        const character = this.characterData.shift();
        this.push(this.formatCharacter(character));
        } else {
            this.push(null); // Signals end of readable stream
        }
    }
    formatCharacter(character) {
      return `Character: ${character.name}, Class: ${character.class}, Gender: ${character.gender}. Fun fact: ${character.funFact}`;
  }
}

module.exports = CharacterCreator;
