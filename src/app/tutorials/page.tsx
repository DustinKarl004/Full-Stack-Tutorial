'use client'

import { useState } from 'react'
import PageLayout from '@/components/PageLayout'
import TutorialCard from '@/components/TutorialCard'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { tutorials, TutorialType } from '@/data/tutorials'

export default function TutorialsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedLevel, setSelectedLevel] = useState<string>('all')
  
  // Get unique categories
  const categories = ['all', ...Array.from(new Set(tutorials.map(tutorial => tutorial.category)))]
  
  // Filter tutorials based on search and filters
  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesSearch = 
      tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutorial.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutorial.techStack.some(tech => 
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      )
    
    const matchesCategory = selectedCategory === 'all' || tutorial.category === selectedCategory
    const matchesLevel = selectedLevel === 'all' || tutorial.level === selectedLevel
    
    return matchesSearch && matchesCategory && matchesLevel
  })

  return (
    <PageLayout>
      <div className="container" style={{ padding: '3rem 1rem' }}>
        <AnimateOnScroll animation="fade-in">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>All Tutorials</h1>
            <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>
              Browse our comprehensive collection of full stack development tutorials covering various tech stacks and skill levels.
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
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="Search tutorials by title, description, or tech stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem',
                paddingLeft: '3rem',
                borderRadius: 'var(--border-radius)',
                border: '1px solid var(--border-color)',
                fontSize: '1rem',
                outline: 'none',
                transition: 'all 0.3s ease',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--primary-color)'
                e.target.style.boxShadow = '0 0 0 3px rgba(52, 152, 219, 0.1)'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--border-color)'
                e.target.style.boxShadow = 'none'
              }}
            />
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                opacity: 0.5
              }}
            >
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '1rem',
            justifyContent: 'center'
          }}>
            <div style={{ marginRight: '1rem' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: '500', marginRight: '0.5rem' }}>
                Category:
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--border-radius)',
                  border: '1px solid var(--border-color)',
                  background: 'white',
                  cursor: 'pointer'
                }}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label style={{ fontSize: '0.9rem', fontWeight: '500', marginRight: '0.5rem' }}>
                Level:
              </label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--border-radius)',
                  border: '1px solid var(--border-color)',
                  background: 'white',
                  cursor: 'pointer'
                }}
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>
        
        {filteredTutorials.length > 0 ? (
          <div className="tutorial-section__grid">
            {filteredTutorials.map((tutorial) => (
              <AnimateOnScroll key={tutorial.id} animation="fade-in">
                <TutorialCard
                  title={tutorial.title}
                  description={tutorial.description}
                  slug={tutorial.slug}
                  imageSrc={`/images/${tutorial.id}-thumbnail.svg`}
                  category={tutorial.category}
                  level={tutorial.level}
                  duration={tutorial.duration}
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
            <h3>No tutorials found</h3>
            <p>Try adjusting your search or filters to find what you're looking for.</p>
          </div>
        )}
      </div>
    </PageLayout>
  )
} 