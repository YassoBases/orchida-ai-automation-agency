const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Information We Collect</h2>
            <p className="mb-4 text-white">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-2 text-white">
              <li>Name and contact information</li>
              <li>Company details</li>
              <li>Communication preferences</li>
              <li>Inquiry details and messages</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. How We Use Your Information</h2>
            <p className="mb-4 text-white">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 text-white">
              <li>Respond to your inquiries</li>
              <li>Provide our services</li>
              <li>Send you important updates</li>
              <li>Improve our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Information Sharing</h2>
            <p className="text-white">We do not sell or share your personal information with third parties except as necessary to provide our services or as required by law.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Data Security</h2>
            <p className="text-white">We implement appropriate technical and organizational measures to protect your personal information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Your Rights</h2>
            <p className="mb-4 text-white">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-white">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Contact Us</h2>
            <p className="text-white">If you have any questions about this Privacy Policy, please contact us.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;