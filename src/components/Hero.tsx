import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const whatIsRedLaunchRef = useRef<HTMLDivElement>(null);
  const outcomeGridRef = useRef<HTMLDivElement>(null);

  // Scroll progress for each section
  const { scrollYProgress: whatIsProgress } = useScroll({
    target: whatIsRedLaunchRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: outcomeProgress } = useScroll({
    target: outcomeGridRef,
    offset: ["start end", "end start"]
  });

  // Transform values for animations
  const whatIsOpacity = useTransform(whatIsProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const whatIsY = useTransform(whatIsProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  const whatIsScale = useTransform(whatIsProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const outcomeOpacity = useTransform(outcomeProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const outcomeY = useTransform(outcomeProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  const outcomeScale = useTransform(outcomeProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  // Stagger animation variants for cards
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
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Tech Grid Overlay */}
        <div className="absolute inset-0 tech-grid opacity-40"></div>
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="animate-fade-in -ml-8 md:-ml-12">
              {/* Main Heading */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-8 leading-tight text-left">
                Redefining
                <span className="block text-primary neon-text">
                  National Supply Chain Security
                </span>
              </h1>
              {/* Subheading */}
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-4xl leading-relaxed text-left">
                Our real-time AI platform identifies, visualizes, and mitigates supply chain threats for defense, aerospace, and critical manufacturing sectors.
              </p>
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                <Button variant="outline" size="lg" className="px-10 py-8 text-lg border-border text-foreground hover:bg-accent hover:text-accent-foreground">
                  Request Demo
                </Button>
              </div>
            </div>

            {/* Right Column - Earth Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-2xl lg:max-w-3xl mr-0 lg:mr-[-2rem]">
                <img 
                  src="/images/image-from-rawpixel-id-15400832-png.png" 
                  alt="Global Supply Chain Network" 
                  className="w-full h-auto object-contain filter drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(255, 0, 51, 0.3)) brightness(1.2) contrast(1.1)'
                  }}
                />
                {/* Overlay glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      
      {/* What Is Red Launch Section with Scroll Animation */}
      <motion.section 
        ref={whatIsRedLaunchRef}
        style={{ opacity: whatIsOpacity, y: whatIsY, scale: whatIsScale }}
        className="min-h-screen flex items-center justify-center border-t border-border pt-16"
      >
        <div className="w-full max-w-6xl px-4 md:px-20 py-12">
                      <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-8 text-center leading-tight"
            >
            What Is Red Launch?
          </motion.h2>

          

          
                      <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-muted-foreground text-center mb-12"
            >
            We don't just monitor risk. We make it visible, understandable, and actionable.
          </motion.p>
          
          {/* 3-Outcome Grid Section with Scroll Animation */}
          <motion.div 
            ref={outcomeGridRef}
            style={{ opacity: outcomeOpacity, y: outcomeY, scale: outcomeScale }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-muted hover:border-primary transition-all bg-secondary/5 hover:bg-secondary/10"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-4">Mission Continuity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Prevent disruption to weapons production, critical infrastructure, and battlefield readiness by acting on vulnerabilities before they escalate.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-muted hover:border-primary transition-all bg-secondary/5 hover:bg-secondary/10"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-4">Supply Chain Readiness</h3>
              <p className="text-muted-foreground leading-relaxed">
                Maintain uninterrupted flow of compliant, secure, and verified materials through automated monitoring of high-risk suppliers.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-muted hover:border-primary transition-all bg-secondary/5 hover:bg-secondary/10"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-4">Strategic Autonomy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Reduce reliance on foreign-owned subcontractors through traceable, tiered visibility into your defense supplier base.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      

      

      

      
      {/* Final CTA Section */}
      <section id="cta" className="py-32 border-t border-border">
        <div className="container mx-auto px-4 md:px-20 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Secure the Mission. Start with Red Launch.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you're safeguarding aerospace operations, mission-critical manufacturing, or national security supply chains — Red Launch delivers the visibility and control you need.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <button className="bg-primary text-background hover:bg-primary/90 font-semibold px-6 py-3 rounded-lg shadow-md transition-all">
              Talk to Defense Sales
            </button>
            <button className="border border-primary text-primary hover:bg-primary/10 font-semibold px-6 py-3 rounded-lg transition-all">
              Request Technical Demo
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;