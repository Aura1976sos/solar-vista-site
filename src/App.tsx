import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Services } from "./components/sections/Services";
import { Projects } from "./components/sections/Projects";
import { Blog } from "./components/sections/Blog";
import { FAQ } from "./components/sections/FAQ";
import { Contact } from "./components/sections/Contact";
import Shops from "./components/sections/Shops";
import Gallery from "./components/sections/Gallery";
import Schedule from "./components/sections/Schedule";

// Page Components
const HomePage = () => (
  <>
    <Hero />
    <About />
    <Services />
    <Projects />
    <Blog />
    <FAQ />
    <Contact />
  </>
);

const AboutPage = () => (
  <div className="pt-20">
    <div className="bg-primary/5 py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
        <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
          Learn about our mission to democratize clean energy and our commitment to excellence.
        </p>
      </div>
    </div>
    <About />
  </div>
);

const ServicesPage = () => (
  <div className="pt-20">
    <div className="bg-primary/5 py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">Our Services</h1>
        <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
          Tailored solar solutions for every property, from residential roofs to industrial solar farms.
        </p>
      </div>
    </div>
    <Services />
  </div>
);

const ProjectsPage = () => (
  <div className="pt-20">
    <div className="bg-primary/5 py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">Our Projects Portfolio</h1>
        <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
          A showcase of our recent installations and the tangible impact we've made across Nigeria.
        </p>
      </div>
    </div>
    <Projects />
  </div>
);

const BlogPage = () => (
  <div className="pt-20">
    <div className="bg-primary/5 py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">Solar Blog</h1>
        <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
          Expert insights, industry news, and tips for a sustainable lifestyle.
        </p>
      </div>
    </div>
    <Blog />
  </div>
);

const FAQPage = () => (
  <div className="pt-20">
    <div className="bg-primary/5 py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">Frequently Asked Questions</h1>
        <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
          Everything you need to know about going solar, answered by our experts.
        </p>
      </div>
    </div>
    <FAQ />
  </div>
);

const ContactPage = () => (
  <div className="pt-20">
    <div className="bg-primary/5 py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">Get in Touch</h1>
        <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
          Ready to start? Contact us today for a free energy consultation.
        </p>
      </div>
    </div>
    <Contact />
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/shops" element={<Shops />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/schedule" element={<Schedule />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-center" richColors />
      </div>
    </Router>
  );
}

export default App;