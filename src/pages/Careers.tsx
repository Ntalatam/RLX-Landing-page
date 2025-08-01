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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">Work on What Matters</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Red Launch Systems builds mission-critical software to safeguard global supply chains, infrastructure, and defense networks. Our systems operate in the background—quietly, reliably—making sure the right data gets to the right people, at the right moment.<br/><br/>
            We aren't chasing hype. We're focused on precision, trust, and resilience in the places where failure isn't an option.<br/><br/>
            If that resonates with you, you might belong here.
          </p>
        </div>

        {/* Why Join Red Launch */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Join Red Launch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-neutral-900 p-4 rounded-xl shadow border-border hover:border-primary transition-all">
              <CardContent className="p-0">
                <h4 className="text-xl font-semibold text-white mb-2">Defense & Intelligence</h4>
                <p className="text-neutral-300 text-sm">Build systems that protect national security and critical infrastructure.</p>
              </CardContent>
            </Card>
            <Card className="bg-neutral-900 p-4 rounded-xl shadow border-border hover:border-primary transition-all">
              <CardContent className="p-0">
                <h4 className="text-xl font-semibold text-white mb-2">Supply Chain Risk</h4>
                <p className="text-neutral-300 text-sm">Solve complex logistics challenges with real-time intelligence and analytics.</p>
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
              Our team includes engineers, mission analysts, and former national security professionals who believe that software is now as strategic as steel. We operate with urgency, autonomy, and high trust. We don't do layers of bureaucracy—just sharp execution.
            </p>
            <p className="text-lg text-neutral-300">
              Whether you're writing distributed systems code, briefing operators, or designing real-time dashboards—your work will matter.
            </p>
          </div>
        </div>

        {/* Open Roles Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Open Roles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Software Engineer */}
            <div className="bg-neutral-900 p-6 rounded-xl shadow border-border hover:border-primary transition-all">
              <h3 className="text-2xl font-semibold text-white mb-4">Software Engineer</h3>
              <div className="space-y-4">
                <div className="hover:border hover:border-primary p-3 rounded-lg transition-all">
                  <h4 className="font-semibold text-white text-sm mb-1">Full Stack Engineer</h4>
                  <p className="text-neutral-300 text-xs">Build mission-critical applications that power real-time supply chain intelligence. Work with React, Node.js, Python, and cloud-native architectures to deliver software that operates in high-stakes environments.</p>
                </div>
                <div className="hover:border hover:border-primary p-3 rounded-lg transition-all">
                  <h4 className="font-semibold text-white text-sm mb-1">Machine Learning Engineer</h4>
                  <p className="text-neutral-300 text-xs">Design and deploy AI models for risk assessment, anomaly detection, and predictive analytics. Build systems that process millions of data points to identify threats before they impact operations.</p>
                </div>
                <div className="hover:border hover:border-primary p-3 rounded-lg transition-all">
                  <h4 className="font-semibold text-white text-sm mb-1">Data Engineer</h4>
                  <p className="text-neutral-300 text-xs">Architect secure, real-time data pipelines that aggregate intelligence from global sources. Build systems that transform raw data into actionable insights for defense and aerospace operations.</p>
                </div>
              </div>
            </div>

            {/* Forward Deployed Engineer */}
            <div className="bg-neutral-900 p-6 rounded-xl shadow border-border hover:border-primary transition-all">
              <h3 className="text-2xl font-semibold text-white mb-4">Forward Deployed Engineer</h3>
              <div className="space-y-4">
                <div className="hover:border hover:border-primary p-3 rounded-lg transition-all">
                  <h4 className="font-semibold text-white text-sm mb-1">Client Solutions Engineer</h4>
                  <p className="text-neutral-300 text-xs">Deploy directly with defense and aerospace clients. Bridge technical implementation with operational reality, ensuring our platform delivers mission-critical value in real-world scenarios.</p>
                </div>
                <div className="hover:border hover:border-primary p-3 rounded-lg transition-all">
                  <h4 className="font-semibold text-white text-sm mb-1">Integration Specialist</h4>
                  <p className="text-neutral-300 text-xs">Connect our platform with existing defense systems and infrastructure. Work with government clients to ensure seamless deployment and maximum operational impact.</p>
                </div>
                <div className="hover:border hover:border-primary p-3 rounded-lg transition-all">
                  <h4 className="font-semibold text-white text-sm mb-1">Field Operations Engineer</h4>
                  <p className="text-neutral-300 text-xs">Support critical operations in the field. Provide technical expertise during high-stakes deployments and ensure system reliability when failure isn't an option.</p>
                </div>
              </div>
            </div>

            {/* Product Developer */}
            <div className="bg-neutral-900 p-6 rounded-xl shadow border-border hover:border-primary transition-all">
              <h3 className="text-2xl font-semibold text-white mb-4">Product Developer</h3>
              <div className="space-y-4">
                <div className="hover:border hover:border-primary p-3 rounded-lg transition-all">
                  <h4 className="font-semibold text-white text-sm mb-1">Product Designer (UX/UI)</h4>
                  <p className="text-neutral-300 text-xs">Design interfaces for mission-critical operations. Create intuitive, responsive dashboards that operators can trust in high-pressure situations. Focus on clarity, speed, and reliability.</p>
                </div>
                <div className="hover:border hover:border-primary p-3 rounded-lg transition-all">
                  <h4 className="font-semibold text-white text-sm mb-1">Product Manager</h4>
                  <p className="text-neutral-300 text-xs">Own product strategy and roadmap for defense applications. Work directly with operators and engineers to translate real-world challenges into features that matter.</p>
                </div>
                <div className="hover:border hover:border-primary p-3 rounded-lg transition-all">
                  <h4 className="font-semibold text-white text-sm mb-1">DevSecOps Engineer</h4>
                  <p className="text-neutral-300 text-xs">Secure, deploy, and scale infrastructure in high-trust environments. Build systems that meet government security standards while maintaining operational flexibility.</p>
                </div>
              </div>
            </div>

            {/* Internships */}
            <div className="bg-neutral-900 p-6 rounded-xl shadow border-border hover:border-primary transition-all">
              <h3 className="text-2xl font-semibold text-white mb-4">Internships</h3>
              <div className="space-y-4">
                <div className="hover:border hover:border-primary p-3 rounded-lg transition-all">
                  <h4 className="font-semibold text-white text-sm mb-1">Forward Deployed Intern</h4>
                  <p className="text-neutral-300 text-xs">Gain hands-on experience deploying technology in real defense environments. Work alongside experienced engineers to understand the intersection of software and national security operations.</p>
                </div>
                <div className="hover:border hover:border-primary p-3 rounded-lg transition-all">
                  <h4 className="font-semibold text-white text-sm mb-1">Product Developer Intern</h4>
                  <p className="text-neutral-300 text-xs">Contribute to product development for mission-critical applications. Learn to build software that operators depend on in high-stakes environments while working with cutting-edge technology.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Don't See Your Role? CTA */}
          <div className="bg-neutral-950 text-center p-8 rounded-xl mt-10 border border-border">
            <h4 className="text-xl font-semibold text-white mb-2">Don't See Your Role?</h4>
            <p className="text-neutral-300 mb-4">If you're a world-class builder, technologist, or operator with defense, IC, or advanced logistics experience — we want to talk.</p>
            <a href="mailto:careers@redlaunch.com" className="text-primary underline font-semibold hover:text-primary/80 transition-colors">
              👉 Reach out at careers@redlaunch.com
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
                <span className="text-neutral-200">We are mission-first, ego-free, and execution-oriented.</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span className="text-neutral-200">We value clarity, speed, and technical excellence.</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span className="text-neutral-200">We operate with trust and accountability—no micromanagement.</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span className="text-neutral-200">We believe modern defense problems deserve modern software.</span>
              </div>
            </div>
          </div>
        </div>

        {/* How We Hire */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">How We Hire</h2>
          <p className="text-lg text-neutral-300 text-center max-w-3xl mx-auto">
            We run a fast, thoughtful hiring process designed to get to signal quickly. You'll meet engineers, founders, and operators. We hire for judgment, skill, and alignment with the mission—not for pedigree.
          </p>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 neon-text">Join Red Launch. Build Something That Endures.</h2>
          <div className="bg-neutral-950 p-8 rounded-xl border border-border">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to join the mission?</h3>
            <a href="mailto:careers@redlaunch.com" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary/90 transition-all neon-glow">
              Apply now →
            </a>
          </div>
        </div>
      </section>
    </main>
    
    <Footer />
  </div>
);

export default Careers; 