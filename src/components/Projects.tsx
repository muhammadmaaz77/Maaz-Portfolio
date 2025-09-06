import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Sonar Signal Classification – Rock vs Mine Detection",
      description: "Machine learning model classifying sonar signals with SVM, KNN, and Random Forest. Accuracy optimized using preprocessing and hyperparameter tuning.",
      tech: ["Python", "scikit-learn", "pandas", "NumPy"],
      category: "Machine Learning"
    },
    {
      title: "ASL Sign Language Recognition using Deep Learning", 
      description: "CNN-based model to recognize American Sign Language gestures from images. Achieved high accuracy in real-time hand sign interpretation.",
      tech: ["Python", "TensorFlow", "Keras", "OpenCV"],
      category: "Deep Learning"
    },
    {
      title: "Smart Soil Monitoring System using AI",
      description: "Hardware-integrated system for detecting soil dryness, humidity, and temperature. Applied ML to support smart agriculture decision-making.",
      tech: ["Arduino", "DHT11", "Python", "scikit-learn"],
      category: "IoT + AI"
    },
    {
      title: "Agentic AI-Powered Crypto Trading Bot",
      description: "Autonomous AI bot for crypto futures trading with real-time news scraping, whale movement tracking, and technical analysis.",
      tech: ["Python", "LangChain", "OpenAI API", "BeautifulSoup", "ccxt"],
      category: "Agentic AI"
    },
    {
      title: "New Order Alert System for E-Commerce (N8N)",
      description: "Automated workflow detecting new Shopify/WooCommerce orders. Sends instant detailed alerts to Slack channel for operations team.",
      tech: ["N8N", "APIs", "Webhooks", "JSON"],
      category: "Automation"
    },
    {
      title: "Voice AI System for Real-Time Communication",
      description: "Built AI-powered voice assistant capable of real-time STT, TTS, and multilingual translation. Integrated Groq + OpenAI APIs for low-latency conversations.",
      tech: ["Python", "TensorFlow", "Groq API", "OpenAI API"],
      category: "Voice AI"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Machine Learning": "bg-blue-500/10 text-blue-400 border-blue-500/20",
      "Deep Learning": "bg-purple-500/10 text-purple-400 border-purple-500/20", 
      "IoT + AI": "bg-green-500/10 text-green-400 border-green-500/20",
      "Agentic AI": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      "Automation": "bg-orange-500/10 text-orange-400 border-orange-500/20",
      "Voice AI": "bg-pink-500/10 text-pink-400 border-pink-500/20"
    };
    return colors[category] || "bg-gray-500/10 text-gray-400 border-gray-500/20";
  };

  return (
    <section id="projects" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hero-text">
            Featured Projects
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AI solutions that solve real-world problems and push the boundaries of technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)} mb-3`}>
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-4 border-t border-border">
                <Button 
                  size="sm" 
                  variant="outline"
                  className="flex-1 text-xs hover:bg-primary hover:text-primary-foreground"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button 
                  size="sm"
                  className="flex-1 text-xs gradient-primary"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;