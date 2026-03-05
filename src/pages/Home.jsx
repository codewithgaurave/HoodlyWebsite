import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white py-16 sm:py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4 sm:mb-6">
            <span className="bg-blue-500/20 text-blue-400 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold border border-blue-500/30">Welcome to HOODLY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 px-2">Connect with Skilled Workers Instantly</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">Find and hire local service providers for all your needs. Fast, reliable, and professional services at your fingertips.</p>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors duration-300">
              Get Started
            </Link>
            <a href="#features" className="bg-white/10 hover:bg-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors duration-300 border border-white/20">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <p className="text-xl text-gray-600">Everything you need to connect with the best service providers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-cyan-500">
            <div className="bg-cyan-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Fast & Easy</h3>
            <p className="text-gray-600 leading-relaxed mb-4">Post your service request and get connected with available workers in your area within minutes. Real-time notifications keep you updated.</p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-center"><span className="text-cyan-500 mr-2 font-bold">✓</span> Instant worker matching</li>
              <li className="flex items-center"><span className="text-cyan-500 mr-2 font-bold">✓</span> Real-time updates</li>
              <li className="flex items-center"><span className="text-cyan-500 mr-2 font-bold">✓</span> Quick response time</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-green-500">
            <div className="bg-green-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Verified Workers</h3>
            <p className="text-gray-600 leading-relaxed mb-4">All service providers are verified and rated by our community for your safety and peace of mind. Background checks included.</p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-center"><span className="text-green-500 mr-2 font-bold">✓</span> ID verification</li>
              <li className="flex items-center"><span className="text-green-500 mr-2 font-bold">✓</span> Background checks</li>
              <li className="flex items-center"><span className="text-green-500 mr-2 font-bold">✓</span> Customer ratings</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-purple-500">
            <div className="bg-purple-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure Payments</h3>
            <p className="text-gray-600 leading-relaxed mb-4">Safe and secure payment processing through trusted payment gateways. Pay only after work completion. Multiple payment options available.</p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-center"><span className="text-purple-500 mr-2 font-bold">✓</span> UPI, Cards, Wallets</li>
              <li className="flex items-center"><span className="text-purple-500 mr-2 font-bold">✓</span> Pay after completion</li>
              <li className="flex items-center"><span className="text-purple-500 mr-2 font-bold">✓</span> Secure transactions</li>
            </ul>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-blue-50 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start">
              <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">24/7 Availability</h4>
                <p className="text-gray-600">Access our platform anytime, anywhere. Workers available round the clock for emergency services.</p>
              </div>
            </div>
          </div>

          <div className="bg-pink-50 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start">
              <div className="bg-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Customer Support</h4>
                <p className="text-gray-600">Dedicated support team ready to help you with any queries or issues. Chat, call, or email us anytime.</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start">
              <div className="bg-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Quality Guarantee</h4>
                <p className="text-gray-600">100% satisfaction guaranteed. If you're not happy with the service, we'll make it right or refund your money.</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start">
              <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Transparent Pricing</h4>
                <p className="text-gray-600">No hidden charges. Get upfront pricing before booking. Compare rates from multiple workers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Services</h2>
            <p className="text-xl text-gray-600">Find skilled workers for any job</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-colors cursor-pointer">
              <div className="text-4xl mb-3">🔧</div>
              <h4 className="font-bold text-gray-900">Electrician</h4>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-colors cursor-pointer">
              <div className="text-4xl mb-3">🔨</div>
              <h4 className="font-bold text-gray-900">Plumber</h4>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-colors cursor-pointer">
              <div className="text-4xl mb-3">🎨</div>
              <h4 className="font-bold text-gray-900">Painter</h4>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-colors cursor-pointer">
              <div className="text-4xl mb-3">🧹</div>
              <h4 className="font-bold text-gray-900">Cleaner</h4>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-colors cursor-pointer">
              <div className="text-4xl mb-3">🪛</div>
              <h4 className="font-bold text-gray-900">Carpenter</h4>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-colors cursor-pointer">
              <div className="text-4xl mb-3">❄️</div>
              <h4 className="font-bold text-gray-900">AC Repair</h4>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-colors cursor-pointer">
              <div className="text-4xl mb-3">🚗</div>
              <h4 className="font-bold text-gray-900">Mechanic</h4>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-colors cursor-pointer">
              <div className="text-4xl mb-3">📱</div>
              <h4 className="font-bold text-gray-900">Mobile Repair</h4>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Get your work done in 3 simple steps</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Your Location</h3>
            <p className="text-gray-600">Select your address where you need the service</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Select Service Type</h3>
            <p className="text-gray-600">Choose the type of work you need done</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Connect with Workers</h3>
            <p className="text-gray-600">Available workers in your area will contact you</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">Join thousands of satisfied customers who found the perfect service provider</p>
          <Link to="/contact" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 inline-block shadow-lg">
            Contact Us Now
          </Link>
        </div>
      </div>

  
    </div>
  );
}

export default Home;
