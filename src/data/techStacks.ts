export type TechStackType = {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'mobile' | 'cloud' | 'tool';
  popularity: number; // 1-10 scale
  difficulty: number; // 1-10 scale
  relatedTutorials?: string[]; // IDs of related tutorials
}

export const techStacks: TechStackType[] = [
  {
    id: 'react',
    name: 'React',
    description: 'A JavaScript library for building user interfaces with a component-based architecture.',
    imageSrc: '/images/react.png',
    category: 'frontend',
    popularity: 9,
    difficulty: 6,
    relatedTutorials: ['mern-stack', 'aws-amplify']
  },
  {
    id: 'vue',
    name: 'Vue.js',
    description: 'Progressive JavaScript framework for building UIs with an approachable learning curve.',
    imageSrc: '/images/vue.png',
    category: 'frontend',
    popularity: 7,
    difficulty: 5,
    relatedTutorials: ['vue-node']
  },
  {
    id: 'angular',
    name: 'Angular',
    description: 'Platform and framework for building single-page client applications using HTML and TypeScript.',
    imageSrc: '/images/angular.png',
    category: 'frontend',
    popularity: 7,
    difficulty: 8
  },
  {
    id: 'next',
    name: 'Next.js',
    description: 'React framework for production that enables server-side rendering and static site generation.',
    imageSrc: '/images/next.png',
    category: 'frontend',
    popularity: 8,
    difficulty: 6,
    relatedTutorials: ['jamstack']
  },
  {
    id: 'node',
    name: 'Node.js',
    description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine for building scalable network applications.',
    imageSrc: '/images/node.png',
    category: 'backend',
    popularity: 9,
    difficulty: 6,
    relatedTutorials: ['mern-stack', 'vue-node']
  },
  {
    id: 'django',
    name: 'Django',
    description: 'High-level Python web framework that encourages rapid development and clean, pragmatic design.',
    imageSrc: '/images/django.png',
    category: 'backend',
    popularity: 7,
    difficulty: 6,
    relatedTutorials: ['python-django']
  },
  {
    id: 'flask',
    name: 'Flask',
    description: 'Lightweight WSGI web application framework in Python designed to make getting started quick and easy.',
    imageSrc: '/images/flask.png',
    category: 'backend',
    popularity: 6,
    difficulty: 5
  },
  {
    id: 'express',
    name: 'Express.js',
    description: 'Fast, unopinionated, minimalist web framework for Node.js applications.',
    imageSrc: '/images/express.png',
    category: 'backend',
    popularity: 8,
    difficulty: 5,
    relatedTutorials: ['mern-stack', 'vue-node']
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    description: 'Document-oriented NoSQL database used for high volume data storage and flexibility.',
    imageSrc: '/images/mongodb.png',
    category: 'database',
    popularity: 8,
    difficulty: 5,
    relatedTutorials: ['mern-stack', 'vue-node']
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    description: 'Powerful, open source object-relational database system with a strong reputation for reliability.',
    imageSrc: '/images/postgresql.png',
    category: 'database',
    popularity: 8,
    difficulty: 6,
    relatedTutorials: ['python-django']
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    description: 'A query language for APIs and a runtime for executing those queries with your existing data.',
    imageSrc: '/images/graphql.png',
    category: 'backend',
    popularity: 7,
    difficulty: 7,
    relatedTutorials: ['jamstack', 'aws-amplify']
  },
  {
    id: 'docker',
    name: 'Docker',
    description: 'Platform for developing, shipping, and running applications in containers.',
    imageSrc: '/images/docker.png',
    category: 'devops',
    popularity: 9,
    difficulty: 7
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    description: 'Open-source container orchestration platform for automating deployment, scaling, and management.',
    imageSrc: '/images/kubernetes.png',
    category: 'devops',
    popularity: 8,
    difficulty: 9
  },
  {
    id: 'aws',
    name: 'AWS',
    description: 'Comprehensive and widely adopted cloud platform offering over 200 services globally.',
    imageSrc: '/images/aws.png',
    category: 'cloud',
    popularity: 9,
    difficulty: 8,
    relatedTutorials: ['aws-amplify']
  },
  {
    id: 'python',
    name: 'Python',
    description: 'Interpreted, high-level, general-purpose programming language known for its readability.',
    imageSrc: '/images/python.png',
    category: 'backend',
    popularity: 9,
    difficulty: 4,
    relatedTutorials: ['python-django', 'web-scraping']
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    description: 'Strongly typed programming language that builds on JavaScript, giving better tooling.',
    imageSrc: '/images/typescript.png',
    category: 'frontend',
    popularity: 8,
    difficulty: 6
  }
];

export function getTechStackById(id: string): TechStackType | null {
  return techStacks.find(tech => tech.id === id) || null;
}

export function getTechStacksByCategory(category: string): TechStackType[] {
  return techStacks.filter(tech => tech.category === category);
}

export function getRelatedTechStacks(tutorialId: string): TechStackType[] {
  return techStacks.filter(tech => tech.relatedTutorials?.includes(tutorialId));
}

export function getPopularTechStacks(limit: number = 5): TechStackType[] {
  return [...techStacks]
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, limit);
} 