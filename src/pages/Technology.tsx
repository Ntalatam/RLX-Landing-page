import Header from "@/components/Header";
import Technology from "@/components/Technology";
import Footer from "@/components/Footer";

const TechnologyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <Technology />
      </div>
      <Footer />
    </div>
  );
};

export default TechnologyPage;