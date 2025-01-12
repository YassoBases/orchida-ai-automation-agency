const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-white">Terms of Service</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Agreement to Terms</h2>
            <p className="text-white">By accessing our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Use License</h2>
            <p className="mb-4 text-white">Permission is granted to temporarily access our services for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc pl-6 space-y-2 text-white">
              <li>Modify or copy our materials</li>
              <li>Use materials for commercial purposes</li>
              <li>Remove any copyright or proprietary notations</li>
              <li>Transfer the materials to another person</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Disclaimer</h2>
            <p className="text-white">Our services are provided "as is". We make no warranties, expressed or implied, and hereby disclaim all warranties, including without limitation implied warranties or conditions of merchantability.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Limitations</h2>
            <p className="text-white">We shall not be held liable for any damages arising out of the use or inability to use our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Revisions</h2>
            <p className="text-white">We may revise these terms of service at any time without notice. By using our services you agree to be bound by the current version of these terms of service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Governing Law</h2>
            <p className="text-white">These terms and conditions are governed by and construed in accordance with applicable laws and you irrevocably submit to the exclusive jurisdiction of the courts.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;