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
          <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
        </div>
        {/* Tech Grid Overlay */}
        <div className="absolute inset-0 tech-grid opacity-30"></div>
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Supply Chain Intelligence Platform
              </span>
            </div>
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Transforming
              <span className="block text-primary glow-effect">
                Supply Chain Risk
              </span>
            </h1>
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Real-time supplier risk intelligence and visualization tools that empower organizations 
              to identify vulnerabilities, optimize performance, and build resilient operations.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="group px-8 py-6 text-base">
                Explore Our Platform
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-base">
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
      {/* New Section Below Home Page */}
      <section className="min-h-screen bg-background flex items-center justify-center border-t border-border">
        <div className="w-full max-w-5xl px-6 py-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">What Is Red Launch?</h2>
          <p className="text-xl text-muted-foreground mb-10 text-center max-w-3xl mx-auto">
            Red Launch Technologies is a B2B SaaS company specializing in supplier risk management and supply chain intelligence. Built for high-stakes industries like defense, aerospace, manufacturing, and energy, our platform enables teams to:
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="bg-card/60 rounded-xl p-6 shadow flex flex-col items-center">
              <span className="text-2xl font-bold text-primary mb-2">1. Identify & Monitor</span>
              <p className="text-muted-foreground text-center">Identify and monitor supply chain vulnerabilities</p>
            </div>
            <div className="bg-card/60 rounded-xl p-6 shadow flex flex-col items-center">
              <span className="text-2xl font-bold text-primary mb-2">2. Visualize Disruptions</span>
              <p className="text-muted-foreground text-center">Visualize global disruptions and risk clusters</p>
            </div>
            <div className="bg-card/60 rounded-xl p-6 shadow flex flex-col items-center">
              <span className="text-2xl font-bold text-primary mb-2">3. Real-Time Decisions</span>
              <p className="text-muted-foreground text-center">Make real-time decisions to prevent downtime</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground text-center mb-8">We don’t just monitor risk. We make it visible, understandable, and actionable.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
            <a href="#" className="px-8 py-4 bg-primary text-background font-semibold rounded-lg shadow hover:bg-primary/80 transition text-lg">Explore Our Platform</a>
            <a href="#" className="px-8 py-4 bg-card text-foreground font-semibold rounded-lg shadow border border-border hover:bg-card/80 transition text-lg">Request Demo</a>
          </div>
        </div>
      </section>
      {/* Third Section Below Home Page */}
      <section className="min-h-screen bg-background flex items-center justify-center border-t border-border">
        <div className="w-full max-w-5xl px-6 py-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">Core Platform Overview</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card/60 rounded-xl p-6 shadow flex flex-col">
              <span className="text-primary font-bold text-lg mb-2">Supplier Risk Assessment</span>
              <ul className="list-disc list-inside text-muted-foreground text-sm mb-2">
                <li>Aggregates internal & external risk data</li>
                <li>Calculates live risk scores, auto-triggers alerts</li>
                <li>Enables faster vendor vetting, auditing, onboarding</li>
              </ul>
              <span className="text-xs text-muted-foreground">Ex: Flag a financially downgraded Tier 2 supplier before it disrupts production.</span>
            </div>
            <div className="bg-card/60 rounded-xl p-6 shadow flex flex-col">
              <span className="text-primary font-bold text-lg mb-2">Geographical Tracker</span>
              <ul className="list-disc list-inside text-muted-foreground text-sm mb-2">
                <li>Interactive map with real-time risk overlays</li>
                <li>Highlights vulnerable supplier nodes/regions</li>
                <li>Enables proactive route planning, emergency response</li>
              </ul>
              <span className="text-xs text-muted-foreground">Ex: Hurricane forecasted — instantly reroute around affected shipping zones.</span>
            </div>
            <div className="bg-card/60 rounded-xl p-6 shadow flex flex-col">
              <span className="text-primary font-bold text-lg mb-2">Supplier Risk Visualization Map (Coming Soon)</span>
              <ul className="list-disc list-inside text-muted-foreground text-sm mb-2">
                <li>Trace material flow and risk across tiers</li>
                <li>Detect bottlenecks and Tier-N dependencies</li>
                <li>Gain true supply chain intelligence</li>
              </ul>
              <span className="text-xs text-muted-foreground">Ex: Visualize which lines are impacted by a Tier 3 supplier delay.</span>
            </div>
          </div>
          <div className="bg-card/50 rounded-2xl p-8 md:p-12 border border-border mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Unified Workflow in Action</h3>
            <ul className="list-disc list-inside text-muted-foreground text-base mb-4 max-w-3xl mx-auto">
              <li>Risk Assessment detects a cybersecurity breach in a chipmaker</li>
              <li>Geographical Tracker shows they’re in a conflict zone</li>
              <li>Visualization Map reveals impact on three defense contracts</li>
              <li>You’re alerted, activate backups, and reroute within hours</li>
            </ul>
            <p className="text-center text-primary font-semibold">→ A multi-million-dollar delay is averted.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="text-xl font-bold text-foreground mb-2">Why Red Launch Is Different</h4>
              <ul className="list-disc list-inside text-muted-foreground text-base">
                <li>Designed for speed, security, and scale</li>
                <li>Offers Tier-N visibility — even without direct relationships</li>
                <li>Turns fragmented data into real-time intelligence</li>
                <li>Built for mission-critical sectors</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-foreground mb-2">Built for Teams Like Yours</h4>
              <ul className="list-disc list-inside text-muted-foreground text-base">
                <li>Fortune 500 manufacturers</li>
                <li>Aerospace & defense contractors</li>
                <li>Automotive OEMs</li>
                <li>Critical infrastructure providers</li>
                <li>Medical device & pharma supply chains</li>
              </ul>
            </div>
          </div>
          <div className="bg-card/50 rounded-2xl p-8 md:p-12 border border-border mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Client Pain Points → Our Solutions</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-muted-foreground">
                <thead>
                  <tr>
                    <th className="py-2 px-4 font-semibold">Pain Point</th>
                    <th className="py-2 px-4 font-semibold">Red Launch Solution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4">“We can’t see where our risks are.”</td>
                    <td className="py-2 px-4">Unified dashboard with real-time visibility</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">“We were blindsided by a Tier 2 delay.”</td>
                    <td className="py-2 px-4">Multi-tier mapping + proactive alerts</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">“We waste weeks on compliance reports.”</td>
                    <td className="py-2 px-4">Automated scoring and documentation</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">“We need to show the board we’re resilient.”</td>
                    <td className="py-2 px-4">Visual tools that prove readiness and ROI</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="text-center mt-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ready to Launch?</h2>
            <p className="text-lg text-muted-foreground mb-4">See how Red Launch can help you move faster, avoid blind spots, and stay mission-ready.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
              <a href="#" className="px-8 py-4 bg-primary text-background font-semibold rounded-lg shadow hover:bg-primary/80 transition text-lg">Request a Demo</a>
              <a href="#" className="px-8 py-4 bg-card text-foreground font-semibold rounded-lg shadow border border-border hover:bg-card/80 transition text-lg">Explore the Platform</a>
              <a href="/careers" className="px-8 py-4 bg-card text-foreground font-semibold rounded-lg shadow border border-border hover:bg-card/80 transition text-lg">Join Our Team</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;