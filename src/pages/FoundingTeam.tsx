import Header from "@/components/Header";
import Footer from "@/components/Footer";

const founders = [
  {
    name: "Tyler Festa",
    role: "Chief Executive Officer",
    linkedin: "https://www.linkedin.com/in/tylerfesta/", // Placeholder, update as needed
    image: "https://media.licdn.com/dms/image/v2/C5603AQFkvYO2TInayA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1611678405219?e=1755734400&v=beta&t=OLI_HzJLNud6-9lg_x0CDUpRy2TArVtS00GX36qJGUk",
    bio: `Tyler is a mission-driven CEO with a background in AI, government tech, and GTM leadership. He’s led enterprise initiatives at Palantir and built teams at the intersection of supply chain, defense, and analytics. Tyler’s focus: clarity, precision, and building software that prevents billion-dollar disruptions.`,
    quote: "I’ve seen how supply chain risks can cascade into billion-dollar problems. Our goal at Red Launch is to provide clarity before disruption hits."
  },
  {
    name: "Jesus Badillo",
    role: "Chief Technology Officer",
    linkedin: "https://www.linkedin.com/in/jesus-badillo/",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQFTg5mCXTh6VQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1631651190811?e=1755734400&v=beta&t=Fyci72jWW2aYL2677G3EVXBJkVOmJPytHpcIyCL51oA",
    bio: `Jesus is a systems-focused CTO with deep expertise in secure, scalable platforms. He holds advanced degrees in Intelligent Systems Engineering from Indiana University and leads Red Launch’s technical architecture, product velocity, and engineering standards.`,
    quote: "My job is to make complexity feel simple. Our platform should feel as easy as clicking a button — even if it’s processing hundreds of variables in the background."
  }
];

const FoundingTeam = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Header />
    <main className="flex-1 pt-24 pb-16">
      <section className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 text-center">Mission-Built. Operator-Led.</h1>
        <p className="text-xl text-muted-foreground mb-12 text-center">
          At Red Launch Technologies, we believe a bold mission needs equally bold leadership. Our founding team blends deep technical acumen with operational experience — across defense, AI, and enterprise systems. We’re builders who’ve worked in the real world — not just in code.<br/><br/>
          We’ve felt the friction of legacy systems and the cost of delayed insights. That’s why we’re building software designed to move as fast as the mission requires.
        </p>
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Founders</h2>
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {founders.map((founder, idx) => (
            <div key={idx} className="bg-card/60 rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                {founder.image ? (
                  <img src={founder.image} alt={founder.name} className="w-20 h-20 object-cover rounded-full" />
                ) : (
                  <span className="text-3xl font-bold text-primary">{founder.name.split(' ')[0][0]}{founder.name.split(' ')[1][0]}</span>
                )}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-1">{founder.name}</h3>
              <p className="text-primary font-medium mb-2">{founder.role}</p>
              <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline mb-4">Connect on LinkedIn</a>
              <p className="text-muted-foreground text-sm whitespace-pre-line mb-4">{founder.bio}</p>
              <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-4">“{founder.quote}”</blockquote>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Want to Join the Mission?</h2>
          <p className="text-lg text-muted-foreground mb-4">We’re always looking for engineers, designers, and operators who think clearly, move fast, and build with purpose.</p>
          <a href="/careers" className="inline-block px-6 py-3 bg-primary text-background font-semibold rounded-lg shadow hover:bg-primary/80 transition">See open roles →</a>
        </div>
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-2">Red Launch Technologies</h2>
          <p className="text-muted-foreground text-lg">Built for speed. Designed for trust.</p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default FoundingTeam; 