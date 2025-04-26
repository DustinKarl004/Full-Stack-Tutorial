import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import CodeBlock from '@/components/CodeBlock'
import { getTutorialBySlug } from '@/data/tutorials'
import { getRelatedTechStacks } from '@/data/techStacks'

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const tutorial = getTutorialBySlug(params.slug)
  
  if (!tutorial) {
    return {
      title: 'Tutorial Not Found',
      description: 'The requested tutorial could not be found.'
    }
  }
  
  return {
    title: `${tutorial.title} | Full Stack Tutorial`,
    description: tutorial.description
  }
}

export default function TutorialPage({ params }: { params: { slug: string } }) {
  const tutorial = getTutorialBySlug(params.slug)
  
  if (!tutorial) {
    notFound()
  }
  
  const relatedTechStacks = getRelatedTechStacks(tutorial.id)
  
  // Format the published date
  const publishedDate = new Date(tutorial.published).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  
  return (
    <PageLayout>
      <article className="tutorial-content">
        <div className="container">
          <AnimateOnScroll animation="fade-in">
            <header className="tutorial-content__header">
              <span style={{ 
                display: 'inline-block',
                padding: '0.25rem 0.75rem',
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                borderRadius: '4px',
                color: 'var(--primary-color)',
                fontSize: '0.9rem',
                marginBottom: '1rem'
              }}>
                {tutorial.category}
              </span>
              
              <h1 className="tutorial-content__title">{tutorial.title}</h1>
              
              <div className="tutorial-content__meta">
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {tutorial.duration}
                </span>
                
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 2V4M8 2V4M3 8H21M8 12H10M14 12H16M8 16H10M14 16H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {publishedDate}
                </span>
                
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {tutorial.author}
                </span>
              </div>
              
              <Image 
                src={`/images/${tutorial.id}-tutorial.svg`}
                alt={tutorial.title}
                width={800}
                height={400}
                className="tutorial-content__image"
              />
            </header>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-in" delay={0.2}>
            <div className="tutorial-content__toc">
              <h2 className="tutorial-content__toc-title">Table of Contents</h2>
              <ol className="tutorial-content__toc-list">
                <li className="tutorial-content__toc-item">
                  <a href="#introduction">Introduction</a>
                </li>
                <li className="tutorial-content__toc-item">
                  <a href="#prerequisites">Prerequisites</a>
                </li>
                <li className="tutorial-content__toc-item">
                  <a href="#setup">Project Setup</a>
                </li>
                <li className="tutorial-content__toc-item">
                  <a href="#implementation">Implementation</a>
                </li>
                <li className="tutorial-content__toc-item">
                  <a href="#deployment">Deployment</a>
                </li>
                <li className="tutorial-content__toc-item">
                  <a href="#next-steps">Next Steps</a>
                </li>
              </ol>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-in" delay={0.3}>
            <section id="introduction">
              <h2>Introduction</h2>
              
              <p>
                In this tutorial, we'll learn how to build a complete web application using {tutorial.techStack.join(', ')}.
                We'll cover everything from setting up the development environment to deploying the application to production.
              </p>
              
              <p>
                By the end of this tutorial, you'll have a solid understanding of how to work with these technologies 
                and how to combine them to create a full-stack application. This knowledge will be valuable for 
                future projects and can be applied to various types of web applications.
              </p>
              
              <div style={{ 
                padding: '1.5rem', 
                backgroundColor: 'rgba(52, 152, 219, 0.05)', 
                borderLeft: '4px solid var(--primary-color)',
                borderRadius: '0 var(--border-radius) var(--border-radius) 0',
                marginBottom: '1.5rem'
              }}>
                <h4 style={{ marginBottom: '0.5rem' }}>What You'll Learn</h4>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: 0 }}>
                  {tutorial.techStack.map((tech, index) => (
                    <li key={index}>How to work with {tech}</li>
                  ))}
                  <li>Setting up a development environment</li>
                  <li>Connecting frontend and backend systems</li>
                  <li>Deploying your application to production</li>
                </ul>
              </div>
            </section>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-in" delay={0.4}>
            <section id="prerequisites">
              <h2>Prerequisites</h2>
              
              <p>
                Before starting this tutorial, make sure you have the following:
              </p>
              
              <ul>
                <li>Basic knowledge of JavaScript and HTML/CSS</li>
                <li>Node.js installed on your computer</li>
                <li>A code editor (VS Code, Sublime Text, etc.)</li>
                <li>A terminal or command prompt</li>
                {tutorial.category === 'Backend' && <li>Basic understanding of server-side concepts</li>}
                {tutorial.category === 'Database' && <li>Familiarity with database concepts</li>}
              </ul>
            </section>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-in" delay={0.5}>
            <section id="setup">
              <h2>Project Setup</h2>
              
              <p>
                Let's start by setting up our project. We'll create a new directory and initialize our project.
              </p>
              
              <div className="code-block">
                <div className="code-block__header">Terminal</div>
                <pre>
                  <code>
{`mkdir ${tutorial.slug}-project
cd ${tutorial.slug}-project
npm init -y`}
                  </code>
                </pre>
              </div>
              
              <p>
                Now, let's install the necessary dependencies for our project:
              </p>
              
              <CodeBlock 
                code={`npm install ${tutorial.techStack.map(tech => tech.toLowerCase().replace(/\.js$/, '')).join(' ')}`}
                language="bash"
                fileName="Terminal"
              />
              
              <p>
                With our dependencies installed, let's create the basic structure for our project:
              </p>
              
              <div className="code-block">
                <div className="code-block__header">Project Structure</div>
                <pre>
                  <code>
{`${tutorial.slug}-project/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md`}
                  </code>
                </pre>
              </div>
            </section>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-in" delay={0.6}>
            <section id="implementation">
              <h2>Implementation</h2>
              
              <p>
                Now let's start implementing our application. We'll begin with the core features and then add additional functionality.
              </p>
              
              <h3>Setting Up the Main App</h3>
              
              <p>
                Let's create our main application file:
              </p>
              
              <CodeBlock 
                code={`// This is a simplified example based on ${tutorial.title}
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './styles/main.css';

render(<App />, document.getElementById('root'));`}
                language="jsx"
                fileName="src/index.js"
              />
              
              <p>
                Now, let's create our App component:
              </p>
              
              <CodeBlock 
                code={`import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from our API
    fetch('/api/data')
      .then(response => response.json())
      .then(result => {
        setData(result);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        {loading ? (
          <p>Loading data...</p>
        ) : (
          <MainContent data={data} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;`}
                language="jsx"
                fileName="src/App.js"
              />
              
              <h3>Adding Backend Functionality</h3>
              
              <p>
                For the backend, we'll set up a simple server:
              </p>
              
              <CodeBlock 
                code={`const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/api/data', (req, res) => {
  // Sample data
  const data = [
    { id: 1, name: 'Item 1', description: 'This is item 1' },
    { id: 2, name: 'Item 2', description: 'This is item 2' },
    { id: 3, name: 'Item 3', description: 'This is item 3' },
  ];
  
  res.json(data);
});

// Start server
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`}
                language="javascript"
                fileName="server.js"
              />
              
              <p>
                This is just a starting point. The actual implementation would be more complex and tailored 
                to the specific requirements of your application.
              </p>
            </section>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-in" delay={0.7}>
            <section id="deployment">
              <h2>Deployment</h2>
              
              <p>
                Once your application is ready, you can deploy it to a hosting service. Here's how you might deploy 
                to a common platform:
              </p>
              
              <h3>Preparing for Production</h3>
              
              <p>
                First, build your application for production:
              </p>
              
              <CodeBlock 
                code={`npm run build`}
                language="bash"
                fileName="Terminal"
              />
              
              <p>
                This will create an optimized build of your application in the <code>build</code> or <code>dist</code> directory.
              </p>
              
              <h3>Deployment Options</h3>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div className="card" style={{ padding: '1.5rem' }}>
                  <h4>Heroku</h4>
                  <p>Easy deployment with Git integration.</p>
                  <CodeBlock 
                    code={`heroku create
git push heroku main`}
                    language="bash"
                    fileName="Terminal"
                    showLineNumbers={false}
                  />
                </div>
                
                <div className="card" style={{ padding: '1.5rem' }}>
                  <h4>Netlify</h4>
                  <p>Great for frontend applications.</p>
                  <CodeBlock 
                    code={`netlify deploy --prod`}
                    language="bash"
                    fileName="Terminal"
                    showLineNumbers={false}
                  />
                </div>
                
                <div className="card" style={{ padding: '1.5rem' }}>
                  <h4>Vercel</h4>
                  <p>Excellent for Next.js applications.</p>
                  <CodeBlock 
                    code={`vercel --prod`}
                    language="bash"
                    fileName="Terminal"
                    showLineNumbers={false}
                  />
                </div>
              </div>
              
              <p>
                Choose the platform that best suits your project requirements and follow their documentation 
                for detailed deployment instructions.
              </p>
            </section>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-in" delay={0.8}>
            <section id="next-steps">
              <h2>Next Steps</h2>
              
              <p>
                Congratulations! You've built and deployed a full stack application. Here are some next steps to consider:
              </p>
              
              <ul>
                <li>Add authentication to secure your application</li>
                <li>Implement more features based on user feedback</li>
                <li>Set up automated testing</li>
                <li>Optimize performance</li>
                <li>Add analytics to track user behavior</li>
              </ul>
              
              <p>
                Remember that building great software is an iterative process. Continue learning, experimenting, 
                and improving your application.
              </p>
              
              <div style={{ 
                padding: '1.5rem', 
                backgroundColor: 'var(--background-alt)', 
                borderRadius: 'var(--border-radius)',
                marginTop: '2rem'
              }}>
                <h3>Related Technologies</h3>
                {relatedTechStacks.length > 0 ? (
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '1rem',
                    marginTop: '1rem' 
                  }}>
                    {relatedTechStacks.map(tech => (
                      <Link 
                        key={tech.id} 
                        href={`/tech-stacks#${tech.id}`}
                        style={{
                          display: 'inline-block',
                          padding: '0.5rem 1rem',
                          backgroundColor: 'var(--background-color)',
                          borderRadius: 'var(--border-radius)',
                          boxShadow: 'var(--box-shadow)',
                          transition: 'transform 0.2s',
                        }}
                        className="zoom-in"
                      >
                        <Image src={tech.imageSrc} alt={tech.name} width={16} height={16} />
                        {tech.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p>No related technologies found.</p>
                )}
              </div>
            </section>
          </AnimateOnScroll>
        </div>
      </article>
    </PageLayout>
  )
} 