export function Footer() {
  return (
    <footer className="bg-[#111827] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <div className="mb-6">
              <img src="/logo-white.png" alt="3 Monkeys Floor Installation" className="h-14 w-auto" />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Expert flooring installation for homeowners who value quality, clear communication, and professional craftsmanship.
            </p>
            <div className="text-gray-400 text-sm">
              <p className="mb-1">South Jordan, UT</p>
              <p className="mb-1">Owner Operated</p>
              <p>Licensed & Insured</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold font-heading mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {["Services", "About", "Reviews", "Gallery", "FAQ", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-[#b08968] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold font-heading mb-6 text-white">Service Areas</h4>
            <ul className="space-y-3">
              {["South Jordan", "Sandy", "Draper", "Riverton", "Herriman", "West Jordan"].map((city) => (
                <li key={city} className="text-gray-400">
                  {city}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} 3 Monkeys Floor Installation. All rights reserved.</p>
          <p>Built with <span className="text-[#b08968]">care</span> in Utah.</p>
        </div>
      </div>
    </footer>
  );
}