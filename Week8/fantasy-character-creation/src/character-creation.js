const fs = require('fs');
const path = require('path');

const CHARACTER_FILE = path.join(__dirname, 'character.json');

function createCharacter({ characterClass, gender, funFactor }) {
  const allowedClasses = ['Warrior', 'Mage', 'Rogue'];
  const allowedGenders = ['Male', 'Female', 'Other'];

  if (!allowedClasses.includes(characterClass)) {
    throw new Error('Invalid character class');
  }
  if (!allowedGenders.includes(gender)) {
    throw new Error('Invalid gender');
  }

  return { characterClass, gender, funFactor };
}

function writeCharacterToFile(character, callback) {
  fs.writeFile(CHARACTER_FILE, JSON.stringify(character, null, 2), (err) => {
    callback(err);
  });
}

function readCharacterFromFile(callback) {
  fs.readFile(CHARACTER_FILE, 'utf8', (err, data) => {
    if (err) {
      return callback(err);
    }
    try {
      const character = JSON.parse(data);
      callback(null, character);
    } catch (parseError) {
      callback(parseError);
    }
  });
}

module.exports = {
  createCharacter,
  writeCharacterToFile,
  readCharacterFromFile,
  CHARACTER_FILE
};
