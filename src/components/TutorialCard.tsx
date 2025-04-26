'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

type TutorialCardProps = {
  title: string
  description: string
  slug: string
  imageSrc: string
  category: string
  level: 'beginner' | 'intermediate' | 'advanced'
  duration: string
}

export default function TutorialCard({ 
  title, 
  description, 
  slug, 
  imageSrc, 
  category, 
  level, 
  duration 
}: TutorialCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  const getLevelColor = (level: string) => {
    switch(level) {
      case 'beginner':
        return 'var(--secondary-color)'
      case 'intermediate':
        return 'var(--accent-color)'
      case 'advanced':
        return 'var(--danger-color)'
      default:
        return 'var(--primary-color)'
    }
  }

  return (
    <article 
      className={`tutorial-section__card card ${isHovered ? 'shine' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ overflow: 'hidden' }}>
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={200}
          className="tutorial-section__card-image"
          style={{ 
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.5s ease'
          }}
        />
      </div>
      
      <div className="tutorial-section__card-content">
        <div 
          style={{ 
            display: 'inline-block', 
            padding: '0.25rem 0.75rem', 
            backgroundColor: 'rgba(52, 152, 219, 0.1)', 
            borderRadius: '4px', 
            color: 'var(--primary-color)',
            fontSize: '0.8rem',
            marginBottom: '0.75rem'
          }}
        >
          {category}
        </div>
        
        <h3 className="tutorial-section__card-title">{title}</h3>
        
        <div className="tutorial-section__card-meta">
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {duration}
          </span>
          
          <span style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.25rem',
            color: getLevelColor(level)
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 12V22H4V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 7H22M12 22V7M7 7V3H17V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </span>
        </div>
        
        <p className="tutorial-section__card-description">{description}</p>
        
        <Link href={`/tutorials/${slug}`} className="btn btn-outline">
          Read Tutorial
        </Link>
      </div>
    </article>
  )
} 