import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your supply chain risk management? Contact our team to discuss your 
            requirements and learn how we can help build more resilient operations.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-card/80 backdrop-blur-sm border border-border">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input placeholder="John" className="bg-background border-border focus:border-primary focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Doe" className="bg-background border-border focus:border-primary focus:ring-primary" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input type="email" placeholder="john@company.com" className="bg-background border-border focus:border-primary focus:ring-primary" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Company
                </label>
                <Input placeholder="Your Company" className="bg-background border-border focus:border-primary focus:ring-primary" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Industry
                </label>
                <Input placeholder="Aerospace, Defense, Manufacturing, Energy, etc." className="bg-background border-border focus:border-primary focus:ring-primary" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your supply chain challenges and risk management needs..."
                  className="min-h-[120px] bg-background border-border focus:border-primary focus:ring-primary"
                />
              </div>
              
              <Button type="submit" className="w-full group bg-primary text-primary-foreground hover:bg-primary/90 neon-glow">
                Send Message
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;