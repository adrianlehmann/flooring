import { Button } from "@/components/ui/button";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  MapPin,
  CalendarDays,
  DollarSign,
} from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-floor.png"
          alt="Gorgeous hardwood floors"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1f2937]/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white pt-4 sm:pt-12 pb-24">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold font-heading text-white leading-[1.1] mb-6"
          >
            Expert Flooring Installation{" "}
            <span className="text-[#b08968]">Done Right the First Time</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed font-light"
          >
            Professional laminate, hardwood, luxury vinyl plank, and trim
            installation throughout South Jordan and surrounding Utah
            communities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#b08968] hover:bg-[#9a7653] text-white rounded-md text-lg px-6 py-4 h-auto font-semibold shadow-lg"
            >
              <a href="#contact">
                Get a Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white rounded-md text-lg px-6 py-4 h-auto font-semibold backdrop-blur-sm"
            >
              <a href="tel:8015550123">
                <Phone className="mr-2 h-5 w-5 text-[#b08968]" /> Call Now
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-300"
          >
            <div className="flex items-center gap-2 bg-[#1f2937]/50 py-2 px-4 rounded-full border border-gray-700">
              <ShieldCheck className="h-5 w-5 text-[#2d6a4f]" />
              Owner Operated
            </div>
            <div className="flex items-center gap-2 bg-[#1f2937]/50 py-2 px-4 rounded-full border border-gray-700">
              <DollarSign className="h-5 w-5 text-[#2d6a4f]" />
              Free Estimates
            </div>
            <div className="flex items-center gap-2 bg-[#1f2937]/50 py-2 px-4 rounded-full border border-gray-700">
              <MapPin className="h-5 w-5 text-[#2d6a4f]" />
              South Jordan, UT
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function ValueProps() {
  const props = [
    { icon: DollarSign, text: "Fair Pricing" },
    { icon: CalendarDays, text: "Punctual & Reliable" },
    { icon: Phone, text: "Outstanding Communication" },
    { icon: ShieldCheck, text: "Quality Craftsmanship" },
  ];

  return (
    <div className="bg-[#1f2937] py-8 border-b border-gray-800 relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:text-left">
          {props.map((prop, idx) => (
            <div
              key={idx}
              className="flex flex-col lg:flex-row items-center gap-4 text-white"
            >
              <div className="bg-[#2d6a4f]/20 p-3 rounded-xl border border-[#2d6a4f]/30">
                <prop.icon className="h-6 w-6 text-[#2d6a4f]" />
              </div>
              <span className="font-semibold text-sm uppercase tracking-wide">
                {prop.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
