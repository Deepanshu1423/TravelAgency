import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaMapMarkedAlt, FaStar, FaWhatsapp } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section
      className={`relative min-h-screen overflow-hidden ${
        isLight ? "bg-[#F8FAFC] text-[#071C2F]" : "bg-[#071C2F] text-white"
      }`}
    >
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center ${
          isLight ? "opacity-20" : "opacity-35"
        }`}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80')",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 ${
          isLight
            ? "bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/90 to-[#FFF8E7]/40"
            : "bg-gradient-to-r from-[#071C2F] via-[#071C2F]/90 to-[#071C2F]/30"
        }`}
      ></div>

      {/* Blur Effects */}
      <div className="absolute top-24 right-20 w-72 h-72 bg-[#D4AF37]/20 rounded-full blur-3xl"></div>
      <div
        className={`absolute bottom-16 left-12 w-60 h-60 rounded-full blur-3xl ${
          isLight ? "bg-[#071C2F]/10" : "bg-white/10"
        }`}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 text-[#D4AF37] uppercase tracking-[0.25em] text-xs md:text-sm font-semibold mb-5"
            >
              <FaMapMarkedAlt />
              Premium Travel Agency
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="hero-premium-title text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span
                className={
                  isLight ? "block text-[#071C2F]" : "block text-white"
                }
              >
                Discover Your
              </span>

              <span className="block animated-gold-gradient">
                Dream Journey
              </span>

              <span
                className={
                  isLight ? "block text-[#071C2F]" : "block text-white"
                }
              >
                With Us
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "180px" }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="animated-gold-line mt-6 h-[4px] rounded-full"
            ></motion.div>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={`mt-6 text-base md:text-lg leading-8 max-w-2xl ${
                isLight ? "text-gray-600" : "text-gray-200"
              }`}
            >
              Explore handpicked destinations, luxury stays, pilgrimage tours,
              honeymoon trips and family holidays with Safar Junction.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-9 flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/packages"
                className="shine-btn bg-[#D4AF37] text-[#071C2F] px-7 py-3 rounded-full font-bold hover:bg-[#FFF8E7] transition text-center shadow-lg hover:-translate-y-1"
              >
                Explore Packages
              </Link>

              <Link
                to="/contact"
                className={`shine-btn border border-[#D4AF37] px-7 py-3 rounded-full font-bold transition text-center hover:-translate-y-1 ${
                  isLight
                    ? "text-[#071C2F] hover:bg-[#D4AF37] hover:text-[#071C2F]"
                    : "text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#071C2F]"
                }`}
              >
                Plan Your Trip
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-4 max-w-xl"
            >
              {[
                { value: "50+", label: "Packages" },
                { value: "1K+", label: "Travellers" },
                { value: "4.8", label: "Rating" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`rounded-2xl p-4 border backdrop-blur-md ${
                    isLight
                      ? "bg-white/80 border-[#D4AF37]/30 shadow-lg"
                      : "bg-white/10 border-white/15"
                  }`}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37]">
                    {stat.value}
                  </h3>
                  <p
                    className={`text-xs md:text-sm mt-1 ${
                      isLight ? "text-gray-600" : "text-gray-300"
                    }`}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Floating Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 35 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="rounded-[2rem] overflow-hidden border border-[#D4AF37]/25 shadow-2xl bg-white/10 backdrop-blur-xl">
                <img
                  src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=900&q=80"
                  alt="Travel experience"
                  className="w-full h-[520px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071C2F]/85 via-transparent to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6 bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl p-5 text-white">
                  <div className="flex items-center gap-2 text-[#D4AF37] mb-2">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  <h3 className="text-2xl font-bold">
                    Custom Holiday Packages
                  </h3>

                  <p className="text-gray-200 text-sm mt-2">
                    Get personalized travel plans for family, honeymoon,
                    adventure and pilgrimage trips.
                  </p>

                  <a
                    href="https://wa.me/918882128135"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
                  >
                    <FaWhatsapp />
                    WhatsApp Us
                  </a>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 bg-[#D4AF37] text-[#071C2F] rounded-2xl px-5 py-4 shadow-xl">
                <p className="text-sm font-semibold">Starting from</p>
                <h4 className="text-2xl font-bold">₹9,999</h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
