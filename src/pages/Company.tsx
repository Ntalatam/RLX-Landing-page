import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Users, Target, Award, Lightbulb } from "lucide-react";

const founders = [
  {
    name: "Tyler Festa",
    role: "Chief Executive Officer",
    linkedin: "https://www.linkedin.com/in/tylerfesta/",
    image: "images/tyler.jpg"
  },
  {
    name: "Jesus Badillo",
    role: "Chief Technology Officer",
    linkedin: "https://www.linkedin.com/in/jesus-badillo/",
    image: "images/jesus.jpg"
  }
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To simplify supply chain complexity and transform risk into strategic foresight for organizations worldwide."
  },
  {
    icon: Users,
    title: "Our Team",
    description: "Supply chain experts, data scientists, and software engineers united in building resilient operations."
  },
  {
    icon: Award,
    title: "Our Vision",
    description: "Delivering enterprise-grade security, reliability, and scalability that mission-critical operations demand."
  }
];

const Company = () => {
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
        {/* About Section */}
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
            About Maverick Labs
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 text-center"
          >
            We're pioneering the future of supply chain intelligence, empowering organizations 
            to make confident decisions in an increasingly complex global economy.
          </motion.p>
          
          
          <div className="bg-card/80 rounded-2xl p-8 md:p-12 border border-border neon-glow mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Our mission is to support the United States and its western allies in their efforts to maintain global supremacy by delivering innovative technology solutions that tackle their most pressing challenges.
              </p>
            </div>
            </div>
          <div className="bg-card/80 rounded-2xl p-8 md:p-12 border border-border neon-glow mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Vision
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                To create a world where decision-making in Defense Logistics are robust, resilient, and proactive, allowing warfighters and strategists to communicate and execute seamlessly, regardless of conditions
              </p>
            </div>
            </div>
          <div className="bg-card/80 rounded-2xl p-8 md:p-12 border border-border neon-glow mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                We are a dynamic blend of innovative hackers and creative artists from Silicon Valley, complemented by seasoned operational experts and visionary industry thought leaders. Together, we drive cutting-edge solutions in defense logistics
              </p>
            </div>
          </div>
        </motion.section>

        {/* Founding Team Section */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="container mx-auto px-6 max-w-6xl mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center"
          >
            Meet the Founders
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-2xl mx-auto"
          >
            {founders.map((founder, idx) => (
              <motion.div key={idx} variants={cardVariants} className="bg-card/80 rounded-xl shadow-lg p-6 border border-border hover:neon-glow transition-all duration-300 max-w-sm mx-auto">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                    {founder.image ? (
                      <img src={founder.image} alt={founder.name} className="w-24 h-24 object-cover rounded-full" />
                    ) : (
                      <span className="text-3xl font-bold text-primary">{founder.name.split(' ')[0][0]}{founder.name.split(' ')[1][0]}</span>
                    )}
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{founder.name}</h3>
                    <p className="text-primary font-medium neon-text">{founder.role}</p>
                    <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition-colors inline-block">Connect on LinkedIn</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Final CTA Section */}
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

export default Company;