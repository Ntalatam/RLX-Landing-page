import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="pt-20 flex-grow">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;