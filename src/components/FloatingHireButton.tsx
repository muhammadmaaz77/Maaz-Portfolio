import { Mail } from 'lucide-react';

const FloatingHireButton = () => {
  const handleHireClick = () => {
    window.open('mailto:muhammadmaaz1230@gmail.com?subject=Hire Muhammad Maaz - AI Engineer&body=Hi Muhammad,%0D%0A%0D%0AI am interested in discussing potential opportunities with you.%0D%0A%0D%0ABest regards', '_blank');
  };

  return (
    <button
      onClick={handleHireClick}
      className="floating-btn animate-glow-pulse"
      aria-label="Hire Muhammad Maaz"
    >
      <Mail className="mr-2 w-5 h-5" />
      Hire Me
    </button>
  );
};

export default FloatingHireButton;