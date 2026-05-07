import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Packages", path: "/packages" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 theme-navbar ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3"
        >
          <img
            src="/logo/safar-logo.jpeg"
            alt="Safar Junction Logo"
            className="h-12 w-24 rounded-xl object-contain bg-white/10 border border-[#D4AF37]/50 shadow-md p-1"
          />

          <div className="leading-tight">
            <h1 className="text-xl md:text-2xl font-bold tracking-wide">
              <span className="light-text-primary">Safar</span>
              <span className="text-[#D4AF37]"> Junction</span>
            </h1>

            <p className="hidden sm:block text-[10px] uppercase tracking-[0.25em] text-gray-400">
              Travel Agency
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm font-semibold transition group ${
                  isActive
                    ? "text-[#D4AF37]"
                    : "light-text-primary hover:text-[#D4AF37]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] bg-[#D4AF37] rounded-full transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}

          <ThemeToggle />

          <Link
            to="/contact"
            className="shine-btn inline-flex items-center gap-2 bg-[#D4AF37] text-[#071C2F] px-5 py-2.5 rounded-full font-bold hover:bg-[#FFF8E7] hover:-translate-y-0.5 transition shadow-lg"
          >
            <FaWhatsapp />
            Book Now
          </Link>
        </div>

        {/* Mobile Right Actions */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-11 h-11 rounded-full bg-white/10 text-[#D4AF37] flex items-center justify-center text-xl border border-[#D4AF37]/30"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-5 mb-5 rounded-[1.5rem] bg-[#071C2F]/95 border border-[#D4AF37]/20 shadow-2xl p-5">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-2xl text-sm font-semibold transition ${
                    isActive
                      ? "bg-[#D4AF37] text-[#071C2F]"
                      : "text-white bg-white/5 hover:bg-white/10"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="shine-btn inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-[#071C2F] px-5 py-3 rounded-2xl font-bold"
            >
              <FaWhatsapp />
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;