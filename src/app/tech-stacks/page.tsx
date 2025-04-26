'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import PageLayout from '@/components/PageLayout'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import TechStackItem from '@/components/TechStackItem'
import { techStacks, type TechStackType } from '@/data/techStacks'

export default function TechStacksPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')
  
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam)
    }
  }, [categoryParam])
  
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'devops', label: 'DevOps' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'tool', label: 'Tools' }
  ]
  
  // Function to filter tech stacks based on search query and selected category
  const filteredTechStacks = techStacks.filter((tech) => {
    const matchesSearch = 
      tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCategory = selectedCategory === 'all' || tech.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  return (
    <PageLayout>
      <div className="container" style={{ padding: '3rem 1rem' }}>
        <AnimateOnScroll animation="fade-in">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Tech Stacks</h1>
            <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>
              Explore the various technologies, frameworks, and tools used in modern web development.
            </p>
          </div>
        </AnimateOnScroll>
        
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1.5rem',
          maxWidth: '1000px',
          margin: '0 auto',
          marginBottom: '3rem'
        }}>
          {/* Search bar */}
          <div>
            <div className="float-label" style={{ maxWidth: '100%' }}>
              <input
                type="text"
                id="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder=" "
                style={{ padding: '0.9rem 1rem' }}
              />
              <label htmlFor="search">Search Technologies...</label>
              <div style={{ 
                position: 'absolute', 
                right: '1rem', 
                top: '50%', 
                transform: 'translateY(-50%)', 
                opacity: 0.5 
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Category filters */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? 'btn btn-small' : 'btn btn-outline btn-small'}
                style={{ 
                  padding: '0.4rem 1rem',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  borderRadius: '50px',
                }}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        {filteredTechStacks.length > 0 ? (
          <div className="tech-stack__grid">
            {filteredTechStacks.map((tech) => (
              <AnimateOnScroll key={tech.id} animation="zoom-in">
                <TechStackItem
                  name={tech.name}
                  description={tech.description}
                  imageSrc={`/images/${tech.id}.svg`}
                  logoText={tech.name.charAt(0)}
                  bgColor={getBgColorForTech(tech.id)}
                />
              </AnimateOnScroll>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem', opacity: 0.7 }}>
            <svg 
              width="60" 
              height="60" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ margin: '0 auto', marginBottom: '1rem', opacity: 0.5 }}
            >
              <path d="M10 21H14C18.4183 21 22 17.4183 22 13C22 8.58172 18.4183 5 14 5H10C5.58172 5 2 8.58172 2 13C2 17.4183 5.58172 21 10 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5V21M12 13H22M12 13H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3>No technologies found</h3>
            <p>Try adjusting your search or filters to find what you're looking for.</p>
          </div>
        )}
      </div>
    </PageLayout>
  )
}

// Helper function to get background color for tech stacks
function getBgColorForTech(techId: string): string {
  const colors: Record<string, string> = {
    'react': '#61DAFB',
    'vue': '#42B883',
    'angular': '#DD0031',
    'next': '#000000',
    'node': '#339933',
    'django': '#092E20',
    'flask': '#000000',
    'express': '#000000',
    'mongodb': '#47A248',
    'postgresql': '#336791',
    'graphql': '#E535AB',
    'docker': '#2496ED',
    'kubernetes': '#326CE5',
    'aws': '#FF9900',
    'python': '#3776AB',
    'typescript': '#3178C6'
  };
  
  return colors[techId] || '#3498db';
} 