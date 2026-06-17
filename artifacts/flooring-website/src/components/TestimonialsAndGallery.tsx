import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonials() {
  const reviews = [
    {
      text: "Joe did an amazing job on our floor install. I was impressed with his quick and timely communication every step of the way. He was punctual, finished the project on time and asked our input on preferences when it really mattered. Most important of all, our floors look spectacular.",
      name: "Verified Customer"
    },
    {
      text: "His workmanship is outstanding and he takes pride in his work. Each installation was completed in the timeframe that he stated. His quotes were right on with no extra surprises.",
      name: "Verified Customer"
    },
    {
      text: "Joe is the best floor installer out there. He is fast and thorough, communicates clearly, and our floors look incredible.",
      name: "Verified Customer"
    },
    {
      text: "Five stars because I appreciate the quality of both communication and craftsmanship.",
      name: "Verified Customer"
    },
    {
      text: "I prefer supporting small businesses and his company put the big guys to shame.",
      name: "Verified Customer"
    },
    {
      text: "Quality was always the goal when a decision was needed. You can't go wrong.",
      name: "Verified Customer"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-[#2d6a4f]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">What Our Customers Say</h2>
          <div className="w-20 h-1 bg-[#b08968] mx-auto rounded-full mb-6"></div>
          <p className="text-green-100 text-lg">Real feedback from local homeowners.</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="bg-white border-none shadow-xl h-full rounded-2xl">
                      <CardContent className="flex flex-col justify-between h-full p-8">
                        <div>
                          <div className="flex gap-1 mb-6">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-5 w-5 fill-[#b08968] text-[#b08968]" />
                            ))}
                          </div>
                          <p className="text-gray-700 italic leading-relaxed mb-6">"{review.text}"</p>
                        </div>
                        <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                          <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <span className="text-[#2d6a4f] font-bold font-heading">{review.name.charAt(0)}</span>
                          </div>
                          <span className="font-semibold text-[#1f2937]">{review.name}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-10">
              <CarouselPrevious className="position-static bg-white/10 text-white border-white/20 hover:bg-white hover:text-[#2d6a4f] h-12 w-12 static translate-y-0" />
              <CarouselNext className="position-static bg-white/10 text-white border-white/20 hover:bg-white hover:text-[#2d6a4f] h-12 w-12 static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  const images = [
    { src: "/gallery-1.png", title: "Modern Dark Oak", type: "Hardwood", style: "col-span-1 row-span-1 aspect-square" },
    { src: "/gallery-2.png", title: "Elegant Hallway", type: "LVP", style: "col-span-1 row-span-2 aspect-[3/4]" },
    { src: "/gallery-4.png", title: "Rustic Living Space", type: "Laminate", style: "col-span-1 row-span-2 aspect-[3/4]" },
    { src: "/gallery-3.png", title: "Light Scandinavian", type: "Hardwood", style: "col-span-1 row-span-1 aspect-square" },
  ];

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#1f2937] mb-4">Our Work</h2>
          <div className="w-20 h-1 bg-[#b08968] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg">A selection of recent flooring projects completed by Joe.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-min max-w-6xl mx-auto">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative group overflow-hidden rounded-xl bg-gray-200 ${img.style}`}
            >
              <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f2937]/90 via-[#1f2937]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[#b08968] font-bold text-sm uppercase tracking-widest mb-1">{img.type}</span>
                <h4 className="text-white font-heading font-bold text-xl">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-500 font-medium">Contact us to see more project photos and material samples.</p>
        </div>
      </div>
    </section>
  );
}

export function ServiceAreas() {
  const cities = ["South Jordan", "Sandy", "Draper", "Riverton", "Herriman", "West Jordan", "Bluffdale", "Salt Lake County"];
  
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 text-center">
        <MapPin className="h-12 w-12 text-[#b08968] mx-auto mb-6" />
        <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#1f2937] mb-8">Proudly Serving South Jordan & Surrounding Areas</h2>
        
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-8">
          {cities.map((city, i) => (
            <span key={i} className="bg-gray-100 text-gray-700 px-5 py-2 rounded-full font-medium text-sm border border-gray-200">
              {city}
            </span>
          ))}
        </div>
        
        <p className="text-gray-600">Not sure if we service your area? Contact us for a free estimate.</p>
      </div>
    </section>
  );
}