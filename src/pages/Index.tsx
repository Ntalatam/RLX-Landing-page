import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      {/* Global background video and overlays */}
      <video
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none"
        src="/images/line.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <div className="fixed inset-0 bg-black/50 z-0 pointer-events-none"></div>
      <div className="fixed inset-0  opacity-40 z-0 pointer-events-none"></div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen">
        <Header />
        <Hero />
        <Footer />
      </div>
    </>
  );
};

export default Index;