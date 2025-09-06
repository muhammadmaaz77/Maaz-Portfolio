import { Calendar, MapPin, Users, Wrench } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "AI Intern",
      company: "Hexler Tech",
      duration: "July 2025 – September 2025",
      type: "Internship",
      description: "Assisted in R&D of AI-driven applications focusing on voice and language technologies. Contributed to LLM deployment and AI workflow optimization.",
      highlights: ["Voice & Language AI", "Model Training", "LLM Deployment", "AI Workflows"]
    },
    {
      title: "Group Lead - Smart Soil Monitoring",
      company: "ICAT Projects",
      duration: "3 Months",
      type: "Project Leadership",
      description: "Led team development of AI-powered smart agriculture system with hardware integration for soil monitoring and ML-based decision making.",
      highlights: ["Team Leadership", "Hardware Integration", "ML Analysis", "Agriculture AI"]
    },
    {
      title: "Group Lead - Brain Tumor Detection",
      company: "Deep Learning Project",
      duration: "3 Months", 
      type: "Project Leadership",
      description: "Directed CNN-based brain tumor detection model development, training on 50K+ medical images with optimized hyperparameters for high accuracy.",
      highlights: ["Deep Learning", "Medical AI", "CNN Implementation", "Team Management"]
    },
    {
      title: "Freelance AI Developer",
      company: "Fiverr & Upwork",
      duration: "7 Months Total",
      type: "Freelance",
      description: "Delivered AI projects including automation scripts, ML/DL models, and chatbot integrations for international clients with focus on tailored solutions.",
      highlights: ["Client Management", "AI Automation", "Chatbot Development", "International Clients"]
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Internship':
        return <Wrench className="w-4 h-4" />;
      case 'Project Leadership':
        return <Users className="w-4 h-4" />;
      case 'Freelance':
        return <MapPin className="w-4 h-4" />;
      default:
        return <Calendar className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Project Leadership':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'Freelance':
        return 'bg-green-500/10 text-green-400 border-green-500/20';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hero-text">
            Professional Experience
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world AI engineering experience from internships to leadership roles
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border mb-3 ${getTypeColor(exp.type)}`}>
                  {getTypeIcon(exp.type)}
                  {exp.type}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                  {exp.title}
                </h3>
                <h4 className="text-lg font-medium text-foreground mb-2">{exp.company}</h4>
                <div className="flex items-center text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{exp.duration}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {exp.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((highlight, highlightIndex) => (
                  <span 
                    key={highlightIndex}
                    className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;