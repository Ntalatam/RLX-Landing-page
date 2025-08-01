import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Globe, Map, TrendingUp, AlertTriangle, Clock, Users, Zap } from "lucide-react";

const Products = () => {
  const features = [
    {
      icon: Shield,
      title: "Supplier Risk Assessment",
      description: "Real-time monitoring and scoring of supplier vulnerabilities with automated alerts and compliance tracking.",
      benefits: ["Live risk scoring", "Automated alerts", "Compliance tracking", "Vendor vetting"]
    },
    {
      icon: Globe,
      title: "Global Tracker",
      description: "Interactive geographical mapping with real-time risk overlays and disruption visualization.",
      benefits: ["Real-time mapping", "Risk overlays", "Route planning", "Emergency response"]
    },
    {
      icon: Map,
      title: "Intelligence Map",
      description: "Multi-tier supply chain visualization with dependency mapping and impact analysis.",
      benefits: ["Tier-N visibility", "Dependency mapping", "Impact analysis", "Bottleneck detection"]
    }
  ];

  const capabilities = [
    {
      icon: TrendingUp,
      title: "Real-Time Analytics",
      description: "Live data processing and risk scoring with instant alerts and notifications."
    },
    {
      icon: AlertTriangle,
      title: "Proactive Alerts",
      description: "Early warning system for potential disruptions and supply chain vulnerabilities."
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Continuous surveillance of global supply chains and risk factors."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Multi-user platform with role-based access and shared dashboards."
    },
    {
      icon: Zap,
      title: "Fast Integration",
      description: "Quick deployment with existing ERP and supply chain management systems."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      


      {/* Technology Overview Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-20">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-8 leading-tight">
              Platform Technology
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Advanced AI-powered supply chain intelligence platform designed for high-stakes industries requiring real-time risk management and operational resilience.
            </p>
          </div>

          {/* Core Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/80 hover:bg-card/90 hover:scale-105 hover:neon-glow transition-all duration-300 border border-border">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-muted-foreground text-base">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technology Highlight */}
          <div className="bg-card/80 rounded-2xl p-10 md:p-16 border border-border mb-20 neon-glow">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
                Technology Highlight
              </h3>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Our platform combines advanced machine learning algorithms with real-time data processing to deliver unprecedented visibility into supply chain risks.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6">
                  AI-Powered Risk Assessment
                </h4>
                <ul className="space-y-4 text-lg text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Machine learning models trained on millions of supply chain events</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Real-time data aggregation from 50+ global sources</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Predictive analytics for early risk detection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Automated compliance reporting and documentation</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6">
                  Advanced Visualization
                </h4>
                <ul className="space-y-4 text-lg text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Interactive 3D mapping of global supply networks</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Real-time risk heat maps and trend analysis</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Customizable dashboards for different user roles</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Mobile-responsive design for field operations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Platform Capabilities */}
          <div className="mb-20">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground text-center mb-12">
              Platform Capabilities
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <Card key={index} className="bg-card/80 hover:bg-card/90 hover:neon-glow transition-all duration-300 border border-border">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                      <capability.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl md:text-2xl font-extrabold text-foreground">
                      {capability.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                      {capability.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products; 