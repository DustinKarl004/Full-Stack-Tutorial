const fs = require('fs');
const path = require('path');
const https = require('https');

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

// Tutorial data for creating tutorial images
const tutorials = [
  { id: 'mern-stack', title: 'MERN Stack' },
  { id: 'jamstack', title: 'JAMstack' },
  { id: 'python-django', title: 'Python Django' },
  { id: 'vue-node', title: 'Vue + Node.js' },
  { id: 'aws-amplify', title: 'AWS Amplify' },
  { id: 'web-scraping', title: 'Web Scraping' }
];

const imagesDir = path.join(__dirname, 'public', 'images');

// Ensure images directory exists
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
  console.log('Created images directory');
}

// Function to download an image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(imagesDir, filename);
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // Delete the file if there's an error
      console.error(`Error downloading ${filename}: ${err.message}`);
      reject(err);
    });
  });
}

// Tech stack icon URLs (using real icons from Simple Icons and other sources)
const techStackIcons = {
  'react': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'vue': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
  'next': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'node': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  'flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
  'express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'mongodb': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'postgresql': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'graphql': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
  'docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
  'aws': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
  'python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'typescript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
};

// Color mapping for tech stacks (for tutorial placeholders)
const colors = {
  'react': '61DAFB',
  'vue': '42B883',
  'angular': 'DD0031',
  'next': '000000',
  'node': '339933',
  'django': '092E20',
  'flask': '000000',
  'express': '000000',
  'mongodb': '47A248',
  'postgresql': '336791',
  'graphql': 'E535AB',
  'docker': '2496ED',
  'kubernetes': '326CE5',
  'aws': 'FF9900',
  'python': '3776AB',
  'typescript': '3178C6'
};

// Download images for all tech stacks
async function downloadAllImages() {
  console.log('Starting image downloads...');
  
  const downloadPromises = [];
  
  // Tech stack icons - using real icons
  techStacks.forEach(tech => {
    const iconUrl = techStackIcons[tech.id];
    if (iconUrl) {
      downloadPromises.push(downloadImage(iconUrl, `${tech.id}.svg`));
      downloadPromises.push(downloadImage(iconUrl, `${tech.id}.png`)); // Also save as PNG for compatibility
    } else {
      // Fallback to placeholder if icon URL not defined
      const color = colors[tech.id] || '3498db';
      const imageUrl = `https://via.placeholder.com/80x80/${color}/ffffff?text=${tech.name.charAt(0)}`;
      downloadPromises.push(downloadImage(imageUrl, `${tech.id}.png`));
    }
  });
  
  // Tutorial images
  tutorials.forEach(tutorial => {
    // Tutorial main image
    const tutorialImageUrl = `https://via.placeholder.com/800x400/3498db/ffffff?text=${tutorial.title}`;
    downloadPromises.push(downloadImage(tutorialImageUrl, `${tutorial.id}-tutorial.png`));
    
    // Tutorial thumbnail
    const thumbnailImageUrl = `https://via.placeholder.com/400x200/3498db/ffffff?text=${tutorial.title}`;
    downloadPromises.push(downloadImage(thumbnailImageUrl, `${tutorial.id}-thumbnail.png`));
  });
  
  // Hero image
  const heroImageUrl = `https://via.placeholder.com/600x400/3498db/ffffff?text=Full+Stack+Tutorial`;
  downloadPromises.push(downloadImage(heroImageUrl, `hero-image.png`));
  
  try {
    await Promise.all(downloadPromises);
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Some images failed to download:', error);
  }
}

downloadAllImages(); 