import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Careers = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const whyJoinRef = useRef<HTMLDivElement>(null);
  const openRolesRef = useRef<HTMLDivElement>(null);
  const internshipsRef = useRef<HTMLDivElement>(null);
  const cultureRef = useRef<HTMLDivElement>(null);
  const finalCTARef = useRef<HTMLDivElement>(null);

  // Scroll progress for each section
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: whyJoinProgress } = useScroll({
    target: whyJoinRef,
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

  const whyJoinOpacity = useTransform(whyJoinProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const whyJoinY = useTransform(whyJoinProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  const whyJoinScale = useTransform(whyJoinProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const openRolesOpacity = useTransform(openRolesProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const openRolesY = useTransform(openRolesProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  const openRolesScale = useTransform(openRolesProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const internshipsOpacity = useTransform(internshipsProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const internshipsY = useTransform(internshipsProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  const internshipsScale = useTransform(internshipsProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

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

          {/* Why Join Red Launch with Scroll Animation */}
          <motion.div 
            ref={whyJoinRef}
            style={{ opacity: whyJoinOpacity, y: whyJoinY, scale: whyJoinScale }}
            className="mb-20"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-8 text-center"
            >
              Why Red Launch
            </motion.h2>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <motion.div variants={cardVariants}>
                <Card className="bg-neutral-900 p-4 rounded-xl shadow border-border hover:border-primary transition-all">
                  <CardContent className="p-0">
                    <h4 className="text-xl font-semibold text-white mb-2">Defense First</h4>
                    <p className="text-neutral-300 text-sm">Build systems that protect national security and critical infrastructure.</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={cardVariants}>
                <Card className="bg-neutral-900 p-4 rounded-xl shadow border-border hover:border-primary transition-all">
                  <CardContent className="p-0">
                    <h4 className="text-xl font-semibold text-white mb-2">Mission Critical</h4>
                    <p className="text-neutral-300 text-sm">Solve real problems with real consequences. No room for failure.</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={cardVariants}>
                <Card className="bg-neutral-900 p-4 rounded-xl shadow border-border hover:border-primary transition-all">
                  <CardContent className="p-0">
                    <h4 className="text-xl font-semibold text-white mb-2">Secure Systems</h4>
                    <p className="text-neutral-300 text-sm">Design and deploy mission-critical software with enterprise-grade security.</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <p className="text-lg text-neutral-300 mb-4">
                We operate with urgency, autonomy, and high trust. No layers of bureaucracy—just sharp execution.
              </p>
              <p className="text-lg text-neutral-300">
                Your work will matter. Your code will protect lives.
              </p>
            </motion.div>
          </motion.div>

          {/* Open Roles Section with Scroll Animation */}
          <motion.div 
            ref={openRolesRef}
            style={{ opacity: openRolesOpacity, y: openRolesY, scale: openRolesScale }}
            className="mb-20"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-8 text-center"
            >
              Open Positions
            </motion.h2>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* Software Engineer */}
              <motion.div variants={cardVariants} className="bg-neutral-900 p-6 rounded-xl shadow border-border hover:border-primary transition-all">
                <h3 className="text-2xl font-semibold text-white mb-4">Software Engineer</h3>
                <div className="space-y-4">
                  <div className="hover:border hover:border-primary p-3 rounded-lg transition-all">
                    <h4 className="font-semibold text-white text-sm mb-1">Full Stack Engineer</h4>
                    <p className="text-neutral-300 text-xs">Build systems that operators trust in combat. React, Node.js, Python. No room for error.</p>
                  </div>
                </div>
              </motion.div>

              {/* Forward Deployed Engineer */}
              <motion.div variants={cardVariants} className="bg-neutral-900 p-6 rounded-xl shadow border-border hover:border-primary transition-all">
                <h3 className="text-2xl font-semibold text-white mb-4">Forward Deployed Engineer</h3>
                <div className="space-y-4">
                  <div className="hover:border hover:border-primary p-3 rounded-lg transition-all">
                    <h4 className="font-semibold text-white text-sm mb-1">Client Solutions Engineer</h4>
                    <p className="text-neutral-300 text-xs">Deploy with defense clients. Bridge tech and reality. Mission-critical value.</p>
                  </div>
                </div>
              </motion.div>

              {/* Product Developer */}
              <motion.div variants={cardVariants} className="bg-neutral-900 p-6 rounded-xl shadow border-border hover:border-primary transition-all">
                <h3 className="text-2xl font-semibold text-white mb-4">Product Developer</h3>
                <div className="space-y-4">
                  <div className="hover:border hover:border-primary p-3 rounded-lg transition-all">
                    <h4 className="font-semibold text-white text-sm mb-1">Product Manager</h4>
                    <p className="text-neutral-300 text-xs">Own product strategy for defense. Translate real challenges into features that matter.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Internships Section with Scroll Animation */}
            <motion.div 
              ref={internshipsRef}
              style={{ opacity: internshipsOpacity, y: internshipsY, scale: internshipsScale }}
              className="mt-12"
            >
              <motion.h3 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-white mb-6 text-center"
              >
                Internships
              </motion.h3>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <motion.div variants={cardVariants} className="bg-neutral-900 p-6 rounded-xl shadow border-border hover:border-primary transition-all">
                  <h4 className="text-xl font-semibold text-white mb-4">Forward Deployed Intern</h4>
                  <p className="text-neutral-300 text-sm">Deploy technology in real defense environments. Learn the intersection of software and national security.</p>
                </motion.div>
                <motion.div variants={cardVariants} className="bg-neutral-900 p-6 rounded-xl shadow border-border hover:border-primary transition-all">
                  <h4 className="text-xl font-semibold text-white mb-4">Product Developer Intern</h4>
                  <p className="text-neutral-300 text-sm">Build mission-critical applications. Learn to create software that operators depend on.</p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Don't See Your Role? CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-neutral-950 text-center p-8 rounded-xl mt-10 border border-border"
            >
              <h4 className="text-xl font-semibold text-white mb-2">Not Listed?</h4>
              <p className="text-neutral-300 mb-4">If you're a world-class builder with defense, IC, or logistics experience — we want you.</p>
              <a href="mailto:careers@redlaunch.com" className="text-primary underline font-semibold hover:text-primary/80 transition-colors">
                👉 careers@redlaunch.com
              </a>
            </motion.div>
          </motion.div>

          {/* Culture Section with Scroll Animation */}
          <motion.div 
            ref={cultureRef}
            style={{ opacity: cultureOpacity, y: cultureY, scale: cultureScale }}
            className="mb-20"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-6 text-center"
            >
              Our Culture
            </motion.h2>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <motion.div variants={cardVariants} className="space-y-4">
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
              </motion.div>
              <motion.div variants={cardVariants} className="space-y-4">
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
              </motion.div>
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
              We look for builders who think clearly, move fast, and build with purpose. 
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
              <motion.a 
                variants={cardVariants}
                href="/contact" 
                className="inline-block px-8 py-4 bg-card text-foreground font-semibold rounded-lg shadow border border-border hover:bg-accent hover:text-accent-foreground transition"
              >
                Contact Us
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