import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  ThumbsUp,
  MessageSquare,
  MapPin,
  Star,
  User,
} from "lucide-react";

export function About() {
  const reasons = [
    {
      icon: MessageSquare,
      title: "Direct Communication",
      desc: "Work directly with the installer throughout your project.",
    },
    {
      icon: CheckCircle2,
      title: "Accurate Estimates",
      desc: "Clear pricing and realistic timelines.",
    },
    {
      icon: Clock,
      title: "On-Time Completion",
      desc: "Projects completed as promised.",
    },
    {
      icon: Star,
      title: "Quality Craftsmanship",
      desc: "Attention to detail from floor prep to final finishing.",
    },
    {
      icon: MapPin,
      title: "Trusted Local Contractor",
      desc: "Serving South Jordan and surrounding Utah communities.",
    },
    {
      icon: ThumbsUp,
      title: "Customer-First Approach",
      desc: "Every decision is made with the customer's best interest in mind.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="flex justify-center lg:justify-start">
              <div className="relative" style={{ width: "300px" }}>
                <div
                  className="bg-gray-100 rounded-3xl overflow-hidden relative shadow-xl"
                  style={{ width: "300px", height: "300px" }}
                ></div>
                <div className="absolute -bottom-5 -right-10 bg-[#2d6a4f] p-4 rounded-xl shadow-xl">
                  <div className="text-white text-center">
                    <span className="block text-2xl font-black font-heading mb-0.5">
                      100%
                    </span>
                    <span className="text-xs font-medium uppercase tracking-wider text-green-100">
                      Owner Operated
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-sm font-bold tracking-widest text-[#b08968] uppercase mb-2">
              About The Company
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold font-heading text-[#1f2937] mb-6">
              Meet Joe
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Joe takes pride in delivering exceptional flooring installations
              backed by honest communication, fair pricing, and reliable
              workmanship. As the owner and installer behind 3 Monkeys Floor
              Installation, he works directly with every customer from estimate
              to completion, ensuring every project receives the attention it
              deserves.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Years of hands-on experience",
                "Personal accountability on every job",
                "Direct communication — no middlemen",
                "Deep pride in craftsmanship",
                "Problem-solving expertise",
                "Commitment to customer satisfaction",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#b08968] flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#1f2937] mb-4">
              Why Choose Us
            </h2>
            <div className="w-20 h-1 bg-[#2d6a4f] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm mb-6 border border-gray-100">
                  <reason.icon className="h-6 w-6 text-[#2d6a4f]" />
                </div>
                <h4 className="text-xl font-bold text-[#1f2937] font-heading mb-3">
                  {reason.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const steps = [
    {
      num: "01",
      title: "Request a Free Estimate",
      desc: "Contact us to schedule a visit to your home.",
    },
    {
      num: "02",
      title: "Receive Transparent Pricing",
      desc: "Get a clear, honest quote with no hidden fees.",
    },
    {
      num: "03",
      title: "Schedule Installation",
      desc: "Pick a date that works for your timeline.",
    },
    {
      num: "04",
      title: "Enjoy Beautiful New Floors",
      desc: "Watch your space transform with quality craftsmanship.",
    },
  ];

  return (
    <section className="py-24 bg-[#1f2937] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
            How It Works
          </h2>
          <div className="w-20 h-1 bg-[#b08968] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg">
            A simple, stress-free process from start to finish.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto bg-[#1f2937] border-4 border-[#b08968] rounded-full flex items-center justify-center mb-6 shadow-[0_0_0_8px_rgba(31,41,55,1)]">
                  <span className="text-2xl font-black font-heading text-[#b08968]">
                    {step.num}
                  </span>
                </div>
                <h4 className="text-xl font-bold font-heading mb-3 text-white">
                  {step.title}
                </h4>
                <p className="text-gray-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
