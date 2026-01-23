
import React from 'react';

const TermsOfUse: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-center">
            Terms of Use
          </h1>
          <p className="text-center mt-4 opacity-90">
            Last updated: January 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
            <p className="mb-6">
              By accessing and using this website, you accept and agree to be bound by the terms 
              and provisions of this agreement. If you do not agree to abide by these terms, 
              please do not use this website.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">2. Website Purpose</h2>
            <p className="mb-6">
              This website has been designed only for the purposes of dissemination of basic 
              information on Sneha Jain & Associates. The information provided on this website 
              is for general informational purposes only and should not be construed as legal advice.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">3. No Attorney-Client Relationship</h2>
            <p className="mb-6">
              The use of this website or any communication through this website does not create 
              an attorney-client relationship between you and Sneha Jain & Associates. No 
              attorney-client relationship is formed until a formal engagement letter is signed 
              by both parties.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">4. Disclaimer of Legal Advice</h2>
            <p className="mb-6">
              The information contained in this website is provided for informational purposes 
              only and should not be construed as legal advice on any subject matter. Visitors 
              should not act or refrain from acting on the basis of any content included in 
              this website without seeking appropriate legal or other professional advice.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">5. Accuracy of Information</h2>
            <p className="mb-6">
              While we strive to keep the information on this website accurate and up-to-date, 
              we make no representations or warranties of any kind, express or implied, about 
              the completeness, accuracy, reliability, suitability, or availability of the 
              information contained on the website.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">6. Bar Council Guidelines</h2>
            <p className="mb-6">
              This website is not intended to be a source of advertising or solicitation. The 
              contents of this website are in accordance with the Bar Council of India guidelines 
              for websites of advocates. We do not wish to represent that we are better than 
              any other firm.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">7. Intellectual Property</h2>
            <p className="mb-6">
              All content on this website, including text, graphics, logos, and images, is the 
              property of Sneha Jain & Associates and is protected by applicable copyright and 
              trademark laws. Unauthorized use of any content may violate copyright, trademark, 
              and other laws.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">8. Third-Party Links</h2>
            <p className="mb-6">
              This website may contain links to third-party websites. These links are provided 
              for your convenience only. We have no control over the content of these websites 
              and accept no responsibility for them or for any loss or damage that may arise 
              from your use of them.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">9. Limitation of Liability</h2>
            <p className="mb-6">
              Sneha Jain & Associates shall not be liable for any direct, indirect, incidental, 
              special, consequential, or punitive damages arising out of your access to, or use 
              of, this website.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">10. Governing Law</h2>
            <p className="mb-6">
              These terms and conditions are governed by and construed in accordance with the 
              laws of India, and any disputes relating to these terms and conditions will be 
              subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">11. Changes to Terms</h2>
            <p className="mb-6">
              We reserve the right to modify these terms at any time. Changes will be effective 
              immediately upon posting to the website. Your continued use of the website after 
              any changes indicates your acceptance of the modified terms.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">12. Contact Information</h2>
            <p className="mb-6">
              If you have any questions about these Terms of Use, please contact us at:
              <br /><br />
              <strong>Sneha Jain & Associates</strong><br />
              Email: adv.snehajain@gmail.com<br />
              Phone: +91 97681 81858
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUse;
