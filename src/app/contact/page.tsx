'use client'

import { useState } from 'react'
import PageLayout from '@/components/PageLayout'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      
      setSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <PageLayout>
      <div className="container" style={{ padding: '3rem 1rem', maxWidth: '900px' }}>
        <AnimateOnScroll animation="fade-in">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Contact Us</h1>
            <p style={{ fontSize: '1.1rem', opacity: 0.8, maxWidth: '700px', margin: '0 auto' }}>
              Have questions, suggestions, or feedback? We'd love to hear from you!
            </p>
          </div>
        </AnimateOnScroll>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <AnimateOnScroll animation="slide-in">
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ marginBottom: '1.5rem' }}>Get In Touch</h2>
              <p style={{ marginBottom: '2rem' }}>
                Whether you have a question about our tutorials, need help with a specific topic, or just want to say hello, we're here to help.
              </p>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>Connect With Us</h3>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    backgroundColor: 'rgba(52, 152, 219, 0.1)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginRight: '1rem'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.09494 3.90347 2.12781 3.62476 2.21643 3.36162C2.30506 3.09849 2.44763 2.85669 2.63476 2.65162C2.82189 2.44655 3.05021 2.28271 3.30421 2.17052C3.55821 2.05834 3.83276 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04206 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ margin: 0, fontWeight: 500 }}>Email Us At</p>
                    <a href="mailto:karlabalos04@gmail.com" style={{ color: 'var(--primary-color)' }}>
                      karlabalos04@gmail.com
                    </a>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    backgroundColor: 'rgba(52, 152, 219, 0.1)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginRight: '1rem'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 6H16M8 10H16M8 14H12" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ margin: 0, fontWeight: 500 }}>Follow Us</p>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
                      <a href="#" aria-label="GitHub" style={{ color: 'var(--text-color)', opacity: 0.8 }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                      <a href="#" aria-label="Twitter" style={{ color: 'var(--text-color)', opacity: 0.8 }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                      <a href="#" aria-label="YouTube" style={{ color: 'var(--text-color)', opacity: 0.8 }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'rgba(52, 152, 219, 0.05)', borderRadius: 'var(--border-radius)' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>Developer Info</h3>
                <p style={{ margin: '0.5rem 0' }}>
                  <strong>Developer:</strong> Dustin Karl D. Abalos
                </p>
                <p style={{ margin: '0.5rem 0' }}>
                  <strong>Occupation:</strong> Full Stack Web Developer
                </p>
              </div>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="slide-in" delay={0.2}>
            <div className="card" style={{ 
              padding: '2rem', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)', 
              borderRadius: '12px',
              background: 'linear-gradient(to bottom right, #ffffff, #f8f9fa)'
            }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <svg 
                    width="60" 
                    height="60" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: 'var(--secondary-color)', margin: '0 auto', marginBottom: '1rem' }}
                  >
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3 style={{ color: 'var(--secondary-color)' }}>Message Sent!</h3>
                  <p>
                    Thank you for your message. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary-color)' }}>Send a Message</h2>
                  
                  <div className="float-label" style={{ marginBottom: '1.5rem' }}>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder=" "
                      required
                      style={{ 
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        borderColor: 'rgba(0,0,0,0.1)'
                      }}
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                  
                  <div className="float-label" style={{ marginBottom: '1.5rem' }}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=" "
                      required
                      style={{ 
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        borderColor: 'rgba(0,0,0,0.1)'
                      }}
                    />
                    <label htmlFor="email">Email Address</label>
                  </div>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.9rem',
                        borderRadius: '8px',
                        border: '1px solid rgba(0,0,0,0.1)',
                        backgroundColor: 'white',
                        outline: 'none',
                        transition: 'all 0.3s ease',
                        fontSize: '1rem'
                      }}
                    >
                      <option value="" disabled>Select a Subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="tutorial">Tutorial Question</option>
                      <option value="suggestion">Suggestion</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="float-label" style={{ marginBottom: '2rem' }}>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder=" "
                      rows={5}
                      required
                      style={{ 
                        resize: 'vertical',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        borderColor: 'rgba(0,0,0,0.1)'
                      }}
                    ></textarea>
                    <label htmlFor="message">Your Message</label>
                  </div>
                  
                  {error && (
                    <div style={{ 
                      padding: '0.75rem 1rem', 
                      backgroundColor: 'rgba(231, 76, 60, 0.1)', 
                      color: 'var(--danger-color)', 
                      borderRadius: 'var(--border-radius)', 
                      marginBottom: '1.5rem' 
                    }}>
                      {error}
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    className="btn"
                    style={{ 
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '8px',
                      fontWeight: '600',
                      background: 'linear-gradient(to right, var(--primary-color), var(--secondary-color))',
                      transition: 'all 0.3s ease'
                    }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                        <span className="loader" style={{ width: '20px', height: '20px', marginRight: '0.5rem' }}></span>
                        Sending...
                      </span>
                    ) : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </PageLayout>
  )
} 