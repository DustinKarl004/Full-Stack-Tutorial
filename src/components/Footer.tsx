import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__logo">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: 'inline-block', marginRight: '8px', verticalAlign: 'middle' }}
              >
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#3498DB"/>
                <path d="M2 17L12 22L22 17" fill="#3498DB"/>
                <path d="M2 12L12 17L22 12" fill="#3498DB"/>
              </svg>
              FullStackTutorial
            </div>
            <p className="footer__description">
              Your comprehensive guide to modern web development with tutorials covering all aspects of building full-stack applications.
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="footer__title">Tutorials</h3>
            <ul className="footer__links">
              <li className="footer__links-item">
                <Link href="/tutorials/mern-stack" className="footer__links-link">MERN Stack</Link>
              </li>
              <li className="footer__links-item">
                <Link href="/tutorials/jamstack" className="footer__links-link">JAMstack</Link>
              </li>
              <li className="footer__links-item">
                <Link href="/tutorials/python-django" className="footer__links-link">Python Django</Link>
              </li>
              <li className="footer__links-item">
                <Link href="/tutorials/vue-node" className="footer__links-link">Vue + Node.js</Link>
              </li>
              <li className="footer__links-item">
                <Link href="/tutorials/aws-amplify" className="footer__links-link">AWS Amplify</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="footer__title">Technologies</h3>
            <ul className="footer__links">
              <li className="footer__links-item">
                <Link href="/tech-stacks?category=frontend" className="footer__links-link">Frontend</Link>
              </li>
              <li className="footer__links-item">
                <Link href="/tech-stacks?category=backend" className="footer__links-link">Backend</Link>
              </li>
              <li className="footer__links-item">
                <Link href="/tech-stacks?category=database" className="footer__links-link">Databases</Link>
              </li>
              <li className="footer__links-item">
                <Link href="/tech-stacks?category=devops" className="footer__links-link">DevOps</Link>
              </li>
              <li className="footer__links-item">
                <Link href="/tech-stacks?category=cloud" className="footer__links-link">Cloud Services</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="footer__title">Quick Links</h3>
            <ul className="footer__links">
              <li className="footer__links-item">
                <Link href="/about" className="footer__links-link">About Us</Link>
              </li>
              <li className="footer__links-item">
                <Link href="/contact" className="footer__links-link">Contact</Link>
              </li>
              <li className="footer__links-item">
                <Link href="/privacy-policy" className="footer__links-link">Privacy Policy</Link>
              </li>
              <li className="footer__links-item">
                <Link href="/terms-of-service" className="footer__links-link">Terms of Service</Link>
              </li>
              <li className="footer__links-item">
                <Link href="/faq" className="footer__links-link">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} FullStackTutorial. All rights reserved.</p>
          <p className="footer__developer">
            Developed by <span style={{ fontWeight: 'bold' }}>Dustin Karl D. Abalos</span> - A Full Stack Web Developer
          </p>
        </div>
      </div>
    </footer>
  )
} 