const fs = require('fs');
const path = require('path');
const {
  createCharacter,
  writeCharacterToFile,
  readCharacterFromFile
} = require('../src/character-creation');

// Define the path to the character file for cleanup in tests
const { CHARACTER_FILE } = require('../src/character-creation');

describe('Character Creation Module Tests', () => {

  afterEach((done) => {
    fs.unlink(CHARACTER_FILE, (err) => {
    done();
    });
  });

  test('should write character data to a file', (done) => {
    const testCharacter = createCharacter({
      characterClass: 'Warrior',
      gender: 'Male',
      funFactor: 'Master of strategy'
    });

    writeCharacterToFile(testCharacter, (err) => {
      expect(err).toBeNull();
      fs.readFile(CHARACTER_FILE, 'utf8', (err, data) => {
        expect(err).toBeNull();
        const fileCharacter = JSON.parse(data);
        expect(fileCharacter).toEqual(testCharacter);
        done();
      });
    });
  });

  test('should read character data from a file', (done) => {
    const testCharacter = createCharacter({
      characterClass: 'Warrior',
      gender: 'Male',
      funFactor: 'Master of strategy'
    });
    // Write the file manually
    fs.writeFile(CHARACTER_FILE, JSON.stringify(testCharacter, null, 2), (err) => {
      expect(err).toBeNull();
      // Use the module's read function
      readCharacterFromFile((err, character) => {
        expect(err).toBeNull();
        expect(character).toEqual(testCharacter);
        done();
      });
    });
  });

  test('should throw an error for an invalid character class', () => {
    expect(() => {
      createCharacter({
        characterClass: 'Peasant',
        gender: 'Other',
        funFactor: 'Always smiling'
      });
    }).toThrow('Invalid character class');
  });

  test('should throw an error for an invalid gender', () => {
    expect(() => {
      createCharacter({
        characterClass: 'Rogue',
        gender: 'Alien',
        funFactor: 'Mysterious flair'
      });
    }).toThrow('Invalid gender');
  });
});
