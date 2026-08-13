import Link from "next/link";

export default function Terms() {
  return (
    <main className="page-content atrimus-white-bg">
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="separator">/</span>
            <span className="current">Terms &amp; Disclaimer</span>
          </div>
          <h1 className="page-hero__title">Terms &amp; Medical Disclaimer</h1>
        </div>
      </section>

      <section className="section">
        <div className="container container--lg">
          <h2 style={{ marginBottom: "var(--space-4)" }}>Terms of Use</h2>
          <p>By accessing and using this website, you agree to be bound by these terms and conditions. Marselus Pharmaceuticals reserves the right to modify these terms at any time. Your continued use of the website constitutes acceptance of any changes.</p>

          <h2 style={{ marginTop: "var(--space-8)", marginBottom: "var(--space-4)" }}>Medical Disclaimer</h2>
          <div className="disclaimer" style={{ marginTop: "var(--space-4)" }}>
            <div className="disclaimer__icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              Important Medical Disclaimer
            </div>
            <p>The information provided on this website is intended for healthcare professionals and for educational purposes only. It is not intended as a substitute for professional medical advice, diagnosis, or treatment.</p>
            <p style={{ marginTop: "var(--space-3)" }}>Product information, including compositions, indications, dosages, and safety data, is provided for informational purposes and may be subject to change. Always refer to the approved prescribing information and consult with a qualified healthcare professional before making any treatment decisions.</p>
            <p style={{ marginTop: "var(--space-3)" }}>Marselus Pharmaceuticals does not recommend or endorse any specific treatment, procedure, or product. The use of any information provided on this website is solely at your own risk.</p>
          </div>

          <h2 style={{ marginTop: "var(--space-8)", marginBottom: "var(--space-4)" }}>Intellectual Property</h2>
          <p>All content on this website, including text, images, logos, and product names (ARTEMES, SARANYA, IMMUNOMARS, UV 60K), is the intellectual property of Marselus Pharmaceuticals and is protected by applicable copyright and trademark laws.</p>

          <h2 style={{ marginTop: "var(--space-8)", marginBottom: "var(--space-4)" }}>Limitation of Liability</h2>
          <p>Marselus Pharmaceuticals shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use this website or its content.</p>

          <h2 style={{ marginTop: "var(--space-8)", marginBottom: "var(--space-4)" }}>Governing Law</h2>
          <p>These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Kolkata, West Bengal.</p>

        </div>
      </section>
    </main>
  );
}
