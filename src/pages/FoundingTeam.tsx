import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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

const FoundingTeam = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const foundersRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const cultureRef = useRef<HTMLDivElement>(null);
  const finalCTARef = useRef<HTMLDivElement>(null);

  // Scroll progress for each section
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: valuesProgress } = useScroll({
    target: valuesRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: foundersProgress } = useScroll({
    target: foundersRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: storyProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: cultureProgress } = useScroll({
    target: cultureRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: finalCTAProgress } = useScroll({
    target: finalCTARef,
    offset: ["start end", "end start"]
  });

  // Transform values for animations
  const heroOpacity = useTransform(heroProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const heroY = useTransform(heroProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  const heroScale = useTransform(heroProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const valuesOpacity = useTransform(valuesProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const valuesY = useTransform(valuesProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  const valuesScale = useTransform(valuesProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const foundersOpacity = useTransform(foundersProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const foundersY = useTransform(foundersProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  const foundersScale = useTransform(foundersProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const storyOpacity = useTransform(storyProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const storyY = useTransform(storyProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  const storyScale = useTransform(storyProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const cultureOpacity = useTransform(cultureProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const cultureY = useTransform(cultureProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  const cultureScale = useTransform(cultureProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const finalCTAOpacity = useTransform(finalCTAProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const finalCTAY = useTransform(finalCTAProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  const finalCTAScale = useTransform(finalCTAProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-32 pb-16">
        {/* Hero Section with Scroll Animation */}
        <motion.section 
          ref={heroRef}
          style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
          className="container mx-auto px-6 max-w-6xl"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-foreground mb-8 text-center"
          >
            Mission-Built. Operator-Led.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 text-center max-w-4xl mx-auto leading-relaxed"
          >
            At Red Launch Technologies, we believe a bold mission needs equally bold leadership. Our founding team blends deep technical acumen with operational experience — across defense, AI, and enterprise systems. We're builders who've worked in the real world — not just in code.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground mb-16 text-center max-w-3xl mx-auto"
          >
            We've felt the friction of legacy systems and the cost of delayed insights. That's why we're building software designed to move as fast as the mission requires.
          </motion.p>
        </motion.section>

        {/* Company Values Section with Scroll Animation */}
        <motion.section 
          ref={valuesRef}
          style={{ opacity: valuesOpacity, y: valuesY, scale: valuesScale }}
          className="container mx-auto px-6 max-w-6xl mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center"
          >
            Our Values
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={cardVariants} className="bg-card/50 rounded-xl p-6 border border-border">
              <h3 className="text-xl font-semibold text-primary mb-3">Mission First</h3>
              <p className="text-muted-foreground">Every decision we make serves our core mission: securing critical supply chains and preventing disruptions that could impact national security.</p>
            </motion.div>
            <motion.div variants={cardVariants} className="bg-card/50 rounded-xl p-6 border border-border">
              <h3 className="text-xl font-semibold text-primary mb-3">Operational Excellence</h3>
              <p className="text-muted-foreground">We build systems that work in the real world, under real pressure, with real consequences. Reliability isn't optional — it's essential.</p>
            </motion.div>
            <motion.div variants={cardVariants} className="bg-card/50 rounded-xl p-6 border border-border">
              <h3 className="text-xl font-semibold text-primary mb-3">Clear Communication</h3>
              <p className="text-muted-foreground">Complex problems require clear solutions. We translate technical complexity into actionable insights that drive better decisions.</p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Founders Section with Scroll Animation */}
        <motion.section 
          ref={foundersRef}
          style={{ opacity: foundersOpacity, y: foundersY, scale: foundersScale }}
          className="container mx-auto px-6 max-w-6xl mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
          >
            Founders
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="grid md:grid-cols-2 gap-12 mb-16"
          >
            {founders.map((founder, idx) => (
              <motion.div key={idx} variants={cardVariants} className="bg-card/80 rounded-xl shadow-lg p-8 border border-border hover:neon-glow transition-all duration-300">
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
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Company Story Section with Scroll Animation */}
        <motion.section 
          ref={storyRef}
          style={{ opacity: storyOpacity, y: storyY, scale: storyScale }}
          className="container mx-auto px-6 max-w-6xl mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center"
          >
            Our Story
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div variants={cardVariants}>
              <h3 className="text-2xl font-semibold text-foreground mb-4">The Problem We Solve</h3>
              <p className="text-muted-foreground mb-4">
                Supply chain disruptions cost the global economy trillions annually. But the real cost isn't just financial — it's operational readiness, national security, and human lives.
              </p>
              <p className="text-muted-foreground mb-4">
                Traditional supply chain management tools are reactive, fragmented, and slow. They can't keep up with the speed of modern threats or the complexity of global networks.
              </p>
              <p className="text-muted-foreground">
                We built Red Launch because we've seen firsthand how the gap between insight and action can have catastrophic consequences.
              </p>
            </motion.div>
            <motion.div variants={cardVariants}>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Approach</h3>
              <p className="text-muted-foreground mb-4">
                We combine real-time data processing, advanced AI, and intuitive visualization to create a platform that doesn't just monitor supply chains — it understands them.
              </p>
              <p className="text-muted-foreground mb-4">
                Our technology provides the clarity and speed that operators need to make critical decisions under pressure, with confidence.
              </p>
              <p className="text-muted-foreground">
                We're not just building software. We're building the infrastructure that keeps critical systems running when it matters most.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Team Culture Section with Scroll Animation */}
        <motion.section 
          ref={cultureRef}
          style={{ opacity: cultureOpacity, y: cultureY, scale: cultureScale }}
          className="container mx-auto px-6 max-w-6xl mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center"
          >
            Team Culture
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div variants={cardVariants}>
              <h3 className="text-2xl font-semibold text-foreground mb-4">How We Work</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Mission-driven development with clear objectives</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Rapid iteration and continuous feedback loops</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Cross-functional collaboration and knowledge sharing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>High standards for code quality and system reliability</span>
                </li>
              </ul>
            </motion.div>
            <motion.div variants={cardVariants}>
              <h3 className="text-2xl font-semibold text-foreground mb-4">What We Value</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Technical excellence and operational pragmatism</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Clear communication and transparent decision-making</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Continuous learning and professional growth</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Impact-driven work that serves real-world needs</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Final CTA Section with Scroll Animation */}
        <motion.section 
          ref={finalCTARef}
          style={{ opacity: finalCTAOpacity, y: finalCTAY, scale: finalCTAScale }}
          className="container mx-auto px-6 max-w-6xl text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary mb-6 neon-text"
          >
            Join Our Mission
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            We're building the future of supply chain intelligence. If you're passionate about solving complex problems with real-world impact, we want to hear from you.
          </motion.p>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a 
              variants={cardVariants}
              href="/careers" 
              className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow hover:bg-primary/90 transition neon-glow"
            >
              See Open Roles
            </motion.a>
            <motion.a 
              variants={cardVariants}
              href="/contact" 
              className="inline-block px-8 py-4 bg-card text-foreground font-semibold rounded-lg shadow border border-border hover:bg-accent hover:text-accent-foreground transition"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default FoundingTeam; 