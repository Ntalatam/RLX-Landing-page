import Header from "@/components/Header";
import Mission from "@/components/Mission";
import Footer from "@/components/Footer";

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* About Section - Added from About page */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About Red Launch Technologies
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're pioneering the future of supply chain intelligence, empowering organizations 
                to make confident decisions in an increasingly complex global economy.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section - Existing content */}
        <Mission />
      </div>
      <Footer />
    </div>
  );
};

export default MissionPage;