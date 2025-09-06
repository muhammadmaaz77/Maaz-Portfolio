import { Mail, Phone, Linkedin, Send, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const handleEmailClick = () => {
    window.open('mailto:muhammadmaaz1230@gmail.com?subject=Let\'s Connect - Portfolio Inquiry', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/maaz-v7', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+923206063795', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hero-text">
            Let's Build the Future with AI
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on innovative AI projects? Let's connect and create something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Get In Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities, innovative AI projects, 
                  or potential collaborations. Whether you're looking for an AI engineer, 
                  want to explore cutting-edge solutions, or just want to chat about the 
                  future of AI, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div 
                  onClick={handleEmailClick}
                  className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <div className="text-muted-foreground">muhammadmaaz1230@gmail.com</div>
                  </div>
                </div>

                <div 
                  onClick={handlePhoneClick}
                  className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Phone</div>
                    <div className="text-muted-foreground">(+92) 320 6063795</div>
                  </div>
                </div>

                <div 
                  onClick={handleLinkedInClick}
                  className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">LinkedIn</div>
                    <div className="text-muted-foreground">linkedin.com/in/maaz-v7</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Location</div>
                    <div className="text-muted-foreground">Islamabad, Pakistan</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-xl border border-primary/20">
                <h3 className="text-2xl font-bold text-primary mb-4">Career Vision</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  My long-term vision is to become a leading AI Engineer and Researcher, working on:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Autonomous AI agents capable of independent reasoning
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    Generative AI systems that revolutionize industries
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-tech-cyan rounded-full" />
                    Real-time voice & language AI for human-computer interaction
                  </li>
                </ul>
              </div>

              <div className="text-center space-y-6">
                <Button
                  onClick={handleEmailClick}
                  size="lg"
                  className="w-full gradient-primary text-primary-foreground hover:opacity-90 py-4"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Start a Conversation
                </Button>
                
                <p className="text-sm text-muted-foreground">
                  Available for full-time opportunities, consulting, and exciting AI projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;