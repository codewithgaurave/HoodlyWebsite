import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-slate-900 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="pl-5 md:pl-0 hover:scale-110 transition-all duration-300 filter hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.7)]">
            <img src="/image.png" alt="HOODLY" className="h-12 rounded-lg shadow-lg hover:shadow-cyan-500/50" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li className="relative group">
              <Link to="/" className={`text-white font-medium transition-colors duration-300 ${isActive('/') ? 'text-yellow-300' : 'hover:text-yellow-300'}`}>
                Home
              </Link>
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300 transform origin-left transition-transform duration-300 ${isActive('/') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </li>
            <li className="relative group">
              <Link to="/contact" className={`text-white font-medium transition-colors duration-300 ${isActive('/contact') ? 'text-yellow-300' : 'hover:text-yellow-300'}`}>
                Contact
              </Link>
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300 transform origin-left transition-transform duration-300 ${isActive('/contact') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </li>
            <li className="relative group">
              <Link to="/privacy" className={`text-white font-medium transition-colors duration-300 ${isActive('/privacy') ? 'text-yellow-300' : 'hover:text-yellow-300'}`}>
                Privacy Policy
              </Link>
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300 transform origin-left transition-transform duration-300 ${isActive('/privacy') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </li>
            <li className="relative group">
              <Link to="/terms" className={`text-white font-medium transition-colors duration-300 ${isActive('/terms') ? 'text-yellow-300' : 'hover:text-yellow-300'}`}>
                Terms & Conditions
              </Link>
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300 transform origin-left transition-transform duration-300 ${isActive('/terms') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-slate-800 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <img src="/image.png" alt="HOODLY" className="h-10" />
            <button onClick={() => setIsOpen(false)} className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="space-y-2">
            <li><Link to="/" onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded transition-colors ${isActive('/') ? 'bg-cyan-500 text-white font-semibold' : 'text-white hover:bg-slate-700'}`}>Home</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded transition-colors ${isActive('/contact') ? 'bg-cyan-500 text-white font-semibold' : 'text-white hover:bg-slate-700'}`}>Contact</Link></li>
            <li><Link to="/privacy" onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded transition-colors ${isActive('/privacy') ? 'bg-cyan-500 text-white font-semibold' : 'text-white hover:bg-slate-700'}`}>Privacy Policy</Link></li>
            <li><Link to="/terms" onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded transition-colors ${isActive('/terms') ? 'bg-cyan-500 text-white font-semibold' : 'text-white hover:bg-slate-700'}`}>Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
