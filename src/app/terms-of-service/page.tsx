import PageLayout from '@/components/PageLayout'

export default function TermsOfServicePage() {
  return (
    <PageLayout>
      <div className="container" style={{ padding: '3rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Terms of Service</h1>
        
        <div style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>1. Introduction</h2>
            <p style={{ marginBottom: '1rem' }}>
              Welcome to FullStackTutorial. These Terms of Service ("Terms") govern your access to and use of 
              the FullStackTutorial website, services, and applications (collectively, the "Services"). By accessing or using 
              our Services, you agree to be bound by these Terms.
            </p>
            <p>
              Please read these Terms carefully. If you do not agree with these Terms, you may not access or use our Services.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>2. Using Our Services</h2>
            <p style={{ marginBottom: '1rem' }}>
              You must follow any policies made available to you within the Services. You may use our Services only as 
              permitted by law. We may suspend or stop providing our Services to you if you do not comply with our terms or 
              policies or if we are investigating suspected misconduct.
            </p>
            <p>
              Using our Services does not give you ownership of any intellectual property rights in our Services or the 
              content you access. You may not use content from our Services unless you obtain permission from its owner 
              or are otherwise permitted by law.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>3. Account Registration</h2>
            <p style={{ marginBottom: '1rem' }}>
              To access certain features of our Services, you may be required to register for an account. When you register, 
              you agree to provide accurate, current, and complete information about yourself.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              You are responsible for safeguarding the password that you use to access our Services and for any activities or 
              actions under your account. We encourage you to use a strong password (a combination of upper and lower case letters, 
              numbers, and symbols) with your account.
            </p>
            <p>
              You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of 
              any breach of security or unauthorized use of your account.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>4. User Content</h2>
            <p style={{ marginBottom: '1rem' }}>
              Our Services may allow you to post, submit, or store content. You retain ownership of any intellectual property 
              rights that you hold in that content. When you upload, submit, store, send, or receive content through our Services, 
              you give us (and those we work with) a worldwide license to use, host, store, reproduce, modify, create derivative 
              works, communicate, publish, publicly perform, publicly display, and distribute such content.
            </p>
            <p>
              You are responsible for the content you post. This means you assume all risks related to it, including claims of 
              intellectual property infringement, defamation, or any other legal rights.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>5. Prohibited Activities</h2>
            <p style={{ marginBottom: '1rem' }}>
              You agree not to engage in any of the following prohibited activities:
            </p>
            <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
              <li style={{ marginBottom: '0.5rem' }}>Violating any laws or regulations</li>
              <li style={{ marginBottom: '0.5rem' }}>Infringing on the intellectual property rights of others</li>
              <li style={{ marginBottom: '0.5rem' }}>Submitting false or misleading information</li>
              <li style={{ marginBottom: '0.5rem' }}>Impersonating any person or entity</li>
              <li style={{ marginBottom: '0.5rem' }}>Interfering with or disrupting the Services</li>
              <li>Using the Services to transmit any malware or viruses</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>6. Termination</h2>
            <p>
              We may terminate or suspend your access to all or part of our Services, with or without notice, for any conduct 
              that we, in our sole discretion, believe violates these Terms or is harmful to other users of our Services, us, 
              or third parties, or for any other reason.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>7. Disclaimer of Warranties</h2>
            <p>
              Our Services are provided "as is" without any warranties, expressed or implied. We do not warrant that our Services 
              will be uninterrupted or error-free, that defects will be corrected, or that our Services or the servers that make 
              them available are free of viruses or other harmful components.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, FullStackTutorial shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or 
              any loss of data, use, goodwill, or other intangible losses resulting from your access to or use of or inability to 
              access or use the Services.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>9. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. If we make changes, we will provide notice through our Services or by other 
              means. Your continued use of our Services after the changes take effect constitutes your acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>10. Contact Us</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              If you have any questions about these Terms, please contact us:
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