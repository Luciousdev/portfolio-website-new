
import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  soundEnabled: boolean;
  toggleSound: () => void;
}

const Navbar = ({ soundEnabled, toggleSound }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-6 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-black/30 dark:bg-black/40' : 'bg-transparent'
      }`}
    >
      <div className="text-white font-bold text-xl">
        Luciousdev <span className="text-primary">|</span>
      </div>
      
      <div className="flex items-center space-x-6">
        <button 
          onClick={() => scrollToSection('about')} 
          className="text-white hover:text-primary transition-colors"
        >
          About
        </button>
        <button 
          onClick={() => scrollToSection('projects')} 
          className="text-white hover:text-primary transition-colors"
        >
          Projects
        </button>
        <button 
          onClick={() => scrollToSection('gaming-ranks')} 
          className="text-white hover:text-primary transition-colors"
        >
          Gaming
        </button>
        <button 
          onClick={() => scrollToSection('stream')} 
          className="text-white hover:text-primary transition-colors"
        >
          Stream
        </button>
        <button 
          onClick={() => scrollToSection('social')} 
          className="text-white hover:text-primary transition-colors"
        >
          Social
        </button>
        <div className="flex items-center space-x-3">
          <button 
            onClick={toggleSound}
            className="flex items-center text-white hover:text-primary transition-colors"
            title={soundEnabled ? "Mute" : "Unmute"}
          >
            {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
