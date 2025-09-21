const About = () => {
  const skills = [
    "AI Research & Development",
    "MLOPS & Model Deployment",
    "Computer Vision & Image Processing",
    "Machine Learning & Deep Learning",
    "Agentic AI & Autonomous Systems", 
    "Workflow Automation with N8N",
    "LLM Fine-Tuning & Prompt Engineering"
  ];

  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 hero-text">
              About Me
            </h2>
            <div className="section-divider mb-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Muhammad Maaz, a passionate AI Engineer currently pursuing a Bachelor's in Computer Science (2023–2027) at the National University of Technology, Islamabad. My journey into AI started with a curiosity for how machines can learn, reason, and solve problems — and it quickly evolved into building intelligent systems that create real-world impact.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond technical expertise, I enjoy researching cutting-edge AI trends, brainstorming startup ideas, and experimenting with side projects that blend creativity with technology. My goal is to become an AI Engineer & Researcher who develops systems in autonomous agents, generative AI, and large-scale intelligent applications.
              </p>

              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-4 text-primary">Education</h3>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground">National University of Technology (NUTECH)</h4>
                  <p className="text-muted-foreground">Bachelor of Computer Science</p>
                  <p className="text-sm text-primary">2023 – 2027 | Islamabad, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary mb-6">I specialize in:</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-card p-4 rounded-lg border border-border hover:border-primary transition-colors group"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:bg-accent transition-colors" />
                      <span className="text-foreground group-hover:text-primary transition-colors">
                        {skill}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;