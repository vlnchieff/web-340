const CharacterCreator = require('../src/character-creator');
const { Readable } = require('stream');

describe('CharacterCreator', () => {
    let characterStream;

    beforeEach(() => {
        characterStream = new CharacterCreator();
    });

    // Test 1
    test('should process character data correctly', (done) => {
        const characterData = JSON.stringify({
            name: 'Aragorn',
            class: 'Warrior',
            gender: 'Male',
            funFact: 'Descended from royalty',
        });

        characterStream.write(characterData);
        characterStream.end();

        characterStream.on('data', (chunk) => {
            expect(chunk.toString()).toContain(
                'Character: Aragorn, Class: Warrior, Gender: Male. Fun fact: Descended from royalty'
            );
            done();
        });
    });

    // Test 2
    test('should emit an error when empty data is written', (done) => {
        characterStream.on('error', (error) => {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe('Invalid character data format');
            done();
        });

        characterStream.write('');
    });

    // Test 3
    test('should correctly transform character data into formatted output', (done) => {
        const inputData = JSON.stringify({
            name: 'Gandalf',
            class: 'Mage',
            gender: 'Male',
            funFact: 'Carries a staff',
        });

        characterStream.write(inputData);
        characterStream.end();

        characterStream.on('data', (chunk) => {
            expect(chunk.toString()).toBe(
                'Character: Gandalf, Class: Mage, Gender: Male. Fun fact: Carries a staff'
            );
            done();
        });
    });
});
