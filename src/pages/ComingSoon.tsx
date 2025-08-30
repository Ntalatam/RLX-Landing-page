import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ComingSoon = () => (
  <div className="min-h-screen flex flex-col bg-transparent">
    <Header />
    <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Coming Soon</h1>
      <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-xl">
        This page or feature is under construction. Please check back soon!
      </p>
    </main>
    <Footer />
  </div>
);

export default ComingSoon;