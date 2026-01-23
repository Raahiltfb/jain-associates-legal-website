
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-center">
            Privacy Policy
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
            <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
            <p className="mb-6">
              Sneha Jain & Associates ("we," "our," or "us") is committed to protecting your 
              privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard 
              your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect information about you in various ways, including:</p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide when filling out forms or contacting us.</li>
              <li><strong>Case Information:</strong> Details related to legal matters you discuss with us during consultations.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, operating system, and other technical information collected automatically when you visit our website.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website and services.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We may use the information we collect for purposes including:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Responding to your inquiries and providing legal services</li>
              <li>Communicating with you about our services</li>
              <li>Improving our website and services</li>
              <li>Complying with legal obligations</li>
              <li>Protecting our rights and interests</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4">4. Confidentiality</h2>
            <p className="mb-6">
              We maintain strict confidentiality of all client information in accordance with 
              the Bar Council of India rules and applicable laws. Information shared during 
              attorney-client consultations is protected by professional privilege and will 
              not be disclosed without your consent, except as required by law.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">5. Information Sharing</h2>
            <p className="mb-4">We may share your information in the following circumstances:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>With your consent or at your direction</li>
              <li>With service providers who assist us in operating our website and providing services</li>
              <li>To comply with legal obligations or court orders</li>
              <li>To protect our rights, privacy, safety, or property</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4">6. Data Security</h2>
            <p className="mb-6">
              We implement appropriate technical and organizational measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or 
              destruction. However, no method of transmission over the internet is 100% secure, 
              and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">7. Cookies</h2>
            <p className="mb-6">
              Our website may use cookies and similar tracking technologies to enhance your 
              browsing experience. You can set your browser to refuse cookies, but this may 
              limit your ability to use certain features of our website.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">8. Third-Party Links</h2>
            <p className="mb-6">
              Our website may contain links to third-party websites. We are not responsible 
              for the privacy practices of these websites. We encourage you to read the privacy 
              policies of any third-party websites you visit.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">9. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal obligations)</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4">10. Retention of Information</h2>
            <p className="mb-6">
              We retain your personal information for as long as necessary to fulfill the 
              purposes for which it was collected, including to satisfy any legal, accounting, 
              or reporting requirements.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">11. Children's Privacy</h2>
            <p className="mb-6">
              Our website is not intended for children under 18 years of age. We do not 
              knowingly collect personal information from children under 18.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">12. Changes to This Policy</h2>
            <p className="mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any 
              changes by posting the new Privacy Policy on this page and updating the "Last 
              updated" date.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">13. Contact Us</h2>
            <p className="mb-6">
              If you have any questions about this Privacy Policy or our data practices, 
              please contact us at:
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

export default PrivacyPolicy;
