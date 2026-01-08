import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <main>
        <Hero />
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default Index;