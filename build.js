// build.js
const fs = require('fs');
require('dotenv').config();

// Read the template HTML file
const templateHTML = fs.readFileSync('index.template.html', 'utf8');

// Replace placeholders with environment variables
const builtHTML = templateHTML
  .replace('%%PRICING_TABLE_ID%%', process.env.STRIPE_PRICING_TABLE_ID)
  .replace('%%PUBLISHABLE_KEY%%', process.env.STRIPE_PUBLISHABLE_KEY);

// Write the processed file
fs.writeFileSync('index.html', builtHTML);

console.log('Build complete! index.html created with environment variables.');