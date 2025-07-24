import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Globe, TrendingUp, Users, Target, MapPin } from "lucide-react";
import heroCinematic from "@/assets/hero-cinematic.jpg";

const Hero = () => {
  return (
    <>
      {/* 1. Hero Section: Create Instant Impact */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-no-repeat bg-center bg-cover"
          style={{ 
            backgroundImage: `url(${heroCinematic})`,
          }}
        >
          <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
        </div>
        
        {/* Tech Grid Overlay */}
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto animate-fade-in">
            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl font-bold font-serif text-foreground mb-8 leading-tight">
              Transforming Global
              <span className="block text-primary glow-effect">
                Supply Chains
              </span>
              <span className="block text-lg md:text-xl font-sans font-normal text-muted-foreground mt-6">
                with Clarity, Speed, and Purpose
              </span>
            </h1>
            
            {/* Subheading */}
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-sans font-light">
              Red Launch enables mission-critical decisions with real-time intelligence and predictive insights.
            </h2>
            
            {/* Strong Primary CTA Button */}
            <Button 
              size="lg" 
              className="group px-12 py-8 text-xl bg-brand-red hover:bg-brand-red/80 text-brand-red-foreground font-semibold shadow-2xl hover:shadow-brand-red/25 transition-all duration-300 transform hover:scale-105"
            >
              Experience the Impact
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Showcase Core Work - Mission Sections */}
      <section className="bg-gradient-to-b from-background to-muted/20">
        {/* Mission 1: Predictive Disruption Avoidance */}
        <div className="relative min-h-screen flex items-center border-t border-border">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent"></div>
          <div className="relative z-10 container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-4">
                  <h2 className="text-5xl md:text-6xl font-bold font-serif text-foreground">
                    Mission 1: Predictive
                    <span className="block text-primary">Disruption Avoidance</span>
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Our AI-powered platform identifies supply chain vulnerabilities before they become critical failures. 
                    We transform scattered data into actionable intelligence that protects your operations.
                  </p>
                </div>
                <div className="flex flex-wrap gap-6">
                  <div className="bg-brand-red/10 border border-brand-red/20 rounded-lg px-6 py-3">
                    <span className="text-brand-red font-bold text-lg">$50M revenue protected</span>
                  </div>
                  <div className="bg-brand-red/10 border border-brand-red/20 rounded-lg px-6 py-3">
                    <span className="text-brand-red font-bold text-lg">20% supply chain delays avoided</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-card/60 rounded-2xl p-8 backdrop-blur-sm border border-border shadow-2xl">
                  <Shield className="w-16 h-16 text-primary mb-6" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">Real-Time Risk Assessment</h3>
                  <p className="text-muted-foreground">Continuous monitoring and predictive analytics ensure your supply chain stays resilient against global disruptions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission 2: Global Intelligence Network */}
        <div className="relative min-h-screen flex items-center border-t border-border">
          <div className="absolute inset-0 bg-gradient-to-l from-background via-background/95 to-transparent"></div>
          <div className="relative z-10 container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="bg-card/60 rounded-2xl p-8 backdrop-blur-sm border border-border shadow-2xl">
                  <Globe className="w-16 h-16 text-primary mb-6" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">Global Visibility Platform</h3>
                  <p className="text-muted-foreground">Map your entire supply network with real-time tracking across all tiers and geographical regions.</p>
                </div>
              </div>
              <div className="space-y-8 animate-fade-in order-1 lg:order-2">
                <div className="space-y-4">
                  <h2 className="text-5xl md:text-6xl font-bold font-serif text-foreground">
                    Mission 2: Global
                    <span className="block text-primary">Intelligence Network</span>
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Connect every node in your supply chain with unprecedented visibility. 
                    Our platform reveals hidden dependencies and critical pathways across global operations.
                  </p>
                </div>
                <div className="flex flex-wrap gap-6">
                  <div className="bg-brand-red/10 border border-brand-red/20 rounded-lg px-6 py-3">
                    <span className="text-brand-red font-bold text-lg">5,000+ suppliers mapped</span>
                  </div>
                  <div className="bg-brand-red/10 border border-brand-red/20 rounded-lg px-6 py-3">
                    <span className="text-brand-red font-bold text-lg">99.9% uptime guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission 3: Strategic Decision Engine */}
        <div className="relative min-h-screen flex items-center border-t border-border">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent"></div>
          <div className="relative z-10 container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-4">
                  <h2 className="text-5xl md:text-6xl font-bold font-serif text-foreground">
                    Mission 3: Strategic
                    <span className="block text-primary">Decision Engine</span>
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Transform complex supply chain data into clear, actionable strategies. 
                    Our decision engine empowers leadership with confidence in critical moments.
                  </p>
                </div>
                <div className="flex flex-wrap gap-6">
                  <div className="bg-brand-red/10 border border-brand-red/20 rounded-lg px-6 py-3">
                    <span className="text-brand-red font-bold text-lg">40% faster decision making</span>
                  </div>
                  <div className="bg-brand-red/10 border border-brand-red/20 rounded-lg px-6 py-3">
                    <span className="text-brand-red font-bold text-lg">85% accuracy improvement</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-card/60 rounded-2xl p-8 backdrop-blur-sm border border-border shadow-2xl">
                  <TrendingUp className="w-16 h-16 text-primary mb-6" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">AI-Powered Analytics</h3>
                  <p className="text-muted-foreground">Advanced algorithms process millions of data points to deliver precise recommendations when you need them most.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission and Value Proposition */}
      <section className="bg-gradient-to-b from-muted/20 to-background py-32 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center space-y-16 animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-bold font-serif text-foreground">
              We don't just manage risk.
              <span className="block text-primary mt-4">We redefine resilience.</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-6">
                <Target className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-2xl font-bold text-foreground">Real-time insights powered by predictive AI</h3>
                <p className="text-muted-foreground">Advanced machine learning algorithms process global data streams to predict and prevent supply chain disruptions before they occur.</p>
              </div>
              <div className="space-y-6">
                <Shield className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-2xl font-bold text-foreground">Military-grade reliability and traceability</h3>
                <p className="text-muted-foreground">Built to defense standards with complete audit trails and security protocols that meet the most stringent requirements.</p>
              </div>
              <div className="space-y-6">
                <TrendingUp className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-2xl font-bold text-foreground">Actionable impact in real-world supply dynamics</h3>
                <p className="text-muted-foreground">Transform complex data into clear actions that directly improve your supply chain performance and bottom line.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Visual "Product Lives Here": Show the Platform */}
      <section className="bg-background py-32 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold font-serif text-foreground mb-8">
                Operational Intelligence
                <span className="block text-primary">in Action</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience how our platform transforms raw supply chain data into strategic advantage through immersive visualization and real-time analytics.
              </p>
            </div>
            
            {/* Platform Mockup */}
            <div className="relative bg-card/40 rounded-3xl p-12 backdrop-blur-sm border border-border shadow-2xl">
              <div className="absolute top-6 left-6 flex space-x-3">
                <div className="w-4 h-4 rounded-full bg-brand-red"></div>
                <div className="w-4 h-4 rounded-full bg-primary/60"></div>
                <div className="w-4 h-4 rounded-full bg-muted"></div>
              </div>
              
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-background/50 rounded-xl p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
                    <MapPin className="w-5 h-5 text-primary mr-2" />
                    Global Supply Network
                  </h3>
                  <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center border border-border">
                    <div className="text-center space-y-4">
                      <Globe className="w-16 h-16 text-primary mx-auto animate-pulse" />
                      <p className="text-muted-foreground">Interactive supply chain visualization</p>
                      <div className="flex justify-center space-x-4">
                        <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                        <div className="w-3 h-3 rounded-full bg-brand-red animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-3 h-3 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-background/50 rounded-xl p-6 border border-border">
                    <h4 className="text-sm font-bold text-muted-foreground mb-3">RISK ALERTS</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-brand-red"></div>
                        <span className="text-sm text-foreground">High risk: Tier 2 supplier</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-sm text-foreground">Medium risk: Weather delay</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-background/50 rounded-xl p-6 border border-border">
                    <h4 className="text-sm font-bold text-muted-foreground mb-3">LIVE METRICS</h4>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-primary">98.7%</div>
                      <div className="text-sm text-muted-foreground">Supply Chain Health</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Overlay Banner */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-brand-red text-brand-red-foreground px-8 py-3 rounded-full shadow-lg">
                  <span className="font-bold">Operational Intelligence in Action</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Metrics of Change */}
      <section className="bg-gradient-to-b from-background to-muted/20 py-32 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold font-serif text-foreground mb-20">
              Metrics of
              <span className="block text-primary">Change</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="animate-fade-in space-y-6">
                <Users className="w-16 h-16 text-primary mx-auto" />
                <div className="text-6xl font-bold text-foreground">5,000+</div>
                <p className="text-xl text-muted-foreground">supplier profiles onboarded</p>
              </div>
              
              <div className="animate-fade-in space-y-6" style={{ animationDelay: '0.2s' }}>
                <TrendingUp className="w-16 h-16 text-primary mx-auto" />
                <div className="text-6xl font-bold text-foreground">300K</div>
                <p className="text-xl text-muted-foreground">risk events analyzed</p>
              </div>
              
              <div className="animate-fade-in space-y-6" style={{ animationDelay: '0.4s' }}>
                <Shield className="w-16 h-16 text-primary mx-auto" />
                <div className="text-6xl font-bold text-foreground">40%</div>
                <p className="text-xl text-muted-foreground">fewer disruptions in 6 months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="bg-muted/20 py-32 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold font-serif text-foreground text-center mb-20">
              Client
              <span className="block text-primary">Voices</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-16">
              <div className="bg-card/60 rounded-2xl p-12 backdrop-blur-sm border border-border animate-fade-in">
                <div className="mb-8">
                  <div className="w-16 h-16 rounded-full bg-primary/20 mb-6"></div>
                  <blockquote className="text-2xl text-foreground font-serif leading-relaxed mb-6">
                    "Red Launch changed how we manage our entire global chain—day one."
                  </blockquote>
                  <cite className="text-muted-foreground">
                    — Supply Chain Director, Major OEM
                  </cite>
                </div>
              </div>
              
              <div className="bg-card/60 rounded-2xl p-12 backdrop-blur-sm border border-border animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="mb-8">
                  <div className="w-16 h-16 rounded-full bg-primary/20 mb-6"></div>
                  <blockquote className="text-2xl text-foreground font-serif leading-relaxed mb-6">
                    "The visibility we gained was immediate and transformational for our risk management."
                  </blockquote>
                  <cite className="text-muted-foreground">
                    — Chief Operations Officer, Defense Contractor
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bold Call to Action & Subscription Prompt */}
      <section className="bg-gradient-to-b from-muted/20 to-background py-32 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center space-y-12 animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-bold font-serif text-foreground">
              See the Force Behind
              <span className="block text-primary mt-4">Your Supply Chain</span>
            </h2>
            
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform uncertainty into strategic advantage? 
              Experience the platform that's redefining supply chain intelligence.
            </p>
            
            <div className="space-y-8">
              <Button 
                size="lg" 
                className="px-16 py-8 text-2xl bg-brand-red hover:bg-brand-red/80 text-brand-red-foreground font-bold shadow-2xl hover:shadow-brand-red/25 transition-all duration-300 transform hover:scale-105"
              >
                Request a Personalized Demo
              </Button>
              
              <div className="max-w-md mx-auto">
                <p className="text-muted-foreground mb-4">Stay ahead—get strategic insights delivered monthly.</p>
                <div className="flex space-x-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  />
                  <Button variant="outline" className="px-6 py-3">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;