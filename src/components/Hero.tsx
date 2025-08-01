import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-no-repeat bg-center"
          style={{ 
            backgroundImage: `url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/e8490e49740753.5608692c56564.png')`,
            backgroundSize: 'contain',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        </div>
        {/* Tech Grid Overlay */}
        <div className="absolute inset-0 tech-grid opacity-40"></div>
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-20 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-card/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8 neon-glow">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Supply Chain Intelligence Platform
              </span>
            </div>
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground mb-8 leading-tight">
              Redefining
              <span className="block text-primary neon-text">
                National Supply Chain Security
              </span>
            </h1>
            {/* Subheading */}
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              Our real-time AI platform identifies, visualizes, and mitigates supply chain threats for defense, aerospace, and critical manufacturing sectors.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <Button size="lg" className="group px-10 py-8 text-lg bg-primary text-primary-foreground hover:bg-primary/90 neon-glow">
                Explore Our Platform
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="px-10 py-8 text-lg border-border text-foreground hover:bg-accent hover:text-accent-foreground">
                Request Demo
              </Button>
            </div>
          </div>
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 3-Outcome Grid Section */}
      <section id="outcomes" className="container mx-auto px-4 md:px-20 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-muted hover:border-primary transition-all bg-secondary/5 hover:bg-secondary/10">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Mission Continuity</h3>
            <p className="text-muted-foreground leading-relaxed">
              Prevent disruption to weapons production, critical infrastructure, and battlefield readiness by acting on vulnerabilities before they escalate.
            </p>
          </div>
          
          <div className="p-6 rounded-xl border border-muted hover:border-primary transition-all bg-secondary/5 hover:bg-secondary/10">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Supply Chain Readiness</h3>
            <p className="text-muted-foreground leading-relaxed">
              Maintain uninterrupted flow of compliant, secure, and verified materials through automated monitoring of high-risk suppliers.
            </p>
          </div>
          
          <div className="p-6 rounded-xl border border-muted hover:border-primary transition-all bg-secondary/5 hover:bg-secondary/10">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Strategic Autonomy</h3>
            <p className="text-muted-foreground leading-relaxed">
              Reduce reliance on foreign-owned subcontractors through traceable, tiered visibility into your defense supplier base.
            </p>
          </div>
        </div>
      </section>
      
      {/* New Section Below Home Page */}
      <section className="min-h-screen bg-background flex items-center justify-center border-t border-border pt-32">
        <div className="w-full max-w-6xl px-4 md:px-20 py-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-8 text-center leading-tight">What Is Red Launch?</h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 text-center max-w-4xl mx-auto leading-relaxed">
            Red Launch Technologies is a B2B SaaS company specializing in supplier risk management and supply chain intelligence. Built for high-stakes industries like defense, aerospace, manufacturing, and energy, our platform enables teams to:
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card/80 rounded-2xl p-6 shadow border border-border flex flex-col items-center hover:neon-glow hover:border-primary transition-all duration-300">
              <span className="text-3xl md:text-4xl font-extrabold text-primary mb-4 neon-text">1. Identify & Monitor</span>
              <p className="text-muted-foreground text-center text-lg leading-relaxed">Detect supplier weaknesses before they cause mission disruption. From financial instability to compliance gaps — we surface what matters.</p>
            </div>
            <div className="bg-card/80 rounded-2xl p-6 shadow border border-border flex flex-col items-center hover:neon-glow hover:border-primary transition-all duration-300">
              <span className="text-3xl md:text-4xl font-extrabold text-primary mb-4 neon-text">2. Visualize Disruptions</span>
              <p className="text-muted-foreground text-center text-lg leading-relaxed">AI-powered disruption maps that reveal hotspots, chokepoints, and cascading impacts across global networks.</p>
            </div>
            <div className="bg-card/80 rounded-2xl p-6 shadow border border-border flex flex-col items-center hover:neon-glow hover:border-primary transition-all duration-300">
              <span className="text-3xl md:text-4xl font-extrabold text-primary mb-4 neon-text">3. Real-Time Decisions</span>
              <p className="text-muted-foreground text-center text-lg leading-relaxed">Get proactive insights — not just alerts. Automate escalation, rerouting, and resource allocation based on live threat intel.</p>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground text-center mb-12">We don't just monitor risk. We make it visible, understandable, and actionable.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-8 mt-12">
            <a href="#" className="px-10 py-6 bg-primary text-primary-foreground font-bold rounded-lg shadow hover:bg-primary/90 transition text-xl neon-glow">Explore Our Platform</a>
            <a href="#" className="px-10 py-6 bg-card text-foreground font-bold rounded-lg shadow border border-border hover:bg-accent hover:text-accent-foreground transition text-xl">Request Demo</a>
          </div>
        </div>
      </section>
      
      {/* Credibility Enhancer Section */}
      <section id="credibility" className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Trusted by leaders in defense, aerospace, and manufacturing
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 text-lg">
            From defense primes to emerging suppliers, Red Launch helps organizations secure their supply chains with precision and speed.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
            <div className="flex flex-col items-center">
              <div className="w-32 h-12 bg-muted rounded shadow mb-2"></div>
              <span className="text-sm text-muted-foreground">Lockheed Martin</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-32 h-12 bg-muted rounded shadow mb-2"></div>
              <span className="text-sm text-muted-foreground">Raytheon</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-32 h-12 bg-muted rounded shadow mb-2"></div>
              <span className="text-sm text-muted-foreground">Boeing</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-32 h-12 bg-muted rounded shadow mb-2"></div>
              <span className="text-sm text-muted-foreground">L3Harris</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-32 h-12 bg-muted rounded shadow mb-2"></div>
              <span className="text-sm text-muted-foreground">U.S. Department of Defense</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Platform Overview Section */}
      <section id="platform" className="py-24 border-t border-border bg-background">
        <div className="container mx-auto px-4 md:px-20">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-center">
            The Red Launch Platform
          </h2>
          <p className="text-muted-foreground text-center text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            Built for real-world complexity — Red Launch fuses compliance data, geopolitical threat signals, and AI to detect and prevent mission-critical supply chain risks.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary/5 hover:bg-secondary/10 border border-border rounded-xl p-8 transition-all hover:border-primary">
              <div className="w-12 h-12 bg-muted rounded mb-4"></div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">Compliance & Security Monitoring</h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                Track DFARS, ITAR, and CMMC compliance across your supplier base in real-time — with instant alerts for any deviation or emerging threat.
              </p>
            </div>
            
            <div className="bg-secondary/5 hover:bg-secondary/10 border border-border rounded-xl p-8 transition-all hover:border-primary">
              <div className="w-12 h-12 bg-muted rounded mb-4"></div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">AI-Powered Disruption Intelligence</h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                Forecast supply interruptions using machine learning trained on defense sector logistics, political instability, cyberthreats, and vendor health.
              </p>
            </div>
            
            <div className="bg-secondary/5 hover:bg-secondary/10 border border-border rounded-xl p-8 transition-all hover:border-primary">
              <div className="w-12 h-12 bg-muted rounded mb-4"></div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">Mission-Critical Traceability</h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                Drill down into the tiered structure of your global supplier network to identify hidden vulnerabilities and ensure readiness at every level.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Third Section Below Home Page */}
      <section className="min-h-screen bg-background flex items-center justify-center border-t border-border pt-32">
        <div className="w-full max-w-6xl px-4 md:px-20 py-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-12 text-center leading-tight">Core Platform Overview</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card/80 rounded-xl p-8 shadow border border-border flex flex-col hover:neon-glow transition-all duration-300">
              <span className="text-primary font-extrabold text-xl md:text-2xl mb-4 neon-text">Supplier Risk Assessment</span>
              <ul className="list-disc list-inside text-muted-foreground text-base mb-4">
                <li>Aggregates internal & external risk data</li>
                <li>Calculates live risk scores, auto-triggers alerts</li>
                <li>Enables faster vendor vetting, auditing, onboarding</li>
              </ul>
              <span className="text-sm text-muted-foreground">Ex: Flag a financially downgraded Tier 2 supplier before it disrupts production.</span>
            </div>
            <div className="bg-card/80 rounded-xl p-8 shadow border border-border flex flex-col hover:neon-glow transition-all duration-300">
              <span className="text-primary font-extrabold text-xl md:text-2xl mb-4 neon-text">Geographical Tracker</span>
              <ul className="list-disc list-inside text-muted-foreground text-base mb-4">
                <li>Interactive map with real-time risk overlays</li>
                <li>Highlights vulnerable supplier nodes/regions</li>
                <li>Enables proactive route planning, emergency response</li>
              </ul>
              <span className="text-sm text-muted-foreground">Ex: Hurricane forecasted — instantly reroute around affected shipping zones.</span>
            </div>
            <div className="bg-card/80 rounded-xl p-8 shadow border border-border flex flex-col hover:neon-glow transition-all duration-300">
              <span className="text-primary font-extrabold text-xl md:text-2xl mb-4 neon-text">Supplier Risk Visualization Map (Coming Soon)</span>
              <ul className="list-disc list-inside text-muted-foreground text-base mb-4">
                <li>Trace material flow and risk across tiers</li>
                <li>Detect bottlenecks and Tier-N dependencies</li>
                <li>Gain true supply chain intelligence</li>
              </ul>
              <span className="text-sm text-muted-foreground">Ex: Visualize which lines are impacted by a Tier 3 supplier delay.</span>
            </div>
          </div>
          <div className="bg-card/80 rounded-2xl p-10 md:p-16 border border-border mb-16 neon-glow">
            <h3 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 text-center">Unified Workflow in Action</h3>
            <ul className="list-disc list-inside text-muted-foreground text-lg mb-6 max-w-4xl mx-auto">
              <li>Risk Assessment detects a cybersecurity breach in a chipmaker</li>
              <li>Geographical Tracker shows they're in a conflict zone</li>
              <li>Visualization Map reveals impact on three defense contracts</li>
              <li>You're alerted, activate backups, and reroute within hours</li>
            </ul>
            <p className="text-center text-primary font-bold text-xl neon-text">→ A multi-million-dollar delay is averted.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h4 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">Why Red Launch Is Different</h4>
              <ul className="list-disc list-inside text-muted-foreground text-lg">
                <li>Designed for speed, security, and scale</li>
                <li>Offers Tier-N visibility — even without direct relationships</li>
                <li>Turns fragmented data into real-time intelligence</li>
                <li>Built for mission-critical sectors</li>
              </ul>
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">Built for Teams Like Yours</h4>
              <ul className="list-disc list-inside text-muted-foreground text-lg">
                <li>Fortune 500 manufacturers</li>
                <li>Aerospace & defense contractors</li>
                <li>Automotive OEMs</li>
                <li>Critical infrastructure providers</li>
                <li>Medical device & pharma supply chains</li>
              </ul>
            </div>
          </div>
          <div className="bg-card/80 rounded-2xl p-10 md:p-16 border border-border mb-16">
            <h3 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 text-center">Client Pain Points → Our Solutions</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-muted-foreground">
                <thead>
                  <tr>
                    <th className="py-3 px-6 font-bold text-lg">Pain Point</th>
                    <th className="py-3 px-6 font-bold text-lg">Red Launch Solution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-6 text-lg">"We can't see where our risks are."</td>
                    <td className="py-3 px-6 text-lg">Unified dashboard with real-time visibility</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-6 text-lg">"We were blindsided by a Tier 2 delay."</td>
                    <td className="py-3 px-6 text-lg">Multi-tier mapping + proactive alerts</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-6 text-lg">"We waste weeks on compliance reports."</td>
                    <td className="py-3 px-6 text-lg">Automated scoring and documentation</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-6 text-lg">"We need to show the board we're resilient."</td>
                    <td className="py-3 px-6 text-lg">Visual tools that prove readiness and ROI</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="text-center mt-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 neon-text">Ready to Launch?</h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">See how Red Launch can help you move faster, avoid blind spots, and stay mission-ready.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-8 mt-10">
              <a href="#" className="px-10 py-6 bg-primary text-primary-foreground font-bold rounded-lg shadow hover:bg-primary/90 transition text-xl neon-glow">Request a Demo</a>
              <a href="#" className="px-10 py-6 bg-card text-foreground font-bold rounded-lg shadow border border-border hover:bg-accent hover:text-accent-foreground transition text-xl">Explore the Platform</a>
              <a href="/careers" className="px-10 py-6 bg-card text-foreground font-bold rounded-lg shadow border border-border hover:bg-accent hover:text-accent-foreground transition text-xl">Join Our Team</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section id="cta" className="py-32 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-20 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Secure the Mission. Start with Red Launch.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you're safeguarding aerospace operations, mission-critical manufacturing, or national security supply chains — Red Launch delivers the visibility and control you need.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <button className="bg-primary text-background hover:bg-primary/90 font-semibold px-6 py-3 rounded-lg shadow-md transition-all">
              Talk to Defense Sales
            </button>
            <button className="border border-primary text-primary hover:bg-primary/10 font-semibold px-6 py-3 rounded-lg transition-all">
              Request Technical Demo
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;