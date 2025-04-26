'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Tutorials', path: '/tutorials' },
  { name: 'Tech Stacks', path: '/tech-stacks' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isMenuOpen && !target.closest('.navbar__menu') && !target.closest('.navbar__mobile-toggle')) {
        setIsMenuOpen(false)
      }
    }
    
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <nav className={classNames('navbar', { 'scrolled': scrolled })}>
      <div className="container navbar__container">
        <Link href="/" className="navbar__logo">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#3498DB"/>
            <path d="M2 17L12 22L22 17" fill="#3498DB"/>
            <path d="M2 12L12 17L22 12" fill="#3498DB"/>
          </svg>
          FullStackTutorial
        </Link>
        
        <ul className={classNames('navbar__menu', { 'active': isMenuOpen })}>
          {navLinks.map((link) => (
            <li key={link.path} className="navbar__item">
              <Link 
                href={link.path}
                className={classNames('navbar__link', {
                  'active': pathname === link.path
                })}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        
        <button 
          className="navbar__mobile-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </div>
    </nav>
  )
} 