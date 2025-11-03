import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Shield,
  Globe,
  Map,
  TrendingUp,
  AlertTriangle,
  Clock,
  Settings,
  Users,
  Zap,
  Route,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Products = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const technologyRef = useRef<HTMLDivElement>(null);
  const capabilitiesRef = useRef<HTMLDivElement>(null);

  // Scroll progress for each section
  const { scrollYProgress: headerProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: featuresProgress } = useScroll({
    target: featuresRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: technologyProgress } = useScroll({
    target: technologyRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: capabilitiesProgress } = useScroll({
    target: capabilitiesRef,
    offset: ["start end", "end start"],
  });

  const videoRef = useRef<HTMLVideoElement>(null);

  // Handler to loop only the first 33 seconds
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.currentTime >= 32) {
      video.currentTime = 0;
      video.play();
    }
  };

  // Transform values for animations
  const headerOpacity = useTransform(
    headerProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );
  const headerY = useTransform(
    headerProgress,
    [0, 0.2, 0.8, 1],
    [100, 0, 0, -100]
  );
  const headerScale = useTransform(
    headerProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  const featuresOpacity = useTransform(
    featuresProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );
  const featuresY = useTransform(
    featuresProgress,
    [0, 0.2, 0.8, 1],
    [100, 0, 0, -100]
  );
  const featuresScale = useTransform(
    featuresProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  const technologyOpacity = useTransform(
    technologyProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );
  const technologyY = useTransform(
    technologyProgress,
    [0, 0.2, 0.8, 1],
    [100, 0, 0, -100]
  );
  const technologyScale = useTransform(
    technologyProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  const capabilitiesOpacity = useTransform(
    capabilitiesProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );
  const capabilitiesY = useTransform(
    capabilitiesProgress,
    [0, 0.2, 0.8, 1],
    [100, 0, 0, -100]
  );
  const capabilitiesScale = useTransform(
    capabilitiesProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  const features = [
        {
      icon: Globe,
      title: "DDIL Compliant",
      description:
        "Identifies periods of connectivity and sends data to other nodes in the mesh network, while prioritizing data flow and limiting bandwidth, based on the context of the specific mission",
      benefits: [
        "Offline Architecture",
        "Tactical Data Capture",
        "Last known route, inventory, and vehicle data",
        "Minimal Detection",
      ],
    },
  
    {
      icon: Map,
      title: "Predictive Logistics",
      description:
        "Enabling real-time logistics planning and execution in adversarial environments",
      benefits: [
        "Tactical, Operational, and Strategic Levels",
        "Maintenance & Sustainment Optimization",
        " Live Operational Visibility",
        "Real-Time Situational Awareness",
      ],
    },
      {
      icon: Shield,
      title: "Supplier Risk Assessment",
      description:
        "Continuously assess supplier performance and risks through real-time monitoring",
      //  data-driven scoring, and automated compliance management.
      benefits: [
        "Dynamic Risk Scoring",
        "Automated Compliance Tracking",
        "Proactive Alerts",
        "Vendor Vetting",
      ],
    },
  ];

  const capabilities = [
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description:
        "Live data processing and risk scoring with instant alerts and notifications.",
    },
    {
      icon: AlertTriangle,
      title: "Real-Time Alerts",
      description:
        "Early warning system for potential disruptions and supply chain vulnerabilities.",
    },
    {
      icon: Route,
      title: "Proactive Disruption Adaptation",
      description:
        "Provide alternative options when supply routes are compromised.",
    },
    {
      icon: Settings,
      title: "Inventory Optimization",
      description:
        "Optimization of stock placement and inventory, minimizing logistical strain ",
    },
    {
      icon: Zap,
      title: "Seamless Integration",
      description:
        "Quick deployment with existing ERP and supply chain management systems.",
    },
    {
      icon: Users,
      title: "Streamlined Communication",
      description:
        "Multi-user platform with role-based access and shared dashboards.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Technology Overview Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-20">
          {/* Header with Scroll Animation */}
          <motion.div
            ref={headerRef}
            style={{ opacity: headerOpacity, y: headerY, scale: headerScale }}
            className="text-center mb-20"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-6xl font-extrabold text-foreground mb-8 leading-tight"
            >
              Built to Dominate
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            >
              A supplier intelligence platform engineered for contested settings, enhancing logistics at tactical and operational levels
              with real-time risk management, unified oversight of inventory,
              personnel, equipment, and distribution, and mission-critical
              operational resilience.
            </motion.p>
          </motion.div>

          {/* Core Features with Stagger Animation */}
          <motion.div
            ref={featuresRef}
            style={{
              opacity: featuresOpacity,
              y: featuresY,
              scale: featuresScale,
            }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card className="bg-card/80 hover:bg-card/90 hover:scale-105 hover:neon-glow transition-all duration-300 border border-border h-full flex flex-col">
                  <CardHeader className="text-center flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-3 flex-1">
                      {feature.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-muted-foreground text-base"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Technology Highlight with Scroll Animation */}
          <motion.div
            ref={technologyRef}
            style={{
              opacity: technologyOpacity,
              y: technologyY,
              scale: technologyScale,
            }}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card/80 rounded-2xl p-10 md:p-16 border border-border mb-20 neon-glow"
          >
            <div className="text-center mb-12">
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6"
              >
                Optimized for reliability. Refined for speed.
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              >
                A real-time engine that continuously integrates and transforms
                data captured at the tactical echelon alongside vendor information, providing unmatched
                transparency  into contested logistics environments.
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="grid md:grid-cols-2 gap-12"
            >
              <motion.div variants={cardVariants}>
                <h4 className="text-2xl md:text-2xl font-extrabold text-foreground mb-6">
                  Offline-Compatible Architecture
                </h4>
                <span>
                  Designed for resilience at the edge, the platform locally
                  stores key logistics data to sustain operations offline. Once
                  connected, it transmits updates across its network with
                  mission-aware prioritization to maximize efficiency. user and
                  mission requirements while conserving bandwidth.
                </span>
              </motion.div>

              <motion.div variants={cardVariants}>
                <h4 className="text-2xl md:text-2xl font-extrabold text-foreground mb-6">
                  Mission-Driven Integration and Scalability
                </h4>
                <span>
                  Seamlessly transitions between environments: agile and compact
                  at the tactical edge, enterprise-level resilience at the operational and strategic levels.
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* <ul className="space-y-4 text-lg text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>
                      Interactive 3D mapping of global supply networks
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Real-time risk heat maps and trend analysis</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>
                      Customizable dashboards for different user roles
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Mobile-responsive design for field operations</span>
                  </li>
                </ul> */}

          {/*<section className="mb-20">
  <div className="container mx-auto px-4 md:px-20">
    <h3 className="text-2xl md:text-4xl font-extrabold text-foreground text-center mb-10">
      Platform in Action
    </h3>
     <div className="flex flex-col items-center justify-center">
            <div className="bg-background/80 rounded-2xl shadow-2xl border border-border overflow-hidden mb-4 w-full max-w-3xl">
              <video
                ref={videoRef}
                src="/images/video.mov"
                controls
                autoPlay
                loop={false} // Disable native loop
                muted
                playsInline
                className="w-full h-auto object-contain"
                preload="auto"
                poster="/images/risks.png"
                onTimeUpdate={handleTimeUpdate}
              />
            </div>
  <p className="text-base text-muted-foreground text-center mt-2">
    <span className="font-semibold text-primary">Platform Demo</span><br />
    See the platform in action: real-time risk visualization and predictive inventory management.
  </p>
</div>
  </div>
</section>*/}

          {/* Platform Capabilities with Scroll Animation */}
          <motion.div
            ref={capabilitiesRef}
            style={{
              opacity: capabilitiesOpacity,
              y: capabilitiesY,
              scale: capabilitiesScale,
            }}
            className="mb-20"
          >
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground text-center mb-12"
            >
              What the Platform Can Do
            </motion.h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {capabilities.map((capability, index) => (
                <motion.div key={index} variants={cardVariants}>
                  <Card className="bg-card/80 hover:bg-card/90 hover:neon-glow transition-all duration-300 border border-border h-full flex flex-col">
                    <CardHeader className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                        <capability.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl md:text-2xl font-extrabold text-foreground">
                        {capability.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <CardDescription className="text-lg text-muted-foreground leading-relaxed flex-1">
                        {capability.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
