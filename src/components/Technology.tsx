import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, MapPin, Network, AlertTriangle } from "lucide-react";

const Technology = () => {
  const technologies = [
    {
      icon: AlertTriangle,
      title: "Supplier Risk Assessment",
      description: "Real-time risk scoring and monitoring across your entire supplier ecosystem.",
      features: ["Live risk scoring", "Compliance alignment", "Audit trails"]
    },
    {
      icon: MapPin,
      title: "Geographical Tracker",
      description: "Visual mapping of supplier locations with overlay of geopolitical and natural hazards.",
      features: ["Interactive maps", "Risk overlays", "Zone clustering"]
    },
    {
      icon: Network,
      title: "Supply Chain Intelligence",
      description: "End-to-end visualization of supply chain flows and risk propagation.",
      features: ["Flow diagrams", "Bottleneck analysis", "Real-time collaboration"]
    },
    {
      icon: BarChart3,
      title: "Risk Analytics",
      description: "Advanced analytics and predictive modeling for proactive risk management.",
      features: ["Predictive insights", "Trend analysis", "Custom dashboards"]
    }
  ];

  return (
    <section id="technology" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Platform Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our integrated platform combines real-time data analytics, geospatial intelligence, 
            and interactive visualizations to deliver comprehensive supply chain risk management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:bg-card/70 hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <tech.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {tech.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {tech.description}
                </p>
                <ul className="space-y-2">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Technology Highlight */}
        <div className="bg-gradient-to-r from-card/50 to-muted/30 rounded-2xl p-8 md:p-12 border border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Red Launch Platform
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our unified platform consolidates supplier data, maps risk flows, and provides 
                real-time visibility through an intuitive dashboard. Built for security, 
                scalability, and mission-critical reliability.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Real-time risk monitoring and alerts
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Automated threat detection and scoring
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Integrated collaboration and communication
                </li>
              </ul>
              <Button>
                Request Platform Demo
              </Button>
            </div>
            <div className="relative">
              <div className="bg-background/20 rounded-xl p-6 border border-border/50">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Risk Monitoring Active</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Data Streams Connected</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Intelligence Updated</span>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;