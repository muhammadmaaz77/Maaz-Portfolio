import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border/50' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl hero-text">
        </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                <button onClick={() => scrollToSection('about')} className="nav-link">
                  About
                </button>
                <button onClick={() => scrollToSection('skills')} className="nav-link">
                  Skills
                </button>
                <button onClick={() => scrollToSection('experience')} className="nav-link">
                  Experience
                </button>
                <button onClick={() => scrollToSection('projects')} className="nav-link">
                  Projects
                </button>
                <button onClick={() => scrollToSection('certifications')} className="nav-link">
                  Certifications
                </button>
                <button onClick={() => scrollToSection('contact')} className="nav-link">
                  Contact
                </button>
              </>
            ) : (
              <>
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/work-experience" className="nav-link">
                  Experience
                </Link>
              </>
            )}
          </div>

          <Button onClick={() => scrollToSection('contact')} className="gradient-primary text-primary-foreground hover:opacity-90">
            Get In Touch
          </Button>
        </div>
      </nav>
    </header>;
};
export default Header;