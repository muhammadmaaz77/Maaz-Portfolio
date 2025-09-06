import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import nvidiaLogo from '@/assets/logos/nvidia-logo.png';
import ibmLogo from '@/assets/logos/ibm-logo.png';
import googleLogo from '@/assets/logos/google-logo.png';

const Certifications = () => {
const certifications = [
    {
      title: "Building RAG Agents with LLMs",
      issuer: "NVIDIA",
      category: "LLM & RAG"
    },
    {
      title: "AI Engineering Professional Certificate", 
      issuer: "IBM",
      category: "AI Engineering"
    },
    {
      title: "Augment Your LLM Using Retrieval Augmented Generation",
      issuer: "NVIDIA", 
      category: "LLM & RAG"
    },
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "IBM",
      category: "AI Fundamentals"
    },
    {
      title: "Generative AI and LLMs: Architecture and Data Preparation",
      issuer: "IBM",
      category: "Generative AI",
      verifyLink: "https://coursera.org/verify/D898U3TAMJN0"
    },
    {
      title: "Machine Learning",
      issuer: "IBM",
      category: "Machine Learning"
    },
    {
      title: "Gen AI Modeling With Transformers",
      issuer: "IBM", 
      category: "Transformers",
      verifyLink: "https://coursera.org/verify/HSEQZP90H9WP"
    },
    {
      title: "Introduction to Deep Learning & Neural Networks with Keras",
      issuer: "IBM",
      category: "Deep Learning",
      verifyLink: "https://coursera.org/verify/PODHK6NXDQO6"
    },
    {
      title: "Gen AI Agents: Transform Your Organization",
      issuer: "Google",
      category: "AI Agents",
      verifyLink: "https://coursera.org/verify/OGN7FEUR9PC4"
    },
    {
      title: "Large Language Models and Generative AI Deployment",
      issuer: "NVIDIA",
      category: "LLM Deployment",
      verifyLink: "https://coursera.org/verify/JWKSOB9LDEC5"
    }
  ];

  const getIssuerColor = (issuer: string) => {
    const colors: { [key: string]: string } = {
      "NVIDIA": "from-green-500/20 to-green-600/20 border-green-500/30",
      "IBM": "from-blue-500/20 to-blue-600/20 border-blue-500/30",
      "Google": "from-red-500/20 to-yellow-500/20 border-yellow-500/30"
    };
    return colors[issuer] || "from-primary/20 to-accent/20 border-primary/30";
  };

  const getIssuerLogo = (issuer: string) => {
    const logos: { [key: string]: string } = {
      "NVIDIA": nvidiaLogo,
      "IBM": ibmLogo,
      "Google": googleLogo
    };
    return logos[issuer];
  };

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hero-text">
            Certifications
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and validated expertise in cutting-edge AI technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className={`cert-badge animate-fade-up bg-gradient-to-br ${getIssuerColor(cert.issuer)}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <Award className="w-8 h-8 text-primary flex-shrink-0" />
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                  {cert.category}
                </span>
              </div>
              
              <h3 className="font-semibold text-foreground mb-3 text-sm leading-tight">
                {cert.title}
              </h3>
              
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2">
                  {getIssuerLogo(cert.issuer) && (
                    <img 
                      src={getIssuerLogo(cert.issuer)} 
                      alt={`${cert.issuer} logo`}
                      className="w-6 h-6 object-contain rounded"
                    />
                  )}
                  <span className="text-xs text-muted-foreground font-medium">
                    {cert.issuer}
                  </span>
                </div>
                {cert.verifyLink && (
                  <Button 
                    size="sm" 
                    variant="ghost"
                    className="p-1 h-auto text-primary hover:text-accent"
                    onClick={() => window.open(cert.verifyLink, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-full border border-border">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">
              {certifications.length} Professional Certifications
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;