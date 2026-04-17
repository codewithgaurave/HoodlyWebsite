function Refund() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-slate-900 text-white py-12 sm:py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4 sm:mb-6">
            <span className="bg-green-500/20 text-green-400 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold border border-green-500/30">Refund & Cancellation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">Refund Policy</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">Understand our refund and cancellation policy for subscription services on HOODLY.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-green-400 text-3xl sm:text-4xl font-bold mb-2">💳</div>
              <h3 className="text-base sm:text-lg font-semibold mb-1">Digital Services</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Subscription based platform</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-green-400 text-3xl sm:text-4xl font-bold mb-2">🔄</div>
              <h3 className="text-base sm:text-lg font-semibold mb-1">Easy Cancellation</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Cancel renewals anytime</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-green-400 text-3xl sm:text-4xl font-bold mb-2">⏱️</div>
              <h3 className="text-base sm:text-lg font-semibold mb-1">7–10 Days</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Refund processing time</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-12">

          <section className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">1. Subscription Services</h2>
            <p className="text-sm sm:text-base text-gray-700">HOODLY provides digital subscription services for vendor listing and advertising.</p>
          </section>

          <section className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">2. No Refund Policy</h2>
            <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-2">
              <li>All subscription payments are non-refundable once activated.</li>
              <li>No refund will be provided for unused or partially used subscription periods.</li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">3. Exceptions</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-3">Refunds may be considered only in cases of:</p>
            <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-2">
              <li>Duplicate payment</li>
              <li>Technical failure where service was not activated</li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">4. Cancellation</h2>
            <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-2">
              <li>Vendors may cancel future renewals anytime.</li>
              <li>Cancellation does not entitle refund of already paid subscription fees.</li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">5. Refund Request Process</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-3">For eligible cases, contact us at <strong>societyhub225@gmail.com</strong> and provide:</p>
            <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-2">
              <li>Transaction ID</li>
              <li>Registered details</li>
              <li>Reason for request</li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">6. Refund Timeline</h2>
            <p className="text-sm sm:text-base text-gray-700">Approved refunds will be processed within 7–10 working days.</p>
          </section>

          <section className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Contact</h2>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 md:p-8 rounded-xl border border-green-200">
              <p className="text-sm sm:text-base text-gray-700 mb-2"><strong>Email:</strong> societyhub225@gmail.com</p>
              <p className="text-sm sm:text-base text-gray-700"><strong>Operated by:</strong> Sociolink Hub LLP</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default Refund;
