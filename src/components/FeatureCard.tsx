'use client'

import { useState } from 'react'

type FeatureCardProps = {
  icon: React.ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="features__card card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderTop: isHovered ? '3px solid var(--primary-color)' : '3px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div 
        className="features__card-icon"
        style={{ 
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.3s ease'
        }}
      >
        {icon}
      </div>
      
      <h3 className="features__card-title">{title}</h3>
      
      <p>{description}</p>
    </div>
  )
} 