const fs = require('fs');
const path = require('path');

// Hardcoded tech stacks data
const techStacks = [
  { id: 'react', name: 'React' },
  { id: 'vue', name: 'Vue' },
  { id: 'angular', name: 'Angular' },
  { id: 'next', name: 'Next' },
  { id: 'node', name: 'Node' },
  { id: 'django', name: 'Django' },
  { id: 'flask', name: 'Flask' },
  { id: 'express', name: 'Express' },
  { id: 'mongodb', name: 'MongoDB' },
  { id: 'postgresql', name: 'PostgreSQL' },
  { id: 'graphql', name: 'GraphQL' },
  { id: 'docker', name: 'Docker' },
  { id: 'kubernetes', name: 'Kubernetes' },
  { id: 'aws', name: 'AWS' },
  { id: 'python', name: 'Python' },
  { id: 'typescript', name: 'TypeScript' }
];

// Tutorial data
const tutorials = [
  { id: 'mern-stack', title: 'MERN Stack' },
  { id: 'jamstack', title: 'JAMstack' },
  { id: 'python-django', title: 'Python Django' },
  { id: 'vue-node', title: 'Vue + Node.js' },
  { id: 'aws-amplify', title: 'AWS Amplify' },
  { id: 'web-scraping', title: 'Web Scraping' }
];

const imagesDir = path.join(__dirname, 'public', 'images');

// Ensure the images directory exists
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
  console.log('Created images directory');
}

// Function to generate a simple SVG placeholder
function generateSvgPlaceholder(width, height, backgroundColor, textColor, text) {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${backgroundColor}"/>
  <text x="50%" y="50%" font-family="Arial" font-size="${Math.min(width, height) / 10}px" fill="${textColor}" dominant-baseline="middle" text-anchor="middle">${text}</text>
</svg>`;
}

// Generate tech stack icon placeholders
techStacks.forEach(tech => {
  const svgContent = generateSvgPlaceholder(80, 80, '#3498db', '#ffffff', tech.name.charAt(0));
  const svgPath = path.join(imagesDir, `${tech.id}.svg`);
  
  // Only write if file doesn't exist (don't overwrite downloaded real images)
  if (!fs.existsSync(svgPath)) {
    fs.writeFileSync(svgPath, svgContent);
    console.log(`Generated: ${tech.id}.svg`);
  }
});

// Generate tutorial images
tutorials.forEach(tutorial => {
  // Tutorial image
  const tutorialSvg = generateSvgPlaceholder(800, 400, '#3498db', '#ffffff', tutorial.title);
  const tutorialSvgPath = path.join(imagesDir, `${tutorial.id}-tutorial.svg`);
  fs.writeFileSync(tutorialSvgPath, tutorialSvg);
  console.log(`Generated: ${tutorial.id}-tutorial.svg`);
  
  // Tutorial thumbnail
  const thumbnailSvg = generateSvgPlaceholder(400, 200, '#3498db', '#ffffff', tutorial.title);
  const thumbnailSvgPath = path.join(imagesDir, `${tutorial.id}-thumbnail.svg`);
  fs.writeFileSync(thumbnailSvgPath, thumbnailSvg);
  console.log(`Generated: ${tutorial.id}-thumbnail.svg`);
  
  // Also generate PNG versions for better compatibility
  const tutorialPngPath = path.join(imagesDir, `${tutorial.id}-tutorial.png`);
  if (!fs.existsSync(tutorialPngPath)) {
    fs.writeFileSync(tutorialPngPath, tutorialSvg);
    console.log(`Generated: ${tutorial.id}-tutorial.png (as SVG)`);
  }
  
  const thumbnailPngPath = path.join(imagesDir, `${tutorial.id}-thumbnail.png`);
  if (!fs.existsSync(thumbnailPngPath)) {
    fs.writeFileSync(thumbnailPngPath, thumbnailSvg);
    console.log(`Generated: ${tutorial.id}-thumbnail.png (as SVG)`);
  }
});

// Generate hero image
const heroSvg = generateSvgPlaceholder(600, 400, '#3498db', '#ffffff', 'Full Stack Tutorial');
const heroSvgPath = path.join(imagesDir, 'hero-image.svg');
fs.writeFileSync(heroSvgPath, heroSvg);
console.log('Generated: hero-image.svg');

// Also generate PNG for hero image
const heroPngPath = path.join(imagesDir, 'hero-image.png');
if (!fs.existsSync(heroPngPath)) {
  fs.writeFileSync(heroPngPath, heroSvg);
  console.log('Generated: hero-image.png (as SVG)');
}

console.log('All placeholder images generated successfully!'); 