import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Careers = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    
    {/* Hero Section */}
    <main className="flex-1 pt-32 pb-16">
      <section className="container mx-auto px-6 max-w-4xl">
        <div className="text-center pt-24 pb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">Join the Mission</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            We build systems that protect national security. No bureaucracy. No politics. Just results.
          </p>
        </div>

        {/* Why Join Red Launch */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Red Launch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-neutral-900 p-4 rounded-xl shadow border-border hover:border-primary transition-all">
              <CardContent className="p-0">
                <h4 className="text-xl font-semibold text-white mb-2">Defense First</h4>
                <p className="text-neutral-300 text-sm">Build systems that protect national security and critical infrastructure.</p>
              </CardContent>
            </Card>
            <Card className="bg-neutral-900 p-4 rounded-xl shadow border-border hover:border-primary transition-all">
              <CardContent className="p-0">
                <h4 className="text-xl font-semibold text-white mb-2">Mission Critical</h4>
                <p className="text-neutral-300 text-sm">Solve real problems with real consequences. No room for failure.</p>
              </CardContent>
            </Card>
            <Card className="bg-neutral-900 p-4 rounded-xl shadow border-border hover:border-primary transition-all">
              <CardContent className="p-0">
                <h4 className="text-xl font-semibold text-white mb-2">Secure Systems</h4>
                <p className="text-neutral-300 text-sm">Design and deploy mission-critical software with enterprise-grade security.</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg text-neutral-300 mb-4">
              We operate with urgency, autonomy, and high trust. No layers of bureaucracy—just sharp execution.
            </p>
            <p className="text-lg text-neutral-300">
              Your work will matter. Your code will protect lives.
            </p>
          </div>
        </div>

        {/* Open Roles Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Software Engineer */}
            <div className="bg-neutral-900 p-6 rounded-xl shadow border-border hover:border-primary transition-all">
              <h3 className="text-2xl font-semibold text-white mb-4">Software Engineer</h3>
              <div className="space-y-4">
                <div className="hover:border hover:border-primary p-3 rounded-lg transition-all">
                  <h4 className="font-semibold text-white text-sm mb-1">Full Stack Engineer</h4>
                  <p className="text-neutral-300 text-xs">Build systems that operators trust in combat. React, Node.js, Python. No room for error.</p>
                </div>
              </div>
            </div>

            {/* Forward Deployed Engineer */}
            <div className="bg-neutral-900 p-6 rounded-xl shadow border-border hover:border-primary transition-all">
              <h3 className="text-2xl font-semibold text-white mb-4">Forward Deployed Engineer</h3>
              <div className="space-y-4">
                <div className="hover:border hover:border-primary p-3 rounded-lg transition-all">
                  <h4 className="font-semibold text-white text-sm mb-1">Client Solutions Engineer</h4>
                  <p className="text-neutral-300 text-xs">Deploy with defense clients. Bridge tech and reality. Mission-critical value.</p>
                </div>
              </div>
            </div>

            {/* Product Developer */}
            <div className="bg-neutral-900 p-6 rounded-xl shadow border-border hover:border-primary transition-all">
              <h3 className="text-2xl font-semibold text-white mb-4">Product Developer</h3>
              <div className="space-y-4">
                <div className="hover:border hover:border-primary p-3 rounded-lg transition-all">
                  <h4 className="font-semibold text-white text-sm mb-1">Product Manager</h4>
                  <p className="text-neutral-300 text-xs">Own product strategy for defense. Translate real challenges into features that matter.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Internships Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Internships</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-neutral-900 p-6 rounded-xl shadow border-border hover:border-primary transition-all">
                <h4 className="text-xl font-semibold text-white mb-4">Forward Deployed Intern</h4>
                <p className="text-neutral-300 text-sm">Deploy technology in real defense environments. Learn the intersection of software and national security.</p>
              </div>
              <div className="bg-neutral-900 p-6 rounded-xl shadow border-border hover:border-primary transition-all">
                <h4 className="text-xl font-semibold text-white mb-4">Product Developer Intern</h4>
                <p className="text-neutral-300 text-sm">Build mission-critical applications. Learn to create software that operators depend on.</p>
              </div>
            </div>
          </div>

          {/* Don't See Your Role? CTA */}
          <div className="bg-neutral-950 text-center p-8 rounded-xl mt-10 border border-border">
            <h4 className="text-xl font-semibold text-white mb-2">Not Listed?</h4>
            <p className="text-neutral-300 mb-4">If you're a world-class builder with defense, IC, or logistics experience — we want you.</p>
            <a href="mailto:careers@redlaunch.com" className="text-primary underline font-semibold hover:text-primary/80 transition-colors">
              👉 careers@redlaunch.com
            </a>
          </div>
        </div>

        {/* Culture Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Our Culture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span className="text-neutral-200">Mission-first. Ego-free. Execution-oriented.</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span className="text-neutral-200">High trust. High autonomy. High impact.</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span className="text-neutral-200">Direct customer feedback. Rapid iteration.</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span className="text-neutral-200">Technical excellence. Operational pragmatism.</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span className="text-neutral-200">Real-time supply chain intelligence platform.</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span className="text-neutral-200">AI-powered risk assessment and prediction.</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span className="text-neutral-200">Compliance monitoring and automated reporting.</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span className="text-neutral-200">Geographic and geopolitical risk mapping.</span>
              </div>
            </div>
          </div>
        </div>

        {/* How We Hire */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">How We Hire</h2>
          <p className="text-lg text-neutral-300 text-center max-w-3xl mx-auto">
            We look for builders who think clearly, move fast, and build with purpose. 
            Technical excellence matters. Mission alignment matters more.
          </p>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 neon-text">Ready to Serve?</h2>
          <p className="text-lg text-neutral-300 mb-6 max-w-2xl mx-auto">
            Join a team that builds systems that protect lives. No politics. No bureaucracy. Just results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:careers@redlaunch.com" className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow hover:bg-primary/90 transition neon-glow">Apply Now</a>
            <a href="/contact" className="inline-block px-8 py-4 bg-card text-foreground font-semibold rounded-lg shadow border border-border hover:bg-accent hover:text-accent-foreground transition">Contact Us</a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Careers; 