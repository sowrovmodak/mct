import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavigationProps {
  onNavigate: (section: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', section: 'home' },
    { label: 'About', section: 'about' },
    { label: 'Programs', section: 'programs' },
    { label: 'Admission', section: 'admission' },
    { label: 'Labs', section: 'labs' },
    { label: 'Events', section: 'events' },
    { label: 'Faculty', section: 'faculty' },
    { label: 'Contact', section: 'contact' },
  ];

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <div className={`rounded-lg transition-all ${
              isScrolled ? 'bg-white p-1' : 'bg-white/10 p-1 backdrop-blur-sm'
            }`}>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVyL8DZ3sTTN-USkS1sXJ444-SczI54-OMcw&s" 
                alt="MCT Logo" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <h1
                className={`text-xl font-bold transition-colors ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                MCT
              </h1>
              <p
                className={`text-xs transition-colors ${
                  isScrolled ? 'text-gray-600' : 'text-gray-100'
                }`}
              >
                Multimedia & Creative Technology
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleNavClick(item.section)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  isScrolled
                    ? 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('apply')}
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
            >
              Apply Now
            </button>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white rounded-lg shadow-xl">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleNavClick(item.section)}
                className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('apply')}
              className="w-full mt-2 mx-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
              style={{ width: 'calc(100% - 3rem)' }}
            >
            Testing
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
