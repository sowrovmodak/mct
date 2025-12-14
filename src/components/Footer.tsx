import { Sparkles, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About MCT', section: 'about' },
    { label: 'Programs', section: 'programs' },
    { label: 'Admission', section: 'admission' },
    { label: 'Labs & Facilities', section: 'labs' },
  ];

  const resources = [
    { label: 'Events & News', section: 'events' },
    { label: 'Faculty', section: 'faculty' },
    { label: 'Contact Us', section: 'contact' },
    { label: 'Student Portal', section: 'portal' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white text-lg font-bold">MCT</h3>
                <p className="text-xs text-gray-400">Daffodil International University</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Shaping the future of creative technology through innovative education,
              world-class facilities, and industry partnerships.
            </p>
            <button
              onClick={() => onNavigate('apply')}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all text-sm"
            >
              Apply Now
            </button>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(link.section)}
                    className="hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(link.section)}
                    className="hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Daffodil International University, Savar, Dhaka-1342</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:mct@diu.edu.bd" className="hover:text-white transition-colors">
                  mct@diu.edu.bd
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+8801713493000" className="hover:text-white transition-colors">
                  +880 1713-493000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Department of Multimedia & Creative Technology, Daffodil
              International University. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                FAQs
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
