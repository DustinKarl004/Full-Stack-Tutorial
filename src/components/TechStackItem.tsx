'use client'

import { useState } from 'react'
import Image from 'next/image'

type TechStackItemProps = {
  name: string
  description: string
  imageSrc: string
  logoText?: string
  bgColor?: string
}

export default function TechStackItem({ 
  name, 
  description, 
  imageSrc, 
  logoText,
  bgColor = '#3498db'
}: TechStackItemProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)

  // Fallback icon when image fails to load
  const renderFallbackIcon = () => {
    return (
      <div 
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '10px',
          backgroundColor: bgColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#ffffff',
          margin: '0 auto'
        }}
      >
        {logoText || name.charAt(0)}
      </div>
    );
  };

  return (
    <div 
      className="tech-stack__item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        style={{ 
          transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
          transition: 'transform 0.3s ease',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {!imageError ? (
          <Image 
            src={imageSrc} 
            alt={`${name} logo`} 
            width={80} 
            height={80}
            onError={() => setImageError(true)}
            style={{ objectFit: 'contain' }}
          />
        ) : renderFallbackIcon()}
      </div>
      
      <h3 className="tech-stack__item-title">{name}</h3>
      <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{description}</p>
    </div>
  )
}