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
            Last updated: January 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            
            <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-primary">
              <p className="font-medium">
                This Terms of Use Agreement (the “Terms of Use” or “Agreement”) describes the terms and conditions applicable to your access and use of the Website. By using the Website or accessing any content available through the Website, you accept this Agreement.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance and Changes</h2>
              <p>
                <strong>Sneha Jain & Associates</strong> may revise this Agreement at any time by posting revised Terms of Use on the Website. Your use of the Website after such changes will constitute your acceptance of such changes. This website is provided as a complimentary facility for general information only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. No Attorney-Client Relationship</h2>
              <p>
                The content on this Website is not designed or intended to provide legal advice or create a lawyer-client relationship and is not intended to solicit clients or work. You should not take, or refrain from taking, action based on the content of this Website. <strong>Sneha Jain & Associates</strong> and its partners, consultants, or employees accept no responsibility for any loss or damage resulting from reliance on any content on the Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Proprietary Rights</h2>
              <p>
                The Website and its Content are the sole and exclusive property of <strong>Sneha Jain & Associates</strong>. You agree not to reproduce, duplicate, copy, sell, or exploit any portion of the Website for commercial purposes without express written authorization. Use of the Website or Content in any way not expressly permitted by this Agreement is prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Permitted Uses and Restrictions</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You may view and/or print a single copy of the Content for personal use.</li>
                <li>You must not remove or modify any acknowledgments, credits, or legal notices.</li>
                <li>You agree not to damage, disable, or impair the Website or interfere with any other party’s use.</li>
                <li>Access via shared devices: We strongly recommend clearing your browsing history, cookies, and cache after use on shared devices.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Third-Party Links and Maps</h2>
              <p>
                The Website may contain links to third-party websites for your convenience. These sites are not under our control, and we are not responsible for their content. Furthermore, maps used on our website are sourced via open license from Google; boundaries and names shown do not imply an expression of opinion by <strong>Sneha Jain & Associates</strong> regarding the legal status of any region.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Disclaimers of Liability</h2>
              <p className="italic">
                The Website and all content are provided on an “AS IS” and “AS AVAILABLE” basis without warranty of any kind, express or implied.
              </p>
              <p>
                <strong>Sneha Jain & Associates</strong> makes no representations that use of the website will be uninterrupted, error-free, or virus-free. To the maximum extent permitted by law, we disclaim all liability for any direct, indirect, incidental, or special damages arising out of or connected with access to or use of the Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Indemnity</h2>
              <p>
                You agree to indemnify, defend, and hold <strong>Sneha Jain & Associates</strong>, its affiliates, and their respective officers and partners harmless from any loss, liability, claim, or demand, including reasonable attorneys’ fees, due to or arising out of your use of the Website or breach of this Agreement.
              </p>
            </section>

            <section className="bg-blue-50 p-8 rounded-lg border border-blue-100">
              <h2 className="text-2xl font-bold text-primary mb-4">8. Claims of Infringement</h2>
              <p className="mb-4">
                If you believe your work has been copied in a way that constitutes copyright infringement, please provide the following to our Office of the General Counsel:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-sm">
                <li>Physical or electronic signature of the authorized person.</li>
                <li>Description of the copyrighted work and its location (URL) on our site.</li>
                <li>Your contact information (Name, address, telephone, email).</li>
                <li>A statement of good faith belief and a statement under penalty of perjury regarding accuracy.</li>
              </ul>
              <p className="font-bold">Contact for Legal Notices:</p>
              <p className="text-sm">
                Office of the General Counsel, c/o Sneha Jain & Associates<br />
                Peninsula Chambers, Peninsula Corporate Park, GK Marg,<br />
                Lower Parel, 400013, Mumbai, India<br />
                <strong>Email:</strong> ogc@cyrilshroff.com (cc: cam.digital@cyrilshroff.com)
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">9. Miscellaneous</h2>
              <p>
                Any cause of action with respect to this Website must be commenced within <strong>six (6) months</strong> after the claim arises. If any provision is held invalid, the remaining provisions stay in full force. These Terms of Use set forth the entire agreement between you and <strong>Sneha Jain & Associates</strong>.
              </p>
            </section>

            <section className="pt-8 border-t border-gray-200">
              <h2 className="text-xl font-bold text-primary mb-2">Contact Us</h2>
              <p>
                <strong>Sneha Jain & Associates</strong><br />
                Email: adv.snehajain@gmail.com<br />
                Phone: +91 97681 81858
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUse;
