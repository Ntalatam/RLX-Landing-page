import { Button } from "@/components/ui/button";
import MissionCont from "./MissionCont";
import SupplyChainAnimation from "./SupplyChain"
import StrategicAutonomy from "./StrategicAutonomy";
import { Link } from "react-router-dom";
import { ShieldCheck, Factory, Server, Truck } from "lucide-react";
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

     

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
  <div className="animate-fade-in px-2 sm:px-4 md:px-0">
              {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 sm:mb-8 leading-tight text-left break-words">
                AI-Powered
                <span className="block text-primary neon-text">
                  Logistics Execution
                </span>
              </h1>
              {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-4xl leading-relaxed text-left">
Our Supplier Intelligence platform for Defense enables Real-Time optimization of Logistics Planning and Execution at the Tactical, Operational, and Strategic Levels; Enhancing Situational Awareness and Mission Readiness in Contested Environments.              </p>
              {/* CTA Buttons */}
              <div className="flex items-center space-x-6">
            <Link to="/demo-request">
              <Button variant="default" size="lg" className="ml-8 bg-primary text-primary-foreground hover:bg-primary/90 neon-glow px-8 py-6 text-lg font-bold">
                Request Demo
              </Button>
            </Link>
          </div>
            </div>

            {/* Right Column - Video */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-2xl lg:max-w-3xl mr-0 lg:mr-[-2rem]">
                <video 
                  src="https://v1.pinimg.com/videos/mc/720p/98/e9/27/98e927e0e7c1f8e885b4556b0ec4e976.mp4"
                  className="w-full h-auto object-contain filter drop-shadow-2xl rounded-xl"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(255, 0, 51, 0.3)) brightness(1.2) contrast(1.1)'
                  }}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                {/* Overlay glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent rounded-xl blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      
  

      {/* What Is Red Launch Section with Scroll Animation */}
      <motion.section 
        ref={whatIsRedLaunchRef}
        style={{ opacity: whatIsOpacity, y: whatIsY, scale: whatIsScale }}
        className="min-h-screen flex-col flex items-center justify-center border-t border-border pt-16"
      >
        <div className="w-full flex flex-col max-w-6xl px-4 md:px-20 py-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-8 text-center leading-tight"
          >
            What Is Maverick Labs?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-muted-foreground text-center mb-12"
          >
            We leverage data-driven decision making and state-of-the-art AI capabilities to ensure that the American warfighter receives the materials they need, when they need them.
          </motion.p>

          {/* Integrated Animations as Background */}
<motion.div
  ref={outcomeGridRef}
  style={{ opacity: outcomeOpacity, y: outcomeY, scale: outcomeScale }}
  className="w-full flex flex-col items-center justify-center gap-20"
>
  {/* Real-Time Visibility */}
  <div className="w-full flex flex-col items-center justify-center py-12">
    <MissionCont />
    <h3 className="text-2xl font-semibold text-foreground mt-6 mb-2 text-center">
      Real-Time Visibility & Situational Awareness
    </h3>
    <p className="text-muted-foreground leading-relaxed text-center max-w-xl">
      A live operational snapshot of supply movement
    </p>
  </div>

  {/* Predictive Analytics */}
  <div className="w-full flex flex-col items-center justify-center py-12">
    <SupplyChainAnimation className="w-full" animationSpeed={1.2} />
    <Server className="w-14 h-14 text-blue-400 drop-shadow-[0_0_12px_rgba(0,207,255,0.7)] mb-2 mt-6" />
    <h3 className="text-2xl font-semibold text-foreground mb-2 text-center">
      Predictive Analytics
    </h3>
    <p className="text-muted-foreground leading-relaxed text-center max-w-xl">
      AI-Powered forecasting to anticipate material shortages before they become critical
    </p>
  </div>

  {/* DDIL Resilience */}
  <div className="w-full flex flex-col items-center justify-center py-12">
    <StrategicAutonomy />
    <div className="w-14 h-14 text-amber-400 drop-shadow-[0_0_12px_rgba(255,195,0,0.7)] mb-2 mt-6" />
    <h3 className="text-2xl font-semibold text-foreground mb-2 text-center">
      Disrupted, Degraded, Intermittent, & Low-Bandwidth (DDIL) Resilience
    </h3>
    <p className="text-muted-foreground leading-relaxed text-center max-w-xl">
      Functions regardless of connectivity levels
    </p>
  </div>
</motion.div>
        </div>
      </motion.section>


      {/* Final CTA Section */}
      <section id="cta" className="py-32 border-t border-border">
        <div className="container mx-auto px-4 md:px-20 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Secure the Mission. Start with Maverick Labs.
          </h2>
          
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Link to="/contact">
              <Button variant="default" size="lg" className="ml-8 bg-primary text-primary-foreground hover:bg-primary/90 neon-glow px-8 py-6 text-lg font-bold">
                Get In Touch
              </Button>
            </Link>
            
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Hero;