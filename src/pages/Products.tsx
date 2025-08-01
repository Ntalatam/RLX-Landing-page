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
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-20 text-center">
          <h1 className="text-6xl font-extrabold text-center mb-8 text-foreground">
            Explore Our Platform
          </h1>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            Each Red Launch product is engineered for mission continuity, risk mitigation, and strategic visibility across the U.S. defense supply chain.
          </p>
        </div>
      </section>

      {/* Technology Overview Section */}
      <section className="py-20 bg-background">
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

          {/* Technology CTA Section */}
          <div className="text-center mb-20">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow px-12 py-8 text-xl font-bold">
              Request Platform Demo
            </Button>
          </div>

          {/* Additional Technology Sections */}
          <div className="space-y-32">
            {/* Security & Compliance */}
            <section className="bg-background border-t border-border pt-32">
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-8">
                  Security & Compliance
                </h3>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Enterprise-grade security with SOC 2 Type II compliance, end-to-end encryption, and role-based access controls designed for defense and aerospace industries.
                </p>
              </div>
            </section>

            {/* Integration & API */}
            <section className="bg-background border-t border-border pt-32">
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-8">
                  Integration & API
                </h3>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Seamless integration with existing ERP systems, SAP, Oracle, and custom solutions through our comprehensive REST API and webhook system.
                </p>
              </div>
            </section>

            {/* Performance & Scalability */}
            <section className="bg-background border-t border-border pt-32">
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-8">
                  Performance & Scalability
                </h3>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Cloud-native architecture supporting millions of data points with 99.9% uptime SLA and global CDN for lightning-fast performance worldwide.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Supplier Risk Assessment */}
      <section id="supplier-risk" className="py-24 border-t border-border bg-background" style={{ scrollMarginTop: '6rem' }}>
        <div className="container mx-auto px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
            <div>
              <h2 className="text-5xl font-extrabold text-foreground mb-6">
                Supplier Risk Assessment
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Analyze and monitor your entire supplier base with tiered visibility, risk scoring, and automated red-flag escalation. Built to meet U.S. defense compliance standards.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Real-time risk scoring and monitoring</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Automated compliance tracking (DFARS, ITAR, CMMC)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Tier-N supplier visibility and mapping</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Instant alert escalation for critical risks</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-xl h-64 bg-muted rounded-xl shadow-md flex items-center justify-center">
                <span className="text-muted-foreground text-lg">Supplier Risk Assessment Platform</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geographical Tracker */}
      <section id="geo-tracker" className="py-24 border-t border-border bg-background" style={{ scrollMarginTop: '6rem' }}>
        <div className="container mx-auto px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
            <div className="order-2 md:order-1 flex justify-center">
              <div className="w-full max-w-xl h-64 bg-muted rounded-xl shadow-md flex items-center justify-center">
                <span className="text-muted-foreground text-lg">Geographical Tracker Platform</span>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-5xl font-extrabold text-foreground mb-6">
                Geographical Tracker
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                A live global view of supplier dependencies and disruption hotspots. Trace geopolitical events, climate risk, or material chokepoints in real time.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Interactive global supply chain mapping</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Real-time geopolitical risk overlays</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Climate and natural disaster tracking</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Material chokepoint identification</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Map */}
      <section id="intel-map" className="py-24 border-t border-border bg-background" style={{ scrollMarginTop: '6rem' }}>
        <div className="container mx-auto px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
            <div>
              <h2 className="text-5xl font-extrabold text-foreground mb-6">
                Intelligence Map
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Our AI-driven intelligence layer aggregates and analyzes signals from global news, logistics data, and open-source military intel — giving you a predictive edge.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">AI-powered threat intelligence aggregation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Predictive analytics for supply disruptions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Open-source military intelligence integration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Machine learning risk forecasting</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-xl h-64 bg-muted rounded-xl shadow-md flex items-center justify-center">
                <span className="text-muted-foreground text-lg">Intelligence Map Platform</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-border bg-background">
        <div className="container mx-auto px-4 md:px-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Secure Your Supply Chain?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            See how Red Launch's integrated platform can protect your mission-critical operations with real-time visibility and predictive intelligence.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <button className="bg-primary text-background hover:bg-primary/90 font-semibold px-8 py-4 rounded-lg shadow-md transition-all text-lg">
              Request Platform Demo
            </button>
            <button className="border border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-4 rounded-lg transition-all text-lg">
              Talk to Defense Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products; 