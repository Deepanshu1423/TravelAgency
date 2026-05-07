import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const whatsappNumber = "918882128135";

  const message =
    "Hello Safar Junction, I want to know more about your travel packages.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;

  const footerBg = isLight
    ? "bg-[#F8FAFC] text-[#071C2F] border-t border-[#D4AF37]/20"
    : "bg-[#071C2F] text-white";

  const mutedText = isLight ? "text-gray-600" : "text-gray-300";

  const softCard = isLight
    ? "bg-white border border-[#D4AF37]/20 shadow-xl"
    : "bg-white/10 border border-[#D4AF37]/20 backdrop-blur-md";

  const iconBox = isLight
    ? "bg-[#FFF8E7] text-[#071C2F] border border-[#D4AF37]/30"
    : "bg-white/10 text-white";

  return (
    <footer className={`relative overflow-hidden ${footerBg}`}>
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 pt-16 pb-8">
        {/* Top CTA */}
        <div
          className={`mb-14 rounded-[2rem] p-6 md:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 ${softCard}`}
        >
          <div>
            <p className="text-[#D4AF37] uppercase tracking-[0.25em] text-xs font-semibold">
              Start Your Journey
            </p>

            <h2 className="mt-2 text-2xl md:text-4xl font-bold">
              Need Help Planning Your Next Trip?
            </h2>

            <p className={`mt-3 max-w-2xl leading-7 ${mutedText}`}>
              Contact Safar Junction and get a custom travel plan for your
              destination, budget and dates.
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="shine-btn inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-[#071C2F] px-7 py-3 rounded-full font-bold hover:bg-[#FFF8E7] transition w-fit shadow-lg"
          >
            <FaWhatsapp />
            WhatsApp Us
          </a>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <div className="brand-logo-circle footer-logo-circle">
                <img src="/logo/safar-logo.jpeg" alt="Safar Junction Logo" />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  Safar <span className="text-[#D4AF37]">Junction</span>
                </h2>

                <p
                  className={`text-[10px] uppercase tracking-[0.25em] ${mutedText}`}
                >
                  Travel Agency
                </p>
              </div>
            </Link>

            <p className={`mt-5 text-sm leading-7 ${mutedText}`}>
              Premium travel packages, custom itineraries, pilgrimage tours,
              honeymoon trips and international holidays for every traveller.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className={`w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#071C2F] transition ${iconBox}`}
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className={`w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#071C2F] transition ${iconBox}`}
              >
                <FaInstagram />
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-[#D4AF37]">Quick Links</h3>

            <div className={`mt-5 space-y-3 text-sm ${mutedText}`}>
              <Link
                to="/"
                className="flex items-center gap-2 hover:text-[#D4AF37] transition"
              >
                <FaArrowRight className="text-xs" />
                Home
              </Link>

              <Link
                to="/packages"
                className="flex items-center gap-2 hover:text-[#D4AF37] transition"
              >
                <FaArrowRight className="text-xs" />
                Packages
              </Link>

              <Link
                to="/gallery"
                className="flex items-center gap-2 hover:text-[#D4AF37] transition"
              >
                <FaArrowRight className="text-xs" />
                Gallery
              </Link>

              <Link
                to="/contact"
                className="flex items-center gap-2 hover:text-[#D4AF37] transition"
              >
                <FaArrowRight className="text-xs" />
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-[#D4AF37]">Our Services</h3>

            <div className={`mt-5 space-y-3 text-sm ${mutedText}`}>
              <p className="flex items-center gap-2">
                <FaArrowRight className="text-xs text-[#D4AF37]" />
                Domestic Tours
              </p>

              <p className="flex items-center gap-2">
                <FaArrowRight className="text-xs text-[#D4AF37]" />
                International Trips
              </p>

              <p className="flex items-center gap-2">
                <FaArrowRight className="text-xs text-[#D4AF37]" />
                Pilgrimage Packages
              </p>

              <p className="flex items-center gap-2">
                <FaArrowRight className="text-xs text-[#D4AF37]" />
                Honeymoon Packages
              </p>

              <p className="flex items-center gap-2">
                <FaArrowRight className="text-xs text-[#D4AF37]" />
                Custom Itineraries
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-[#D4AF37]">Contact Info</h3>

            <div className={`mt-5 space-y-4 text-sm ${mutedText}`}>
              <p className="flex items-start gap-3">
                <FaPhoneAlt className="text-[#D4AF37] mt-1" />
                +91 88821 28135
              </p>

              <p className="flex items-start gap-3">
                <FaEnvelope className="text-[#D4AF37] mt-1" />
                safarjunction88@gmail.com
              </p>

              <p className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#D4AF37] mt-1" />
                Noida sector 16, Uttar Pradesh, India - 201301
              </p>
            </div>

            <div className={`mt-6 rounded-2xl p-4 ${softCard}`}>
              <p className={`text-sm leading-6 ${mutedText}`}>Office Hours</p>

              <h4 className="mt-1 font-bold">Mon - Sat: 10 AM - 7 PM</h4>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className={`mt-12 pt-6 border-t ${
            isLight ? "border-[#071C2F]/10" : "border-white/10"
          } flex flex-col md:flex-row items-center justify-between gap-4 text-sm ${mutedText}`}
        >
          <p>© 2026 Safar Junction. All rights reserved.</p>

          <div className="flex gap-5">
            <span className="hover:text-[#D4AF37] transition cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-[#D4AF37] transition cursor-pointer">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
