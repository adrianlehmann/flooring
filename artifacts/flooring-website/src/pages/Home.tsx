import { Navbar } from "@/components/Navbar";
import { Hero, ValueProps } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About, Process } from "@/components/About";
import { Testimonials, Gallery, ServiceAreas } from "@/components/TestimonialsAndGallery";
import { FAQ, Contact } from "@/components/ContactAndFAQ";
import { Footer } from "@/components/Footer";

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
    </div>
  );
}