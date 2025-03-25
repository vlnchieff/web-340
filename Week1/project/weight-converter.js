if (process.argv.length < 3) {
  console.error('stderr: Usage: node weight-converter.js <pounds>');
  process.exit(1);
}

const pounds = process.argv[2];

if (isNaN(pounds)) {
  console.error('stderr: Input must be a number.');
  process.exit(1);
}

const kilograms = (parseFloat(pounds) * 0.453592).toFixed(2);

console.log(`${pounds} pounds is equal to ${kilograms} kilograms.`);
