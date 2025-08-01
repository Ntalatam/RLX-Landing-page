import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Users, Target, Award, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Purpose",
      description: "To simplify supply chain complexity and transform risk into strategic foresight for organizations worldwide."
    },
    {
      icon: Users,
      title: "Our Team",
      description: "Supply chain experts, data scientists, and software engineers united in building resilient operations."
    },
    {
      icon: Award,
      title: "Our Commitment",
      description: "Delivering enterprise-grade security, reliability, and scalability that mission-critical operations demand."
    },
    {
      icon: Lightbulb,
      title: "Our Innovation",
      description: "Continuously advancing supply chain intelligence through cutting-edge analytics and visualization."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About Red Launch Technologies
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're pioneering the future of supply chain intelligence, empowering organizations 
                to make confident decisions in an increasingly complex global economy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">
                  Our Story
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Red Launch Technologies was founded on the belief that supply chain visibility 
                  shouldn't be a luxury—it should be a strategic advantage accessible to every organization 
                  that values operational resilience.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As supply chains became increasingly global and complex, we recognized the need 
                  for a systems-level approach to supplier oversight. We don't just monitor risk; 
                  we make it visible, understandable, and actionable.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, we serve aerospace, defense, manufacturing, and energy companies with 
                  platform solutions that combine real-time data analytics, geospatial mapping, 
                  and interactive visualizations.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <Card key={index} className="p-6 bg-card/80 backdrop-blur-sm border border-border text-center hover:neon-glow transition-all duration-300">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-card/80 rounded-2xl p-8 md:p-12 border border-border neon-glow">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Our Vision
                </h2>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  We envision a world where supply chain disruptions are anticipated rather than 
                  discovered, where risk is transformed into strategic advantage, and where 
                  organizations can launch forward with confidence in their operational resilience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;