import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
