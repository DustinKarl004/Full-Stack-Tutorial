import PageLayout from '@/components/PageLayout'

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <div className="container" style={{ padding: '3rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Privacy Policy</h1>
        
        <div style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Introduction</h2>
            <p style={{ marginBottom: '1rem' }}>
              FullStackTutorial ("we," "our," or "us") respects your privacy and is committed to protecting 
              your personal data. This Privacy Policy will inform you how we look after your personal data when 
              you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
            <p>
              This Privacy Policy applies to information we collect when you use our website, mobile applications,
              and other online products and services (collectively, the "Services").
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Information We Collect</h2>
            <p style={{ marginBottom: '1rem' }}>
              We collect several types of information from and about users of our Services, including:
            </p>
            <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Personal Information:</strong> Name, email address, and other contact details when you register
                for an account or subscribe to our newsletter.
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Usage Data:</strong> Information about how you access and use our Services.
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Device Information:</strong> Information about your device and internet connection, including
                your IP address, browser type, and operating system.
              </li>
              <li>
                <strong>Cookies and Similar Technologies:</strong> Information collected through cookies and similar technologies.
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>How We Use Your Information</h2>
            <p style={{ marginBottom: '1rem' }}>
              We may use the information we collect for various purposes, including to:
            </p>
            <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
              <li style={{ marginBottom: '0.5rem' }}>Provide and maintain our Services</li>
              <li style={{ marginBottom: '0.5rem' }}>Improve and personalize your experience</li>
              <li style={{ marginBottom: '0.5rem' }}>Communicate with you about our Services</li>
              <li style={{ marginBottom: '0.5rem' }}>Monitor and analyze usage patterns</li>
              <li>Protect against unauthorized access and legal liability</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Sharing of Information</h2>
            <p style={{ marginBottom: '1rem' }}>
              We may share personal information as follows:
            </p>
            <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>With Service Providers:</strong> We may share your information with third-party vendors who provide services on our behalf.
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>For Legal Reasons:</strong> We may share information if we believe it's necessary to comply with a legal obligation or protect our rights.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may share information with your consent or at your direction.
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Your Rights</h2>
            <p style={{ marginBottom: '1rem' }}>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
              <li style={{ marginBottom: '0.5rem' }}>The right to access personal information we hold about you</li>
              <li style={{ marginBottom: '0.5rem' }}>The right to request correction of inaccurate information</li>
              <li style={{ marginBottom: '0.5rem' }}>The right to request deletion of your information</li>
              <li style={{ marginBottom: '0.5rem' }}>The right to restrict processing of your information</li>
              <li>The right to data portability</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Security</h2>
            <p>
              We take reasonable measures to help protect personal information from loss, theft, misuse, and unauthorized access.
              However, no security measures are 100% secure, and we cannot guarantee the security of your information.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Changes to this Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. If we make material changes, we will provide notice 
              through our Services or by other means. We encourage you to review the Privacy Policy whenever you access 
              our Services to stay informed about our information practices.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Contact Us</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div style={{ textAlign: 'center' }}>
              <a 
                href="/contact" 
                className="btn"
                style={{ padding: '0.75rem 2rem' }}
              >
                Contact Us
              </a>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  )
} 