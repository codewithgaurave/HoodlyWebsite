function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="bg-purple-500/20 text-purple-400 px-6 py-2 rounded-full text-sm font-semibold border border-purple-500/30">Legal Agreement</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Terms & Conditions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Please read these terms carefully before using our services. By using our platform, you agree to these terms.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-purple-400 text-4xl font-bold mb-2">📋</div>
              <h3 className="text-lg font-semibold mb-1">Clear Terms</h3>
              <p className="text-gray-400 text-sm">Easy to understand</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-purple-400 text-4xl font-bold mb-2">⚖️</div>
              <h3 className="text-lg font-semibold mb-1">Fair Policy</h3>
              <p className="text-gray-400 text-sm">Transparent rules</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-purple-400 text-4xl font-bold mb-2">🤝</div>
              <h3 className="text-lg font-semibold mb-1">User Friendly</h3>
              <p className="text-gray-400 text-sm">Protecting your rights</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-3">By accessing and using our service platform, you accept and agree to be bound by the terms and conditions:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>You must be at least 18 years old to use our services</li>
              <li>You agree to provide accurate and complete information</li>
              <li>You are responsible for maintaining account security</li>
              <li>You agree to comply with all applicable laws</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Service Usage</h2>
            <p className="text-gray-700 mb-3">Our platform connects users with service providers. You agree to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Use the service for lawful purposes only</li>
              <li>Not misuse or abuse the platform</li>
              <li>Respect other users and service providers</li>
              <li>Provide honest reviews and feedback</li>
              <li>Not share false or misleading information</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Payment Terms</h2>
            <p className="text-gray-700 mb-3">All payments are processed securely:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Prices are displayed clearly before booking</li>
              <li>Payment is required to confirm service requests</li>
              <li>Refunds are subject to our refund policy</li>
              <li>Service providers receive payment after completion</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4. User Responsibilities</h2>
            <p className="text-gray-700 mb-3">As a user, you are responsible for:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Providing accurate service requirements</li>
              <li>Being available at scheduled service times</li>
              <li>Treating service providers with respect</li>
              <li>Reporting any issues promptly</li>
              <li>Canceling bookings according to policy</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Prohibited Activities</h2>
            <p className="text-gray-700 mb-3">The following activities are strictly prohibited:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Fraudulent or illegal activities</li>
              <li>Harassment or abusive behavior</li>
              <li>Sharing account credentials</li>
              <li>Attempting to bypass payment systems</li>
              <li>Posting inappropriate content</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700 mb-3">Please note:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>We connect users with independent service providers</li>
              <li>Service quality is the provider's responsibility</li>
              <li>We are not liable for service provider actions</li>
              <li>Disputes should be resolved directly with providers</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Termination</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">We reserve the right to terminate or suspend your account if you violate these terms. You may also delete your account at any time through the app settings.</p>
            <p className="text-gray-700 leading-relaxed">Upon termination, your right to use the service will immediately cease. All provisions of the terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Changes to Terms</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">We may update these terms from time to time. We will notify you of any significant changes through the app or via email. Continued use of the service after changes constitutes acceptance of the new terms.</p>
            <p className="text-gray-700 leading-relaxed">It is your responsibility to review these terms periodically. Your continued use of the platform following the posting of revised terms means that you accept and agree to the changes.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Intellectual Property</h2>
            <p className="text-gray-700 mb-3 leading-relaxed">All content, features, and functionality of our platform are owned by us and are protected by copyright, trademark, and other intellectual property laws:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>You may not copy, modify, or distribute our content without permission</li>
              <li>Our trademarks and logos may not be used without written consent</li>
              <li>User-generated content remains your property, but you grant us a license to use it</li>
              <li>You must not reverse engineer or attempt to extract source code</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Dispute Resolution</h2>
            <p className="text-gray-700 mb-3 leading-relaxed">In the event of any dispute arising from these terms:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>First, contact our support team to resolve the issue informally</li>
              <li>If unresolved, disputes will be subject to binding arbitration</li>
              <li>Arbitration will be conducted in Mumbai, Maharashtra</li>
              <li>The laws of India will govern these terms</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">You agree to indemnify and hold harmless our company, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the service, violation of these terms, or infringement of any third-party rights.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">12. Warranty Disclaimer</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">Our service is provided as is and as available without warranties of any kind, either express or implied. We do not guarantee that the service will be uninterrupted, secure, or error-free.</p>
            <p className="text-gray-700 leading-relaxed">We make no warranties about the accuracy, reliability, or quality of services provided by third-party service providers on our platform.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">13. Contact Us</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">If you have any questions about these Terms & Conditions, please contact us:</p>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Legal Department</h4>
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@myapp.com</p>
                  <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 1234567890</p>
                  <p className="text-gray-700"><strong>Address:</strong> 123 Business Street, Mumbai, Maharashtra 400001, India</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Business Hours</h4>
                  <p className="text-gray-700 mb-2">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                  <p className="text-gray-700 mb-2">Saturday: 10:00 AM - 4:00 PM IST</p>
                  <p className="text-gray-700">Sunday: Closed</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-purple-200">
                <p className="text-gray-600 text-sm"><strong>Last updated:</strong> January 2024</p>
                <p className="text-gray-600 text-sm mt-1">Version 1.0 - Effective from January 1, 2024</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Terms;
