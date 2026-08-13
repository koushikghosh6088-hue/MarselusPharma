import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="page-content atrimus-white-bg">
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="separator">/</span>
            <span className="current">Privacy Policy</span>
          </div>
          <h1 className="page-hero__title">Privacy Policy</h1>
          <p className="page-hero__subtitle">How we collect, use, and protect your personal information.</p>
        </div>
      </section>

      <section className="section">
        <div className="container container--lg">
          <p><strong>Last updated:</strong> January 2024</p>
          <h2 style={{ marginTop: "var(--space-8)", marginBottom: "var(--space-4)" }}>1. Information We Collect</h2>
          <p>When you visit our website or submit forms, we may collect: your name, email address, phone number, and any messages you provide through our contact or careers forms. We also collect standard website analytics data such as IP address, browser type, and pages visited.</p>
          
          <h2 style={{ marginTop: "var(--space-8)", marginBottom: "var(--space-4)" }}>2. How We Use Your Information</h2>
          <p>We use the information collected to respond to your enquiries, process job applications, improve our website, and comply with legal obligations. We do not sell or share your personal information with third parties for marketing purposes.</p>
          
          <h2 style={{ marginTop: "var(--space-8)", marginBottom: "var(--space-4)" }}>3. Data Security</h2>
          <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction.</p>
          
          <h2 style={{ marginTop: "var(--space-8)", marginBottom: "var(--space-4)" }}>4. Cookies</h2>
          <p>Our website may use cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.</p>
          
          <h2 style={{ marginTop: "var(--space-8)", marginBottom: "var(--space-4)" }}>5. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal data. To exercise these rights, contact us at <a href="mailto:info@marseluspharma.com">info@marseluspharma.com</a>.</p>
          
          <h2 style={{ marginTop: "var(--space-8)", marginBottom: "var(--space-4)" }}>6. Contact Us</h2>
          <p>For any privacy-related questions, please contact Marselus Pharmaceuticals at <a href="mailto:info@marseluspharma.com">info@marseluspharma.com</a> or write to our corporate office in Kolkata.</p>
          
          <p style={{ marginTop: "var(--space-8)", fontSize: "var(--text-sm)", color: "var(--color-gray-400)" }}>
            <em>This privacy policy is a template and should be reviewed by legal counsel before publication.</em>
          </p>
        </div>
      </section>
    </main>
  );
}
