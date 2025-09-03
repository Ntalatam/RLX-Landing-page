import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Careers = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const openRolesRef = useRef<HTMLDivElement>(null);
  const internshipsRef = useRef<HTMLDivElement>(null);
  const finalCTARef = useRef<HTMLDivElement>(null);

  // Scroll progress for each section
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: openRolesProgress } = useScroll({
    target: openRolesRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: internshipsProgress } = useScroll({
    target: internshipsRef,
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

  const openRolesOpacity = useTransform(openRolesProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const openRolesY = useTransform(openRolesProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  const openRolesScale = useTransform(openRolesProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const internshipsOpacity = useTransform(internshipsProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const internshipsY = useTransform(internshipsProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  const internshipsScale = useTransform(internshipsProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

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
      
      {/* Hero Section with Scroll Animation */}
      <main className="flex-1 pt-32 pb-16">
        <section className="container mx-auto px-6 max-w-4xl">
          <motion.div 
            ref={heroRef}
            style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
            className="text-center pt-24 pb-16"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold text-white mb-8"
            >
              Join the Mission
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed"
            >
              We build systems that protect national security. No bureaucracy. No politics. Just results.
            </motion.p>
          </motion.div>



          {/* Open Roles Section with Scroll Animation */}
          <motion.div 
            ref={openRolesRef}
            style={{ opacity: openRolesOpacity, y: openRolesY, scale: openRolesScale }}
            className="mb-20"
          >
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* Software Engineer */}
              

              {/* Forward Deployed Engineer */}
              
            </motion.div>

            {/* Internships Section with Scroll Animation */}
            <motion.div 
              ref={internshipsRef}
              style={{ opacity: internshipsOpacity, y: internshipsY, scale: internshipsScale }}
              className="mt-12 bg-transparent"
            >
             
             
            </motion.div>

            {/* Don't See Your Role? CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-transparent text-center p-8 rounded-xl mt-10 "
            >
              
            </motion.div>
          </motion.div>



          {/* How We Hire */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">How We Hire</h2>
            <p className="text-lg text-neutral-300 text-center max-w-3xl mx-auto">
              We look for hackers, artists, and builders who think clearly, move fast, and build with purpose. 
              Technical excellence matters. Mission alignment matters more.
            </p>
          </motion.div>

          {/* Final CTA with Scroll Animation */}
          <motion.div 
            ref={finalCTARef}
            style={{ opacity: finalCTAOpacity, y: finalCTAY, scale: finalCTAScale }}
            className="text-center"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-primary mb-4 neon-text"
            >
              Ready to Serve?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-neutral-300 mb-6 max-w-2xl mx-auto"
            >
              Join a team that builds systems that protect lives. No politics. No bureaucracy. Just results.
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
                href="mailto:careers@redlaunch.com" 
                className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow hover:bg-primary/90 transition neon-glow"
              >
                Apply Now
              </motion.a>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers; 