import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Shield, Zap } from "lucide-react";

const Mission = () => {
  const values = [
    {
      icon: Target,
      title: "Precision Engineering",
      description: "Every component is designed with exacting standards for mission-critical reliability."
    },
    {
      icon: Shield,
      title: "Proven Reliability",
      description: "Trusted by space agencies and private companies for the most demanding missions."
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Pushing the boundaries of what's possible in launch technology and space access."
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
            Transforming space access with advanced launch systems that enable 
            the next generation of space exploration and commercial missions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Mission Statement */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Enabling Tomorrow's Space Economy
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The space industry has evolved at unprecedented speed. To stay ahead, 
              RedLaunch Systems puts innovation ahead of convention and builds 
              technology to bring humanity quantum leaps forward in space capability.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our launch systems are engineered for reliability, efficiency, and 
              scalability to support everything from satellite deployments to 
              deep space missions.
            </p>
            <Button className="mt-6">
              Learn More About Our Mission
            </Button>
          </div>

          {/* Values Grid */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 bg-background/50 backdrop-blur-sm border-border hover:bg-background/70 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
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