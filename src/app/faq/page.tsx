'use client'

import { useState, useEffect } from 'react'
import PageLayout from '@/components/PageLayout'
import AnimateOnScroll from '@/components/AnimateOnScroll'

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('general')
  
  const faqCategories = [
    { id: 'general', label: 'General' },
    { id: 'tutorials', label: 'Tutorials' },
    { id: 'account', label: 'Account' },
    { id: 'technical', label: 'Technical' }
  ]
  
  const faqItems: FAQItem[] = [
    {
      question: 'What is FullStackTutorial?',
      answer: 'FullStackTutorial is a comprehensive platform designed to help developers learn and master full-stack web development through structured tutorials, practical examples, and curated resources.',
      category: 'general'
    },
    {
      question: 'Are the tutorials suitable for beginners?',
      answer: 'Yes, our tutorials cater to different skill levels. We have beginner-friendly tutorials that start with the basics, as well as more advanced content for experienced developers looking to expand their skills.',
      category: 'tutorials'
    },
    {
      question: 'Do I need to create an account to access the tutorials?',
      answer: 'While some basic content is freely available without an account, creating a free account gives you access to the full range of tutorials, allows you to track your progress, and enables features like bookmarking and commenting.',
      category: 'account'
    },
    {
      question: 'How often is new content added?',
      answer: 'We regularly update our platform with new tutorials and resources. We aim to add new content at least twice a month, focusing on trending technologies and frameworks in the web development ecosystem.',
      category: 'general'
    },
    {
      question: 'Can I download tutorials for offline reading?',
      answer: 'Premium subscribers have the option to download tutorials in PDF format for offline reading. This feature is not available with free accounts.',
      category: 'account'
    },
    {
      question: 'Do you offer support if I get stuck with a tutorial?',
      answer: 'Yes, we have a community forum where you can ask questions and get help from other developers and our teaching staff. Premium subscribers also have access to priority support.',
      category: 'tutorials'
    },
    {
      question: 'What technologies do your tutorials cover?',
      answer: 'Our tutorials cover a wide range of technologies including React, Angular, Vue.js, Node.js, Express, Django, Flask, MongoDB, PostgreSQL, AWS, Docker, and many more. We continuously expand our coverage based on industry trends and user requests.',
      category: 'technical'
    },
    {
      question: 'How do I report a bug or issue with a tutorial?',
      answer: 'You can report bugs or issues through our feedback form, available at the bottom of each tutorial page. Alternatively, you can contact us directly via the Contact page.',
      category: 'general'
    },
    {
      question: 'Are there any prerequisites for following the tutorials?',
      answer: 'The prerequisites vary depending on the tutorial. Each tutorial clearly states the required prior knowledge at the beginning. For complete beginners, we recommend starting with our "Web Development Fundamentals" series.',
      category: 'tutorials'
    },
    {
      question: 'Do you offer certification upon completion of tutorials?',
      answer: 'Currently, we do not offer official certifications. However, premium users receive completion badges that can be shared on social media platforms and professional networks.',
      category: 'account'
    },
    {
      question: 'How can I contribute to FullStackTutorial?',
      answer: 'We welcome contributions from the community! If you\'re interested in writing tutorials, improving existing content, or helping in any other way, please reach out to us through the Contact page.',
      category: 'general'
    },
    {
      question: 'Are your tutorials project-based or concept-based?',
      answer: 'We offer both types of tutorials. Our concept-based tutorials focus on teaching specific technologies or concepts, while our project-based tutorials guide you through building complete applications, applying multiple technologies together.',
      category: 'tutorials'
    },
    {
      question: 'What should I do if I find the code in a tutorial doesn\'t work?',
      answer: 'First, check that you\'re using the same versions of libraries and tools as specified in the tutorial. If the issue persists, you can report it using the feedback form or ask for help in our community forum.',
      category: 'technical'
    }
  ]
  
  const filteredFAQs = faqItems.filter(item => item.category === selectedCategory);

  return (
    <PageLayout>
      <div className="container" style={{ padding: '3rem 1rem' }}>
        <AnimateOnScroll animation="fade-in">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Frequently Asked Questions</h1>
            <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>
              Find answers to common questions about FullStackTutorial's content, features, and services.
            </p>
          </div>
        </AnimateOnScroll>
        
        {/* Category filters */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          gap: '0.5rem',
          maxWidth: '800px',
          margin: '0 auto',
          marginBottom: '3rem'
        }}>
          {faqCategories.map(category => (
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
        
        {/* FAQ items */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {filteredFAQs.map((faq, index) => (
            <AnimateOnScroll key={index} animation="slide-up" delay={index * 100}>
              <div 
                style={{ 
                  marginBottom: '1.5rem', 
                  padding: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '8px'
                }}
              >
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 600 }}>
                  {faq.question}
                </h3>
                <p style={{ lineHeight: '1.7', fontSize: '1rem', opacity: 0.9 }}>{faq.answer}</p>
                <div 
                  style={{ 
                    marginTop: '1rem', 
                    fontSize: '0.8rem', 
                    opacity: 0.7,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    fontWeight: 500
                  }}
                >
                  Category: {faq.category.charAt(0).toUpperCase() + faq.category.slice(1)}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        
        {/* Contact section */}
        <div 
          style={{ 
            maxWidth: '800px', 
            margin: '3rem auto 0', 
            textAlign: 'center',
            padding: '2rem',
            background: 'rgba(52, 152, 219, 0.1)',
            borderRadius: '8px'
          }}
        >
          <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>
            Still have questions?
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            If you couldn't find the answer you're looking for, please reach out to our support team.
          </p>
          <a 
            href="/contact" 
            className="btn"
            style={{ padding: '0.75rem 2rem' }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </PageLayout>
  )
} 