import PageLayout from '@/components/PageLayout'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="container" style={{ padding: '3rem 1rem', maxWidth: '900px' }}>
        <AnimateOnScroll animation="fade-in">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>About Full Stack Tutorial</h1>
            <p style={{ fontSize: '1.1rem', opacity: 0.8, maxWidth: '700px', margin: '0 auto' }}>
              Your comprehensive resource for learning modern web development from start to finish.
            </p>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll animation="slide-up">
          <div 
            style={{ 
              padding: '2rem', 
              borderRadius: 'var(--border-radius)',
              backgroundColor: 'var(--background-alt)',
              marginBottom: '3rem',
              boxShadow: 'var(--box-shadow)'
            }}
          >
            <h2 style={{ marginBottom: '1.5rem' }}>Our Mission</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              At Full Stack Tutorial, we aim to simplify the complex world of web development by providing clear, comprehensive, and practical tutorials for developers at all levels.
            </p>
            <p>
              We believe in learning by doing, which is why our tutorials focus on building real-world applications with modern technologies. From frontend frameworks to backend services, databases, and deployment strategies, we cover the entire web development process.
            </p>
          </div>
        </AnimateOnScroll>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
          <AnimateOnScroll animation="slide-in" delay={0.1}>
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>What We Offer</h3>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '0' }}>
                <li style={{ marginBottom: '0.5rem' }}>Step-by-step comprehensive tutorials</li>
                <li style={{ marginBottom: '0.5rem' }}>Modern tech stack combinations</li>
                <li style={{ marginBottom: '0.5rem' }}>Real-world project examples</li>
                <li style={{ marginBottom: '0.5rem' }}>Best practices and code patterns</li>
                <li style={{ marginBottom: '0.5rem' }}>Deployment and production guidance</li>
                <li>Automation and workflow optimization</li>
              </ul>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="slide-in" delay={0.2}>
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>Who It's For</h3>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '0' }}>
                <li style={{ marginBottom: '0.5rem' }}>Beginners looking to start a coding journey</li>
                <li style={{ marginBottom: '0.5rem' }}>Frontend developers wanting to learn backend</li>
                <li style={{ marginBottom: '0.5rem' }}>Backend developers aiming to improve UI skills</li>
                <li style={{ marginBottom: '0.5rem' }}>Students and career changers</li>
                <li style={{ marginBottom: '0.5rem' }}>Professionals wanting to update their skills</li>
                <li>Anyone interested in web development</li>
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
        
        <AnimateOnScroll animation="fade-in" delay={0.3}>
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Our Approach</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We approach teaching with a few core principles in mind:
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div style={{ padding: '1.5rem', borderRadius: 'var(--border-radius)', backgroundColor: 'var(--background-color)', boxShadow: 'var(--box-shadow)' }}>
                <h4 style={{ marginBottom: '0.75rem', color: 'var(--primary-color)' }}>Practical Learning</h4>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>
                  We focus on building real projects that you can use in your portfolio, not just theoretical concepts.
                </p>
              </div>
              
              <div style={{ padding: '1.5rem', borderRadius: 'var(--border-radius)', backgroundColor: 'var(--background-color)', boxShadow: 'var(--box-shadow)' }}>
                <h4 style={{ marginBottom: '0.75rem', color: 'var(--primary-color)' }}>Step by Step</h4>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>
                  We break down complex topics into digestible, logical steps that build upon each other.
                </p>
              </div>
              
              <div style={{ padding: '1.5rem', borderRadius: 'var(--border-radius)', backgroundColor: 'var(--background-color)', boxShadow: 'var(--box-shadow)' }}>
                <h4 style={{ marginBottom: '0.75rem', color: 'var(--primary-color)' }}>Modern Technologies</h4>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>
                  We stay up-to-date with the latest frameworks, libraries, and best practices in the industry.
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll animation="fade-in" delay={0.4}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Start Your Learning Journey</h2>
            <p style={{ marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Whether you're just starting out or looking to expand your skill set, our tutorials will help you build a strong foundation in full stack development.
            </p>
            <a href="/tutorials" className="btn">Browse Tutorials</a>
          </div>
        </AnimateOnScroll>
      </div>
    </PageLayout>
  )
} 