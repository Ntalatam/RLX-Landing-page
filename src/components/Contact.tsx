import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "contact@redlaunchsystems.com",
      subtitle: "Get in touch with our team"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      subtitle: "Available 24/7 for urgent inquiries"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Cape Canaveral, FL",
      subtitle: "Launch operations center"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to launch your mission? Contact our team to discuss your 
            space access requirements and learn how we can support your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-muted-foreground mb-8">
                Whether you're planning a satellite deployment, deep space mission, 
                or need custom launch solutions, our team is here to help make your 
                vision a reality.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 bg-background/50 backdrop-blur-sm border-border">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="text-primary font-medium mb-1">
                        {info.details}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.subtitle}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-background/50 backdrop-blur-sm border-border">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input type="email" placeholder="john@company.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Company
                </label>
                <Input placeholder="Your Company" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Type
                </label>
                <Input placeholder="Satellite deployment, deep space mission, etc." />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your mission requirements..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button type="submit" className="w-full group">
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