'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

type AnimationType = 'fade-in' | 'slide-up' | 'slide-in' | 'zoom-in' | 'scale' | 'flip' | 'rotate'

type AnimateOnScrollProps = {
  children: React.ReactNode
  animation?: AnimationType
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
  className?: string
}

export default function AnimateOnScroll({
  children,
  animation = 'fade-in',
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  once = true,
  className = ''
}: AnimateOnScrollProps) {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold,
  })
  
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    } else if (!once) {
      setIsVisible(false)
    }
  }, [inView, once])
  
  const getAnimationStyle = () => {
    const baseStyle = {
      opacity: 0,
      transform: 'translateY(0)',
      transition: `all ${duration}s ease ${delay}s`,
    }
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-in':
          return { ...baseStyle, opacity: 0 }
        case 'slide-up':
          return { ...baseStyle, transform: 'translateY(50px)' }
        case 'slide-in':
          return { ...baseStyle, transform: 'translateX(-50px)' }
        case 'zoom-in':
          return { ...baseStyle, transform: 'scale(0.8)' }
        case 'scale':
          return { ...baseStyle, transform: 'scale(0)' }
        case 'flip':
          return { ...baseStyle, transform: 'perspective(400px) rotateY(90deg)' }
        case 'rotate':
          return { ...baseStyle, transform: 'rotate(-45deg)' }
        default:
          return baseStyle
      }
    }
    
    return {
      opacity: 1,
      transform: 'translateY(0) translateX(0) scale(1) rotate(0deg)',
      transition: `all ${duration}s ease ${delay}s`,
    }
  }
  
  return (
    <div
      ref={ref}
      className={className}
      style={getAnimationStyle()}
    >
      {children}
    </div>
  )
} 