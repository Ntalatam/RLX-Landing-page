import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Shield, Eye } from "lucide-react";

const Mission = () => {
  const values = [
    {
      icon: Target,
      title: "Precision Intelligence",
      description: "Every data point is analyzed with precision to deliver actionable risk insights for critical decisions."
    },
    {
      icon: Shield,
      title: "Proactive Protection",
      description: "Trusted by leading manufacturers and defense contractors to safeguard their most critical supply chains."
    },
    {
      icon: Eye,
      title: "Visibility First",
      description: "Transforming complex supply chain data into clear, actionable intelligence that drives better outcomes."
    }
  ];

  return (
    <section id="mission" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering organizations with supply chain intelligence that transforms risk into 
            strategic foresight, enabling confident decision-making in an increasingly complex global economy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Mission Statement */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Building Resilient Supply Chains
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As supply chains become increasingly global and complex, Red Launch Technologies 
              simplifies the chaos by turning risk into strategic foresight. We combine real-time 
              data analytics, geospatial mapping, and interactive visualizations to empower decision-makers.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our platform serves procurement teams, compliance officers, and supply chain executives 
              across aerospace, defense, manufacturing, and energy sectors—industries that demand 
              precision, security, and adaptability.
            </p>
            <Button className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90 neon-glow" asChild>
              <a href="/products">Learn More About Our Platform</a>
            </Button>
          </div>

          {/* Values Grid */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 bg-card/80 backdrop-blur-sm border border-border hover:bg-card/90 transition-all duration-300 hover:neon-glow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;