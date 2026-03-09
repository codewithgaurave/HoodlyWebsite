import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t-4 border-cyan-500">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <img src="/image.png" alt="HOODLY" className="h-20 mb-4 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 border-2 border-cyan-400/30" />
            <p className="text-gray-300 text-sm leading-relaxed">Connecting users with skilled workers for all your service needs. Fast, reliable, and professional.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center"><span className="mr-2">→</span> Home</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center"><span className="mr-2">→</span> Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center"><span className="mr-2">→</span> Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center"><span className="mr-2">→</span> Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                societyhub225@gmail.com
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 1234567890
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Mumbai, Maharashtra
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; 2024 MyApp. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">Made with ❤️ in India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
