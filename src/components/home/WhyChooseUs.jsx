import {
  FaHeadset,
  FaHotel,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const WhyChooseUs = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const features = [
    {
      icon: <FaMapMarkedAlt />,
      title: "Handpicked Destinations",
      description:
        "We select trusted destinations and travel experiences for families, couples and groups.",
    },
    {
      icon: <FaHotel />,
      title: "Comfortable Stays",
      description:
        "Premium hotels, clean rooms and comfortable travel arrangements for a smooth journey.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Travel Support",
      description:
        "Our team supports you before and during your trip for a worry-free experience.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Safe & Trusted",
      description:
        "Transparent pricing, verified plans and reliable arrangements for every traveller.",
    },
  ];

  return (
    <section
      className={`py-20 px-5 transition ${
        isLight ? "bg-white" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left About Content */}
          <div>
            <p className="text-[#D4AF37] uppercase tracking-[0.25em] text-sm font-semibold">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-[#071C2F] leading-tight">
              We Make Your Travel Comfortable, Safe & Memorable
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Safar Junction helps travellers explore beautiful destinations
              with carefully planned tour packages, comfortable stays, transport
              support and personalized guidance.
            </p>

            <p className="mt-4 text-gray-600 leading-8">
              Whether you are planning a pilgrimage, honeymoon, family holiday
              or international tour, our goal is to make your journey smooth,
              premium and stress-free.
            </p>

            {/* Stats */}
            <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="premium-card rounded-2xl bg-[#FFF8E7] p-5 border border-[#D4AF37]/30">
                <div className="text-[#D4AF37] text-2xl">
                  <FaUsers />
                </div>

                <h3 className="mt-3 text-2xl font-bold text-[#071C2F]">
                  1K+
                </h3>

                <p className="text-sm text-gray-600">Happy Travellers</p>
              </div>

              <div className="premium-card rounded-2xl bg-[#FFF8E7] p-5 border border-[#D4AF37]/30">
                <div className="text-[#D4AF37] text-2xl">
                  <FaMapMarkedAlt />
                </div>

                <h3 className="mt-3 text-2xl font-bold text-[#071C2F]">
                  50+
                </h3>

                <p className="text-sm text-gray-600">Tour Packages</p>
              </div>

              <div className="premium-card rounded-2xl bg-[#FFF8E7] p-5 border border-[#D4AF37]/30">
                <div className="text-[#D4AF37] text-2xl">
                  <FaStar />
                </div>

                <h3 className="mt-3 text-2xl font-bold text-[#071C2F]">
                  4.8
                </h3>

                <p className="text-sm text-gray-600">User Rating</p>
              </div>
            </div>
          </div>

          {/* Right Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`premium-card group rounded-[2rem] p-7 shadow-lg transition duration-300 border border-[#D4AF37]/20 ${
                  isLight
                    ? "bg-white text-[#071C2F]"
                    : "bg-[#071C2F] text-white"
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-[#D4AF37] text-[#071C2F] flex items-center justify-center text-2xl group-hover:scale-110 transition">
                  {feature.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold">{feature.title}</h3>

                <p
                  className={`mt-3 text-sm leading-6 ${
                    isLight ? "text-gray-600" : "text-gray-300"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;