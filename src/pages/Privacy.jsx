function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white py-12 sm:py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4 sm:mb-6">
            <span className="bg-cyan-500/20 text-cyan-400 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold border border-cyan-500/30">Privacy & Security</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">Privacy Policy</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">Your privacy matters to us. Learn how we protect and handle your data with transparency and care.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-cyan-400 text-3xl sm:text-4xl font-bold mb-2">🔒</div>
              <h3 className="text-base sm:text-lg font-semibold mb-1">Secure Data</h3>
              <p className="text-gray-400 text-xs sm:text-sm">End-to-end encryption</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-cyan-400 text-3xl sm:text-4xl font-bold mb-2">✓</div>
              <h3 className="text-base sm:text-lg font-semibold mb-1">GDPR Compliant</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Following global standards</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-cyan-400 text-3xl sm:text-4xl font-bold mb-2">👤</div>
              <h3 className="text-base sm:text-lg font-semibold mb-1">Your Control</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Manage your data anytime</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-12">
          <section className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">1. Information We Collect</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-3">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-2">
              <li>Name, email address, and phone number</li>
              <li>Location and address information for service delivery</li>
              <li>Service requests and work preferences</li>
              <li>Payment information (processed securely via payment gateway)</li>
              <li>Device information, IP address, and app usage data</li>
              <li>Photos and documents related to service requests</li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">2. How We Use Your Information</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-2">
              <li>Connect you with skilled workers and service providers in your area</li>
              <li>Process service requests and facilitate work completion</li>
              <li>Send real-time notifications about service status and worker availability</li>
              <li>Process payments securely through our payment gateway partners</li>
              <li>Improve app functionality and user experience</li>
              <li>Ensure platform security and prevent fraudulent activities</li>
              <li>Provide customer support and resolve disputes</li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">3. Data Security</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-3">We implement appropriate technical and organizational measures to protect your personal information:</p>
            <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-2">
              <li>End-to-end encryption for sensitive data transmission</li>
              <li>Secure SSL/TLS connections for all communications</li>
              <li>PCI-DSS compliant payment gateway integration</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Multi-factor authentication and access controls</li>
              <li>Secure cloud storage with automated backups</li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">4. Information Sharing</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-3">We do not sell your personal information. We only share your information:</p>
            <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-2">
              <li>With workers/service providers to fulfill your service requests</li>
              <li>With payment gateway providers to process transactions securely</li>
              <li>With Google Play Store for app distribution and analytics</li>
              <li>With your explicit consent for specific purposes</li>
              <li>To comply with legal obligations and law enforcement</li>
              <li>To protect our rights, safety, and property</li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">5. Your Rights</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-3">You have the right to:</p>
            <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-2">
              <li>Access and review your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your account and data</li>
              <li>Opt-out of marketing communications</li>
              <li>Export your data in portable format</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">6. Data Retention</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">We retain your information as long as your account is active or as needed to provide services. We may also retain and use your information as necessary to comply with legal obligations, resolve disputes, and enforce our agreements.</p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">When you request deletion of your account, we will delete or anonymize your personal information within 30 days, except where we are required to retain it for legal purposes.</p>
          </section>

          <section className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">7. Third-Party Services</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-3 leading-relaxed">Our app integrates with trusted third-party services:</p>
            <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-2">
              <li><strong>Google Play Store:</strong> App distribution, updates, and user analytics</li>
              <li><strong>Payment Gateway Partners:</strong> Secure payment processing (Razorpay, Paytm, UPI)</li>
              <li><strong>Google Maps API:</strong> Location services and address verification</li>
              <li><strong>Cloud Storage Providers:</strong> Secure data storage and backup</li>
              <li><strong>Analytics Services:</strong> App performance and usage analytics</li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">8. Cookies and Tracking</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">We use both session and persistent cookies for authentication, preferences, and analytics purposes. You can manage cookie preferences through your device settings.</p>
          </section>

          <section className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">9. Children's Privacy</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">Our service is not intended for children under 18 years of age. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.</p>
          </section>

          <section className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">10. International Data Transfers</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. We ensure appropriate safeguards are in place to protect your data during such transfers.</p>
          </section>

          <section className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">11. Changes to Privacy Policy</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the last updated date.</p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
          </section>

          <section className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">12. Contact Us</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">If you have any questions about this Privacy Policy, please contact us:</p>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 sm:p-6 md:p-8 rounded-xl border border-cyan-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Privacy Department</h4>
                  <p className="text-xs sm:text-sm text-gray-700 mb-2"><strong>Email:</strong> privacy@myapp.com</p>
                  <p className="text-xs sm:text-sm text-gray-700 mb-2"><strong>Phone:</strong> +91 1234567890</p>
                  <p className="text-xs sm:text-sm text-gray-700"><strong>Address:</strong> 123 Business Street, Mumbai, Maharashtra 400001, India</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Business Hours</h4>
                  <p className="text-xs sm:text-sm text-gray-700 mb-2">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                  <p className="text-xs sm:text-sm text-gray-700 mb-2">Saturday: 10:00 AM - 4:00 PM IST</p>
                  <p className="text-xs sm:text-sm text-gray-700">Sunday: Closed</p>
                </div>
              </div>
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-cyan-200">
                <p className="text-gray-600 text-xs sm:text-sm"><strong>Last updated:</strong> January 2024</p>
                <p className="text-gray-600 text-xs sm:text-sm mt-1">Version 1.0 - Compliant with Google Play Store policies and Indian IT Act 2000</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
