const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "C++"]
    },
    {
      title: "Libraries & Frameworks", 
      skills: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "TensorFlow", "Keras", "OpenCV", "XGBoost"]
    },
    {
      title: "Technologies",
      skills: ["LangChain", "AutoGPT", "Hugging Face Transformers", "OpenAI API", "Google Colab", "N8N"]
    },
    {
      title: "Machine Learning",
      skills: ["Supervised Learning", "Unsupervised Learning", "Feature Engineering", "Model Evaluation"]
    },
    {
      title: "Deep Learning", 
      skills: ["Neural Networks", "CNNs", "Transfer Learning", "Reasoning Systems"]
    },
    {
      title: "Agentic AI",
      skills: ["Autonomous AI agents", "Planning & Reasoning Systems"]
    },
    {
      title: "Workflow Automation",
      skills: ["N8N", "API Integration", "Data Exchange", "No-Code/Low-Code Development"]
    },
    {
      title: "LLM Fine-Tuning",
      skills: ["Prompt Engineering", "Instruction Tuning"]
    },
    {
      title: "Soft Skills",
      skills: ["Troubleshooting", "Problem Solving", "Team Management", "Decision Making"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hero-text">
            Skills & Expertise
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building intelligent AI systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-accent transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="skill-tag"
                  >
                    {skill}
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

export default Skills;