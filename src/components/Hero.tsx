'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

type HeroProps = {
  title: string
  description: string
  ctaText: string
  ctaLink: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  imageSrc?: string
  imageAlt?: string
}

export default function Hero({
  title,
  description,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink
}: HeroProps) {
  const shapesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!shapesRef.current) return

      const shapes = shapesRef.current.querySelectorAll('.shape')
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight

      shapes.forEach((shape, index) => {
        const speed = index + 1
        const htmlShape = shape as HTMLElement
        htmlShape.style.transform = `translate(${x * 50 / speed}px, ${y * 50 / speed}px)`
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__content animate-slide-in" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h1 className="hero__title">{title}</h1>
          <p className="hero__description">{description}</p>
          
          <div className="hero__buttons">
            <Link href={ctaLink} className="btn">{ctaText}</Link>
            {secondaryCtaText && secondaryCtaLink && (
              <Link href={secondaryCtaLink} className="btn btn-outline">{secondaryCtaText}</Link>
            )}
          </div>
        </div>
      </div>
      
      <div className="hero__shapes" ref={shapesRef}>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
    </section>
  )
} 