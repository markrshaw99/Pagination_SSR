// Use this by calling `node build.js <currentPage> <totalPages> - it's idiot proof really. Eg. `node build.js 6 20`

const fs = require('fs');
const path = require('path');

const { paginateThisBitch } = require('./pagination.js');

const args = process.argv.slice(2);
let currentPage = 1;
let totalPages = 1;
if (args.length >= 2) {
  currentPage = parseInt(args[0], 10);
  totalPages = parseInt(args[1], 10);
  if (isNaN(currentPage) || isNaN(totalPages) || currentPage < 1 || totalPages < 1) {
    console.error('You typed it wrong you muppet! Either you\'ve picked numbers less than 1 or they\'re not even numbers. Shaking my head here. Please provide valid numbers for current page and total pages.');
    process.exit(1);
  } else if (currentPage > totalPages) {
    console.error('You typed it wrong you muppet! Your current page cannot be greater than total pages can it you absolute buffoon. Provide valid numbers for current page and total pages or get out.');
    process.exit(1);
  }
} else {
  console.log('You typed it wrong you muppet! I need at least 2 numbers to work with! You want me to guess what you want?');
  process.exit(1);
}

const paginationHTML = paginateThisBitch(currentPage, totalPages);
const templatePath = path.join(__dirname, 'index.template.html');
const outputPath = path.join(__dirname, 'index.html');
const template = fs.readFileSync(templatePath, 'utf8');
const output = template.replace('PutItInHereDaddy', paginationHTML);

fs.writeFileSync(outputPath, output);

console.log('I made the page for you whilst you just sat there - lazy twat');
