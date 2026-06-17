import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Reviews", href: "#reviews" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#1f2937] shadow-lg py-3" : "bg-[#1f2937]/95 py-5"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img src="/logo-white.png" alt="3 Monkeys Floor Installation" className="h-12 lg:h-14 w-auto" />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-gray-200 hover:text-[#b08968] font-medium text-sm uppercase tracking-wide transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild className="bg-[#b08968] hover:bg-[#9a7653] text-white border-none shadow-md rounded-md px-6 font-semibold">
            <a href="#contact">Get Free Estimate</a>
          </Button>
        </div>

        <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#1f2937] border-t border-gray-800 shadow-xl flex flex-col py-4 px-6 gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white hover:text-[#b08968] py-3 border-b border-gray-800 font-medium uppercase tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="bg-[#b08968] hover:bg-[#9a7653] text-white mt-4 w-full rounded-md font-semibold py-6">
            <a href="#contact" onClick={() => setIsOpen(false)}>Get Free Estimate</a>
          </Button>
        </div>
      )}
    </nav>
  );
}