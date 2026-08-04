import { Navbar } from "@/components/Navbar";
import { Hero, ValueProps } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About, Process } from "@/components/About";
import { Testimonials, Gallery, ServiceAreas } from "@/components/TestimonialsAndGallery";
import { FAQ, Contact } from "@/components/ContactAndFAQ";
import { Footer } from "@/components/Footer";
import { Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-white overflow-x-hidden selection:bg-[#b08968] selection:text-white">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <ValueProps />
        <Services />
        <About />
        <Process />
        <Testimonials />
        <Gallery />
        <ServiceAreas />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a
          href="tel:8015550123"
          className="flex items-center justify-center w-14 h-14 bg-[#b08968] text-white rounded-full shadow-lg shadow-[#b08968]/40 transition-colors"
          aria-label="Call Now"
        >
          <Phone size={24} />
        </a>
      </div>
    </div>
  );
}