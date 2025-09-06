import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Download, ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Try direct download first, fallback to Google Drive view if blocked
    const directDownload = 'https://drive.google.com/uc?export=download&id=1bsmGZ2mvjbZbQVyG6-QAUhJlS8iYKEpZ';
    const fallbackLink = 'https://drive.google.com/file/d/1bsmGZ2mvjbZbQVyG6-QAUhJlS8iYKEpZ/view?usp=sharing';
    
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = directDownload;
    link.download = 'Muhammad_Maaz_Resume.pdf';
    link.target = '_blank';
    
    // Try the download
    try {
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      // If direct download fails, open the Google Drive link
      window.open(fallbackLink, '_blank');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="AI Engineering Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 hero-text">
            Muhammad Maaz
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            AI Engineer | Innovator
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            "Building AI systems that think, learn, and create real-world impact."
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              <span>muhammadmaaz1230@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              <span>(+92) 320 6063795</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-5 h-5 text-primary" />
              <a 
                href="https://www.linkedin.com/in/maaz-v7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                linkedin.com/in/maaz-v7
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-scale-in">
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="gradient-primary text-primary-foreground hover:opacity-90 px-8 py-3"
            >
              View Projects
            </Button>
            <Button
              onClick={handleDownloadCV}
              size="lg"
              variant="outline"
              className="px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;