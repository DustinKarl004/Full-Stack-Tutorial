import Link from 'next/link'
import PageLayout from '@/components/PageLayout'

export default function TutorialNotFound() {
  return (
    <PageLayout>
      <div className="container" style={{ padding: '5rem 1rem', textAlign: 'center' }}>
        <svg 
          width="100" 
          height="100" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ margin: '0 auto', marginBottom: '2rem', opacity: 0.6 }}
        >
          <path d="M12 9V11M12 15H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0378 2.66667 10.268 4L3.33978 16C2.56998 17.3333 3.53223 19 5.07183 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Tutorial Not Found</h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.8, maxWidth: '500px', margin: '0 auto 2rem' }}>
          We couldn't find the tutorial you're looking for. It may have been moved or doesn't exist.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/tutorials" className="btn">Browse All Tutorials</Link>
          <Link href="/" className="btn btn-outline">Go Home</Link>
        </div>
      </div>
    </PageLayout>
  )
} 