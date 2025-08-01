import Header from "@/components/Header";
import Footer from "@/components/Footer";

const founders = [
  {
    name: "Tyler Festa",
    role: "Chief Executive Officer",
    linkedin: "https://www.linkedin.com/in/tylerfesta/", // Placeholder, update as needed
    image: "https://media.licdn.com/dms/image/v2/C5603AQFkvYO2TInayA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1611678405219?e=1755734400&v=beta&t=OLI_HzJLNud6-9lg_x0CDUpRy2TArVtS00GX36qJGUk",
    bio: `Tyler is a mission-driven CEO with a background in AI, government tech, and GTM leadership. He's led enterprise initiatives at Palantir and built teams at the intersection of supply chain, defense, and analytics. Tyler's focus: clarity, precision, and building software that prevents billion-dollar disruptions.`,
    quote: "I've seen how supply chain risks can cascade into billion-dollar problems. Our goal at Red Launch is to provide clarity before disruption hits.",
    expertise: ["AI & Machine Learning", "Government Technology", "Enterprise Sales", "Team Building", "Strategic Planning"]
  },
  {
    name: "Jesus Badillo",
    role: "Chief Technology Officer",
    linkedin: "https://www.linkedin.com/in/jesus-badillo/",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQFTg5mCXTh6VQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1631651190811?e=1755734400&v=beta&t=Fyci72jWW2aYL2677G3EVXBJkVOmJPytHpcIyCL51oA",
    bio: `Jesus is a systems-focused CTO with deep expertise in secure, scalable platforms. He holds advanced degrees in Intelligent Systems Engineering from Indiana University and leads Red Launch's technical architecture, product velocity, and engineering standards.`,
    quote: "My job is to make complexity feel simple. Our platform should feel as easy as clicking a button — even if it's processing hundreds of variables in the background.",
    expertise: ["System Architecture", "Security Engineering", "Scalable Platforms", "Product Development", "Technical Leadership"]
  }
];

const FoundingTeam = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 pt-32 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 text-center">Mission-Built. Operator-Led.</h1>
        <p className="text-xl text-muted-foreground mb-12 text-center max-w-4xl mx-auto leading-relaxed">
          At Red Launch Technologies, we believe a bold mission needs equally bold leadership. Our founding team blends deep technical acumen with operational experience — across defense, AI, and enterprise systems. We're builders who've worked in the real world — not just in code.
        </p>
        <p className="text-lg text-muted-foreground mb-16 text-center max-w-3xl mx-auto">
          We've felt the friction of legacy systems and the cost of delayed insights. That's why we're building software designed to move as fast as the mission requires.
        </p>
      </section>

      {/* Company Values Section */}
      <section className="container mx-auto px-6 max-w-6xl mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card/50 rounded-xl p-6 border border-border">
            <h3 className="text-xl font-semibold text-primary mb-3">Mission First</h3>
            <p className="text-muted-foreground">Every decision we make serves our core mission: securing critical supply chains and preventing disruptions that could impact national security.</p>
          </div>
          <div className="bg-card/50 rounded-xl p-6 border border-border">
            <h3 className="text-xl font-semibold text-primary mb-3">Operational Excellence</h3>
            <p className="text-muted-foreground">We build systems that work in the real world, under real pressure, with real consequences. Reliability isn't optional — it's essential.</p>
          </div>
          <div className="bg-card/50 rounded-xl p-6 border border-border">
            <h3 className="text-xl font-semibold text-primary mb-3">Clear Communication</h3>
            <p className="text-muted-foreground">Complex problems require clear solutions. We translate technical complexity into actionable insights that drive better decisions.</p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="container mx-auto px-6 max-w-6xl mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Founders</h2>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {founders.map((founder, idx) => (
            <div key={idx} className="bg-card/80 rounded-xl shadow-lg p-8 border border-border hover:neon-glow transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                  {founder.image ? (
                    <img src={founder.image} alt={founder.name} className="w-24 h-24 object-cover rounded-full" />
                  ) : (
                    <span className="text-3xl font-bold text-primary">{founder.name.split(' ')[0][0]}{founder.name.split(' ')[1][0]}</span>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-1">{founder.name}</h3>
                  <p className="text-primary font-medium mb-3 neon-text">{founder.role}</p>
                  <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary underline mb-4 hover:text-primary/80 transition-colors inline-block">Connect on LinkedIn</a>
                </div>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed mt-6 mb-6">{founder.bio}</p>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-2">Areas of Expertise:</h4>
                <div className="flex flex-wrap gap-2">
                  {founder.expertise.map((skill, skillIdx) => (
                    <span key={skillIdx} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-4 text-base">"{founder.quote}"</blockquote>
            </div>
          ))}
        </div>
      </section>

      {/* Company Story Section */}
      <section className="container mx-auto px-6 max-w-6xl mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">The Problem We Solve</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Supply chain disruptions cost the global economy trillions annually. For defense and critical infrastructure, these disruptions aren't just expensive — they're dangerous. Traditional risk management tools are reactive, fragmented, and too slow for today's threats.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We saw this problem firsthand while working with defense contractors and critical manufacturers. The tools they needed didn't exist, so we built them.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">Our Approach</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Red Launch combines real-time data aggregation, AI-powered risk assessment, and intuitive visualization to give teams the visibility they need to prevent disruptions before they happen.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We're not just building software — we're building the infrastructure that keeps critical supply chains running when it matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Team Culture Section */}
      <section className="container mx-auto px-6 max-w-6xl mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Building the Future</h2>
        <div className="bg-card/50 rounded-xl p-8 border border-border">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">Our Culture</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Mission-driven teams focused on real-world impact</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Rapid iteration and continuous learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Direct customer feedback and collaboration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Technical excellence with operational pragmatism</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">What We're Building</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Real-time supply chain intelligence platform</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>AI-powered risk assessment and prediction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Compliance monitoring and automated reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Geographic and geopolitical risk mapping</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 neon-text">Want to Join the Mission?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for engineers, designers, and operators who think clearly, move fast, and build with purpose. If you're passionate about solving complex problems that matter, we want to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/careers" className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow hover:bg-primary/90 transition neon-glow">See Open Roles</a>
            <a href="/contact" className="inline-block px-8 py-4 bg-card text-foreground font-semibold rounded-lg shadow border border-border hover:bg-accent hover:text-accent-foreground transition">Contact Us</a>
          </div>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-border">
          <h2 className="text-2xl font-bold text-foreground mb-2">Red Launch Technologies</h2>
          <p className="text-muted-foreground text-lg">Built for speed. Designed for trust.</p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default FoundingTeam; 