import Header from "@/components/Header";
import Technology from "@/components/Technology";
import Footer from "@/components/Footer";

const TechnologyPage = () => {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-no-repeat bg-center"
        style={{ 
          backgroundImage: `url('https://i.pinimg.com/1200x/2a/57/4e/2a574e08ce4309eaf509cd9ff19a19d2.jpg')`,
          backgroundSize: 'contain',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
      </div>
      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      <div className="relative z-10">
        <Header />
        <div className="pt-20">
          <Technology />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default TechnologyPage;