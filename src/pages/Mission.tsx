import Header from "@/components/Header";
import Mission from "@/components/Mission";
import Footer from "@/components/Footer";

const MissionPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <Mission />
      </div>
      <Footer />
    </div>
  );
};

export default MissionPage;