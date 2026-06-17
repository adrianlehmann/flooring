import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function FAQ() {
  const faqs = [
    {
      q: "What types of flooring do you install?",
      a: "Hardwood, engineered hardwood, laminate, luxury vinyl plank, and related flooring products.",
    },
    {
      q: "Do you provide free estimates?",
      a: "Yes, all estimates are free with no obligation.",
    },
    {
      q: "How long does installation take?",
      a: "Project timelines vary depending on size and complexity. We'll give you a realistic timeline during your estimate.",
    },
    {
      q: "Do you remove old flooring?",
      a: "Yes, flooring removal and preparation services are available.",
    },
    {
      q: "Do you install baseboards?",
      a: "Yes, baseboard installation is part of our complete flooring service.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#1f2937] mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-[#2d6a4f] mx-auto rounded-full mb-6"></div>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-2"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b-gray-100 last:border-0"
            >
              <AccordionTrigger className="text-left font-semibold text-lg text-[#1f2937] hover:text-[#b08968] hover:no-underline px-6 py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 px-6 pb-6 text-base leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  location: z.string().optional(),
  flooringType: z.string().min(1, "Please select a flooring type"),
  details: z.string().optional(),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      location: "",
      flooringType: "",
      details: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Success!",
      description: "Thanks! Joe will be in touch within 24 hours.",
      className: "bg-[#2d6a4f] text-white border-none",
    });
    form.reset();
  }

  return (
    <section
      id="contact"
      className="py-24 bg-[#1f2937] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#2d6a4f]/10 blur-3xl transform translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[#b08968]/10 blur-3xl transform -translate-x-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-5/12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Get Your Free Flooring Estimate
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              Tell us about your project and we'll get back to you quickly to
              schedule a time to look at your space.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Phone className="h-6 w-6 text-[#b08968]" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">
                    Call Us
                  </h4>
                  <a
                    href="tel:8015550123"
                    className="text-2xl font-semibold hover:text-[#b08968] transition-colors"
                  >
                    (801) 555-0123
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Mail className="h-6 w-6 text-[#b08968]" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">
                    Email Us
                  </h4>
                  <a
                    href="mailto:joe@3monkeysfloors.com"
                    className="text-xl font-semibold hover:text-[#b08968] transition-colors"
                  >
                    joe@3monkeysfloors.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Clock className="h-6 w-6 text-[#b08968]" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">
                    Business Hours
                  </h4>
                  <p className="text-xl font-semibold">Mon-Fri: 8am - 6pm</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="h-6 w-6 text-[#2d6a4f]" />
                <span className="font-bold text-lg">Licensed & Insured</span>
              </div>
              <p className="text-sm text-gray-400">
                Rest easy knowing your home is protected while we work.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#1f2937] font-semibold">
                            Full Name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              className="bg-gray-50 border-gray-200 focus:border-[#b08968] focus:ring-[#b08968] py-6"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#1f2937] font-semibold">
                            Phone Number *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="(801) 555-0000"
                              className="bg-gray-50 border-gray-200 focus:border-[#b08968] focus:ring-[#b08968] py-6"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#1f2937] font-semibold">
                            Email Address *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="john@example.com"
                              className="bg-gray-50 border-gray-200 focus:border-[#b08968] focus:ring-[#b08968] py-6"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#1f2937] font-semibold">
                            Project City
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="South Jordan, Sandy, etc."
                              className="bg-gray-50 border-gray-200 focus:border-[#b08968] focus:ring-[#b08968] py-6"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="flooringType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#1f2937] font-semibold">
                          Primary Service Needed *
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-gray-50 border-gray-200 focus:border-[#b08968] focus:ring-[#b08968] py-6">
                              <SelectValue placeholder="Select flooring type..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Hardwood">
                              Hardwood Installation
                            </SelectItem>
                            <SelectItem value="Laminate">
                              Laminate Installation
                            </SelectItem>
                            <SelectItem value="LVP">
                              Luxury Vinyl Plank (LVP)
                            </SelectItem>
                            <SelectItem value="Baseboards">
                              Baseboards Only
                            </SelectItem>
                            <SelectItem value="Removal">
                              Removal/Prep Only
                            </SelectItem>
                            <SelectItem value="Other">
                              Other / Not Sure Yet
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="details"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#1f2937] font-semibold">
                          Project Details
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us a bit about your project (estimated square footage, current flooring, timeline, etc.)"
                            className="resize-none bg-gray-50 border-gray-200 focus:border-[#b08968] focus:ring-[#b08968] min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-[#b08968] hover:bg-[#9a7653] text-white py-4 text-lg font-bold rounded-xl shadow-lg mt-4"
                  >
                    Request My Free Estimate
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
