function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
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
              <p className="text-gray-400 text-xs sm:text-sm">Your data is protected</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-cyan-400 text-3xl sm:text-4xl font-bold mb-2">✓</div>
              <h3 className="text-base sm:text-lg font-semibold mb-1">No Data Selling</h3>
              <p className="text-gray-400 text-xs sm:text-sm">We never sell your data</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-cyan-400 text-3xl sm:text-4xl font-bold mb-2">👤</div>
              <h3 className="text-base sm:text-lg font-semibold mb-1">Your Control</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Manage your data anytime</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-12">

          <section className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">1. Information We Collect</h2>
            <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-2">
              <li>Name, phone number, email address</li>
              <li>Vendor business details</li>
              <li>Transaction/payment details (processed via secure third-party gateways)</li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">2. Use of Information</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-3">We use your data to:</p>
            <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-2">
              <li>Provide and manage platform services</li>
              <li>Enable vendor listings</li>
              <li>Process transactions</li>
              <li>Communicate updates and support</li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">3. Data Sharing</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-3">We do not sell your personal data.</p>
            <p className="text-sm sm:text-base text-gray-700 mb-3">We may share data with:</p>
            <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-2">
              <li>Payment processors (e.g., Razorpay)</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">4. Data Security</h2>
            <p className="text-sm sm:text-base text-gray-700">We implement reasonable security measures to protect user data.</p>
          </section>

          <section className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">5. Cookies</h2>
            <p className="text-sm sm:text-base text-gray-700">HOODLY may use cookies to enhance user experience.</p>
          </section>

          <section className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">6. User Rights</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-3">Users can request:</p>
            <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-2">
              <li>Access to their data</li>
              <li>Correction of incorrect data</li>
              <li>Deletion (subject to legal requirements)</li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">7. Third-Party Links</h2>
            <p className="text-sm sm:text-base text-gray-700">We are not responsible for third-party services linked on the platform.</p>
          </section>

          <section className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">8. Policy Updates</h2>
            <p className="text-sm sm:text-base text-gray-700">This Privacy Policy may be updated periodically.</p>
          </section>

          <section className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">9. Contact</h2>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 sm:p-6 md:p-8 rounded-xl border border-cyan-200">
              <p className="text-sm sm:text-base text-gray-700 mb-2"><strong>Email:</strong> societyhub225@gmail.com</p>
              <p className="text-sm sm:text-base text-gray-700"><strong>Operated by:</strong> Sociolink Hub LLP</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default Privacy;
