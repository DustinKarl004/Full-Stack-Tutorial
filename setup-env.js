const fs = require('fs');
const path = require('path');

// Create the .env.local file with the required variables
const envContent = `# Email service credentials
EMAIL_PASSWORD=your_app_password_here

# Note: Replace 'your_app_password_here' with an app password from your Google account
# This is for using Gmail as the email service. You'll need to:
# 1. Enable 2-step verification on your Google account
# 2. Create an app password at https://myaccount.google.com/apppasswords
# 3. Use that password here`;

try {
  fs.writeFileSync(path.join(__dirname, '.env.local'), envContent);
  console.log('\x1b[32m%s\x1b[0m', '✓ .env.local file created successfully!');
  console.log('\x1b[33m%s\x1b[0m', 'IMPORTANT: Edit the .env.local file and add your email app password before using the contact form.');
} catch (error) {
  console.error('\x1b[31m%s\x1b[0m', '✗ Error creating .env.local file:');
  console.error(error);
}

// Check if public/images folder exists
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  console.log('\x1b[33m%s\x1b[0m', '! Images directory does not exist. Creating it now...');
  try {
    fs.mkdirSync(imagesDir, { recursive: true });
    console.log('\x1b[32m%s\x1b[0m', '✓ Images directory created successfully!');
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', '✗ Error creating images directory:');
    console.error(error);
  }
}

console.log('\x1b[36m%s\x1b[0m', 'Setup Complete!');
console.log('\x1b[0m', 'To use the contact form with email functionality:');
console.log('1. Edit the .env.local file and add your Google app password');
console.log('2. For the tech stack images to work, add image files to the public/images directory');
console.log('   with filenames matching the tech stack IDs (e.g., react.png, vue.png, etc.)');
console.log('\nRestart your development server after making these changes.'); 