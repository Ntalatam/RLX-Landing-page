import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Careers = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Header />
    <main className="flex-1 pt-24 pb-16">
      <section className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 text-center">Work on What Matters</h1>
        <p className="text-xl text-muted-foreground mb-12 text-center">
          Red Launch Systems builds mission-critical software to safeguard global supply chains, infrastructure, and defense networks. Our systems operate in the background—quietly, reliably—making sure the right data gets to the right people, at the right moment.<br/><br/>
          We aren’t chasing hype. We’re focused on precision, trust, and resilience in the places where failure isn’t an option.<br/><br/>
          If that resonates with you, you might belong here.
        </p>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Why Join Red Launch</h2>
          <ul className="list-disc list-inside text-lg text-muted-foreground mb-6">
            <li>Defense and intelligence</li>
            <li>Supply chain risk and logistics</li>
            <li>Data, autonomy, and secure systems</li>
          </ul>
          <p className="text-lg text-muted-foreground mb-4">
            Our team includes engineers, mission analysts, and former national security professionals who believe that software is now as strategic as steel. We operate with urgency, autonomy, and high trust. We don’t do layers of bureaucracy—just sharp execution.<br/><br/>
            Whether you’re writing distributed systems code, briefing operators, or designing real-time dashboards—your work will matter.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Open Roles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">Engineering & Technical</h3>
              <ul className="list-disc list-inside text-muted-foreground mb-4">
                <li><b>Full Stack Engineer (React + Node or Python):</b> Build core application features, dashboards, and data interfaces powering real-world operations.</li>
                <li><b>Machine Learning Engineer:</b> Design risk scoring models, anomaly detection systems, and predictive analytics pipelines for global-scale events.</li>
                <li><b>Data Engineer:</b> Build secure, real-time data pipelines that aggregate signals from diverse sources—supplier feeds, sensors, satellite data.</li>
                <li><b>Product Designer (UX/UI):</b> Own the visual language of our mission tools: layered, responsive, and built for ops centers—not marketing sites.</li>
                <li><b>DevSecOps Engineer:</b> Secure, deploy, and scale infrastructure in high-trust environments (Kubernetes, Terraform, AWS GovCloud a plus).</li>
                <li><b>Cybersecurity Engineer:</b> Harden our systems against evolving threats—from endpoint to cloud to data layer.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">Mission & Defense Roles</h3>
              <ul className="list-disc list-inside text-muted-foreground mb-4">
                <li><b>Mission Operations Analyst:</b> Bridge tech and reality. Work directly with product and client-side operators to translate real-world challenges into features.</li>
                <li><b>Government Solutions Engineer:</b> Blend technical depth with defense understanding—own client deployments, integrations, and field performance.</li>
                <li><b>Program Manager – Defense Initiatives:</b> Own the execution layer across SBIRs, pilots, and critical path projects.</li>
              </ul>
              <h3 className="text-2xl font-semibold text-foreground mb-2 mt-8">Business & Strategy</h3>
              <ul className="list-disc list-inside text-muted-foreground mb-4">
                <li><b>Founding Account Executive (Public Sector):</b> Lead our first major government sales—understand the problem space and help us build strategic relationships in defense, DHS, and infrastructure.</li>
                <li><b>Proposal & Capture Manager:</b> Navigate the government acquisition maze. Help us win early-stage contracts and work directly with founders on SBIR, DIU, AFWERX, and OTA programs.</li>
                <li><b>Chief of Staff (Founder Support):</b> Drive ops, investor comms, hiring, and strategy. Think fast, execute clean, and help us move 10x quicker.</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <h4 className="text-xl font-semibold text-foreground mb-2">Don’t See Your Role?</h4>
            <p className="text-muted-foreground mb-2">If you’re a world-class builder, technologist, or operator with defense, IC, or advanced logistics experience — we want to talk.</p>
            <a href="mailto:careers@redlaunch.com" className="text-primary underline font-medium">👉 Reach out at careers@redlaunch.com</a>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Culture</h2>
          <ul className="list-disc list-inside text-lg text-muted-foreground mb-6">
            <li>We are mission-first, ego-free, and execution-oriented.</li>
            <li>We value clarity, speed, and technical excellence.</li>
            <li>We operate with trust and accountability—no micromanagement.</li>
            <li>We believe modern defense problems deserve modern software.</li>
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">How We Hire</h2>
          <p className="text-lg text-muted-foreground mb-2">
            We run a fast, thoughtful hiring process designed to get to signal quickly. You’ll meet engineers, founders, and operators. We hire for judgment, skill, and alignment with the mission—not for pedigree.
          </p>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Join Red Launch. Build Something That Endures.</h2>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Careers; 