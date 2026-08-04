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

      <a
        href="tel:8015550123"
        className="fixed bottom-6 right-6 z-50 bg-[#b08968] text-white rounded-full py-4 px-6 shadow-2xl flex items-center gap-2 font-bold hover:bg-[#9a7653] transition-transform hover:scale-105 active:scale-95 animate-bounce-short"
        aria-label="Call Now"
      >
        <Phone className="w-5 h-5" />
        <span className="hidden md:inline">Call Now: </span>(801) 555-0123
      </a>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes bounce-short {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-short {
          animation: bounce-short 3s ease-in-out infinite;
        }
      `,
        }}
      />
    </div>
  );
}