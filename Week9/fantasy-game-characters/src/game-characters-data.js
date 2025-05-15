// game-characters-data.js

const characters = [
  {
      class: "Warrior",
      gender: "Male",
      uniqueTrait: "Carries an enchanted shield that absorbs magic attacks."
  },
  {
      class: "Mage",
      gender: "Female",
      uniqueTrait: "Can summon spectral creatures to assist in battle."
  },
  {
      class: "Rogue",
      gender: "Other",
      uniqueTrait: "Leaves no footprints, making them nearly impossible to track."
  }
];

console.log(JSON.stringify(characters, null, 2));