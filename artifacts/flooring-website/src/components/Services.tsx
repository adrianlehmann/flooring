import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Layers, BoxSelect, Trash2, ArrowRight } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Hardwood Floor Installation",
      desc: "Professional installation of engineered and traditional hardwood flooring with precision craftsmanship.",
      img: "/service-hardwood.png",
      icon: Layers,
    },
    {
      title: "Laminate Flooring Installation",
      desc: "Durable, attractive laminate flooring installed with careful preparation and expert attention to detail.",
      img: "/service-laminate.png",
      icon: BoxSelect,
    },
    {
      title: "Luxury Vinyl Plank (LVP)",
      desc: "Modern waterproof flooring solutions ideal for busy homes and commercial spaces.",
      img: "/service-lvp.png",
      icon: Layers,
    },
  ];

  const secondaryServices = [
    {
      title: "Baseboard Installation",
      desc: "Clean finishing touches that complete the appearance of every flooring project.",
      icon: BoxSelect,
    },
    {
      title: "Flooring Removal & Preparation",
      desc: "Removal of old flooring and proper subfloor preparation to ensure long-lasting results.",
      icon: Trash2,
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#1f2937] mb-4">
            Flooring Services
          </h2>
          <div className="w-20 h-1 bg-[#b08968] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg">
            Comprehensive installation services focused on quality and
            durability. Every project is handled directly by Joe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full border-none shadow-md overflow-hidden rounded-xl hover:shadow-xl transition-shadow group">
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 p-2 rounded-lg backdrop-blur-sm">
                    <svc.icon className="h-6 w-6 text-[#b08968]" />
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold text-[#1f2937] font-heading">
                    {svc.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {svc.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 md:items-stretch">
          {secondaryServices.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="h-full"
            >
              <Card className="h-full border border-gray-200 shadow-sm bg-white rounded-xl flex items-start p-6">
                <div className="bg-[#b08968]/10 p-4 rounded-xl mr-6 flex-shrink-0">
                  <svc.icon className="h-8 w-8 text-[#b08968]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1f2937] font-heading mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{svc.desc}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center bg-white p-10 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-[#1f2937] mb-4">
            Not sure which flooring is right for you?
          </h3>
          <p className="text-gray-600 mb-8 text-lg">
            Schedule a free consultation. I'll evaluate your space, discuss your
            needs, and help you choose the perfect material.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#1f2937] hover:bg-gray-800 text-white rounded-md text-base px-6 py-4 h-auto font-semibold"
          >
            <a href="#contact">
              Get a Free Consultation{" "}
              <ArrowRight className="ml-2 h-5 w-5 text-[#b08968]" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
