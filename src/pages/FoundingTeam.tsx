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
    bio: `Tyler is a mission-driven CEO with a background in AI, government tech, and GTM leadership. He's led enterprise initiatives at Palantir and built teams at the intersection of supply chain, defense, and analytics. Tyler's focus: clarity, precision, and building software that prevents billion-dollar disruptions.`
  },
  {
    name: "Jesus Badillo",
    role: "Chief Technology Officer",
    linkedin: "https://www.linkedin.com/in/jesus-badillo/",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQFTg5mCXTh6VQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1631651190811?e=1755734400&v=beta&t=Fyci72jWW2aYL2677G3EVXBJkVOmJPytHpcIyCL51oA",
    bio: `Jesus is a systems-focused CTO with deep expertise in secure, scalable platforms. He holds advanced degrees in Intelligent Systems Engineering from Indiana University and leads Red Launch's technical architecture, product velocity, and engineering standards.`
  }
];

const FoundingTeam = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const finalCTARef = useRef<HTMLDivElement>(null);

  // Scroll progress for each section
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
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
        {/* Meet the Founders Section */}
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
            Meet the Founders
          </motion.h1>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="grid md:grid-cols-2 gap-12"
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
                <p className="text-muted-foreground text-base leading-relaxed mt-6">{founder.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>



        {/* Final CTA Section with Scroll Animation */}
        <motion.section 
          ref={finalCTARef}
          style={{ opacity: finalCTAOpacity, y: finalCTAY, scale: finalCTAScale }}
          className="container mx-auto px-6 max-w-6xl text-center mt-20"
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