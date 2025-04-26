export type TutorialType = {
  id: string;
  title: string;
  slug: string;
  description: string;
  imageSrc: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  author: string;
  published: string;
  techStack: string[];
}

export const tutorials: TutorialType[] = [
  {
    id: 'mern-stack',
    title: 'Building a Full-Stack App with MERN Stack',
    slug: 'mern-stack',
    description: 'Learn how to build a complete web application using MongoDB, Express.js, React, and Node.js. This comprehensive tutorial covers everything from setup to deployment.',
    imageSrc: '/images/mern-stack.jpg',
    category: 'Full Stack',
    level: 'intermediate',
    duration: '5 hours',
    author: 'Alex Johnson',
    published: '2023-10-15',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js']
  },
  {
    id: 'python-django',
    title: 'Building a Web App with Python and Django',
    slug: 'python-django',
    description: 'Explore how to create a robust web application using Python and Django framework. Learn about MVT architecture, ORM, authentication, and more.',
    imageSrc: '/images/python-django.jpg',
    category: 'Backend',
    level: 'beginner',
    duration: '4 hours',
    author: 'Maria Garcia',
    published: '2023-09-20',
    techStack: ['Python', 'Django', 'PostgreSQL', 'HTML/CSS']
  },
  {
    id: 'jamstack',
    title: 'Modern Web Development with JAMstack',
    slug: 'jamstack',
    description: 'Discover the power of JavaScript, APIs, and Markup architecture. Build fast, secure, and scalable websites using modern JAMstack technologies.',
    imageSrc: '/images/jamstack.jpg',
    category: 'Frontend',
    level: 'intermediate',
    duration: '3 hours',
    author: 'Ryan Taylor',
    published: '2023-08-12',
    techStack: ['Next.js', 'GraphQL', 'Netlify', 'Contentful']
  },
  {
    id: 'vue-node',
    title: 'Full Stack Development with Vue.js and Node.js',
    slug: 'vue-node',
    description: 'Learn how to combine Vue.js for the frontend with Node.js for the backend to create dynamic web applications with robust APIs.',
    imageSrc: '/images/vue-node.jpg',
    category: 'Full Stack',
    level: 'intermediate',
    duration: '6 hours',
    author: 'Sophie Chen',
    published: '2023-07-05',
    techStack: ['Vue.js', 'Node.js', 'Express.js', 'MongoDB']
  },
  {
    id: 'aws-amplify',
    title: 'Building Serverless Applications with AWS Amplify',
    slug: 'aws-amplify',
    description: 'Explore how to build, deploy, and host full-stack applications using AWS Amplify, with features like authentication, APIs, and hosting.',
    imageSrc: '/images/aws-amplify.jpg',
    category: 'Cloud',
    level: 'advanced',
    duration: '4.5 hours',
    author: 'James Wilson',
    published: '2023-11-02',
    techStack: ['React', 'AWS Amplify', 'GraphQL', 'DynamoDB']
  },
  {
    id: 'web-scraping',
    title: 'Web Scraping with Python and BeautifulSoup',
    slug: 'web-scraping',
    description: 'Learn how to extract data from websites using Python, BeautifulSoup, and Requests. Build scrapers for various use cases and automate data collection.',
    imageSrc: '/images/web-scraping.jpg',
    category: 'Automation',
    level: 'beginner',
    duration: '3 hours',
    author: 'David Kim',
    published: '2023-06-18',
    techStack: ['Python', 'BeautifulSoup', 'Requests', 'Pandas']
  }
];

export function getTutorialBySlug(slug: string): TutorialType | null {
  return tutorials.find(tutorial => tutorial.slug === slug) || null;
}

export function getTutorialsByCategory(category: string): TutorialType[] {
  return tutorials.filter(tutorial => tutorial.category === category);
}

export function getTutorialsByLevel(level: 'beginner' | 'intermediate' | 'advanced'): TutorialType[] {
  return tutorials.filter(tutorial => tutorial.level === level);
}

export function searchTutorials(query: string): TutorialType[] {
  const lowercaseQuery = query.toLowerCase();
  return tutorials.filter(tutorial => 
    tutorial.title.toLowerCase().includes(lowercaseQuery) ||
    tutorial.description.toLowerCase().includes(lowercaseQuery) ||
    tutorial.category.toLowerCase().includes(lowercaseQuery) ||
    tutorial.techStack.some(tech => tech.toLowerCase().includes(lowercaseQuery))
  );
} 