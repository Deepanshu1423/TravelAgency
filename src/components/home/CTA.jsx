import { Link } from "react-router-dom";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const CTA = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const whatsappNumber = "918882128135";

  const message =
    "Hello Safar Junction, I want to plan a trip. Please share package details.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section
      className={`px-5 py-20 transition ${
        isLight ? "bg-[#F8FAFC]" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`relative overflow-hidden rounded-[2.5rem] px-6 py-16 md:px-14 md:py-20 shadow-2xl border border-[#D4AF37]/20 ${
            isLight ? "bg-white text-[#071C2F]" : "bg-[#071C2F] text-white"
          }`}
        >
          <div
            className={`absolute inset-0 ${
              isLight
                ? "bg-gradient-to-r from-white via-white/90 to-[#D4AF37]/20"
                : "bg-gradient-to-r from-[#071C2F] via-[#071C2F]/95 to-[#D4AF37]/30"
            }`}
          ></div>

          <div
            className={`absolute inset-0 bg-cover bg-center ${
              isLight ? "opacity-10" : "opacity-20"
            }`}
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80')",
            }}
          ></div>

          <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-[#D4AF37]/20 blur-3xl"></div>
          <div
            className={`absolute -left-20 -top-20 w-72 h-72 rounded-full blur-3xl ${
              isLight ? "bg-[#071C2F]/10" : "bg-white/10"
            }`}
          ></div>

          <div className="relative z-10 max-w-3xl">
            <p className="text-[#D4AF37] uppercase tracking-[0.25em] text-sm font-semibold">
              Plan Your Journey
            </p>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
              Ready To Explore Your Next Destination?
            </h2>

            <p
              className={`mt-5 leading-8 ${
                isLight ? "text-gray-600" : "text-gray-200"
              }`}
            >
              Tell us your destination, budget and travel dates. Our team will
              help you choose the best travel package for your journey.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="shine-btn inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-7 py-3 rounded-full font-bold hover:scale-105 transition shadow-lg"
              >
                <FaWhatsapp />
                WhatsApp Enquiry
              </a>

              <Link
                to="/contact"
                className="shine-btn inline-flex items-center justify-center gap-2 border border-[#D4AF37] text-[#D4AF37] px-7 py-3 rounded-full font-bold hover:bg-[#D4AF37] hover:text-[#071C2F] transition"
              >
                Contact Us
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;