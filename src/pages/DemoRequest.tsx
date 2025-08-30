import Header from "@/components/Header";
import DemoRequest from "@/components/DemoRequest";
import Footer from "@/components/Footer";

const DemoRequestPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="pt-20 flex-grow">
        <DemoRequest />
      </div>
      <Footer />
    </div>
  );
};

export default DemoRequestPage;