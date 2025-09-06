import { ArrowLeft, MapPin, Calendar, Users, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const WorkExperience = () => {
  const experiences = [
    {
      title: "AI Intern",
      company: "Hexler Tech",
      duration: "July 2025 – September 2025",
      type: "Internship",
      responsibilities: [
        "Assisted in the research and development of AI-driven applications, focusing on voice and language technologies.",
        "Supported the team in model training, fine-tuning, and performance evaluation.",
        "Contributed to optimizing AI workflows for scalability, efficiency, and deployment.",
        "Collaborated with senior engineers to apply LLMs and speech technologies in real-world use cases."
      ]
    },
    {
      title: "Group Lead - Smart Soil Monitoring System",
      company: "ICAT Projects",
      duration: "3 Months",
      type: "Project Leadership",
      responsibilities: [
        "Led a team to design and develop a Smart Soil Monitoring System using AI.",
        "Built a hardware-integrated system to detect soil dryness, moisture, humidity, and temperature.",
        "Applied machine learning techniques to analyze sensor data for smart agricultural decision-making.",
        "Tools & Tech: Arduino, DHT11, soil moisture sensors, Python, scikit-learn, NumPy."
      ]
    },
    {
      title: "Group Lead - Brain Tumor Detection Model",
      company: "Deep Learning Project",
      duration: "3 Months",
      type: "Project Leadership",
      responsibilities: [
        "Directed the development of a Brain Tumor Detection Model using deep learning.",
        "Trained on a dataset of 50,000 medical images to achieve high accuracy in classification and detection.",
        "Supervised CNN-based model implementation and optimized hyperparameters for performance."
      ]
    },
    {
      title: "Freelance AI Developer",
      company: "Fiverr & Upwork",
      duration: "Fiverr (3 Months) | Upwork (4 Months)",
      type: "Freelance",
      responsibilities: [
        "Delivered multiple AI-related freelance projects, including automation scripts, small ML/DL models, and chatbot integrations.",
        "Worked closely with international clients to understand requirements and provide tailored AI solutions.",
        "Gained experience in client communication, project management, and deploying AI systems."
      ]
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
        return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'Project Leadership':
        return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
      case 'Freelance':
        return 'bg-green-500/10 text-green-600 border-green-500/20';
      default:
        return 'bg-primary/10 text-primary border-primary/20';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-background/80 backdrop-blur-lg border-b border-border/50 sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-primary hover:text-accent transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
            <h1 className="text-xl font-bold hero-text">Work Experience</h1>
            <div className="w-32" /> {/* Spacer for centering */}
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 hero-text">
              Professional Journey
            </h1>
            <div className="section-divider mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore my professional experience in AI engineering, project leadership, and freelance development.
              Each role has contributed to my expertise in machine learning, deep learning, and AI system deployment.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-card rounded-lg border border-border p-8 hover:border-primary/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(exp.type)}`}>
                        {getTypeIcon(exp.type)}
                        {exp.type}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">{exp.company}</h4>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h5 className="font-semibold text-foreground mb-3">Key Responsibilities & Achievements:</h5>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-primary/20 p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Ready to Collaborate?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm passionate about leveraging AI to solve real-world problems. Let's discuss how my experience 
                can contribute to your next project or organization.
              </p>
              <Link to="/#contact">
                <Button className="gradient-primary text-primary-foreground hover:opacity-90">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WorkExperience;