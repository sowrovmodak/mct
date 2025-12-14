import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Admission from './components/Admission';
import Labs from './components/Labs';
import Events from './components/Events';
import Faculty from './components/Faculty';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ApplyModal from './components/ApplyModal';

function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  useEffect(() => {
    document.title = 'MCT - Multimedia & Creative Technology | Daffodil International University';
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'apply') {
      setIsApplyModalOpen(true);
      return;
    }

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation onNavigate={scrollToSection} />
      <Hero
        onApplyClick={() => setIsApplyModalOpen(true)}
        onExploreClick={() => scrollToSection('labs')}
      />
      <About />
      <Programs />
      <Admission onApplyClick={() => setIsApplyModalOpen(true)} />
      <Labs />
      <Events />
      <Faculty />
      <Contact />
      <Footer onNavigate={scrollToSection} />
      <ApplyModal isOpen={isApplyModalOpen} onClose={() => setIsApplyModalOpen(false)} />
    </div>
  );
}

export default App;
