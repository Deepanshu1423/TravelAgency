import { Link } from "react-router-dom";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const DestinationsShowcase = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const destinations = [
    {
      name: "Kedarnath",
      location: "Uttarakhand",
      tag: "Pilgrimage",
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",
    },
    {
      name: "Goa",
      location: "India",
      tag: "Beach",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",
    },
    {
      name: "Dubai",
      location: "UAE",
      tag: "International",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80",
    },
    {
      name: "Maldives",
      location: "Island",
      tag: "Honeymoon",
      image:
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <section
      className={`py-20 px-5 transition relative overflow-hidden ${
        isLight ? "bg-[#F8FAFC]" : "bg-[#FFF8E7]"
      }`}
    >
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
      <div
        className={`absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl ${
          isLight ? "bg-[#071C2F]/10" : "bg-[#071C2F]/15"
        }`}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-[#D4AF37] uppercase tracking-[0.25em] text-sm font-semibold">
              Top Destinations
            </p>

            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-[#071C2F] leading-tight">
              Explore Beautiful Places With Premium Travel Plans
            </h2>

            <p className="mt-5 text-gray-600 leading-7">
              From peaceful pilgrimage routes to luxury international escapes,
              choose destinations that match your mood, budget and travel style.
            </p>
          </div>

          <Link
            to="/packages"
            className={`shine-btn inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-bold transition w-fit ${
              isLight
                ? "bg-[#071C2F] text-white hover:bg-[#D4AF37] hover:text-[#071C2F]"
                : "bg-[#071C2F] text-white hover:bg-[#D4AF37] hover:text-[#071C2F]"
            }`}
          >
            Explore All
            <FaArrowRight />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {destinations.map((item, index) => (
            <div
              key={item.name}
              className={`premium-card group relative overflow-hidden rounded-[2rem] shadow-xl border border-[#D4AF37]/20 ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.name}
                className={`w-full object-cover group-hover:scale-110 transition duration-700 ${
                  index === 0 ? "h-[460px]" : "h-[460px] lg:h-[360px]"
                }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071C2F]/95 via-[#071C2F]/25 to-transparent"></div>

              <div className="absolute top-5 left-5">
                <span className="bg-[#D4AF37] text-[#071C2F] px-4 py-1 rounded-full text-xs font-bold">
                  {item.tag}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-3xl font-bold">{item.name}</h3>

                <p className="mt-2 flex items-center gap-2 text-sm text-gray-200">
                  <FaMapMarkerAlt className="text-[#D4AF37]" />
                  {item.location}
                </p>

                <Link
                  to="/packages"
                  className="mt-5 inline-flex items-center gap-2 text-[#D4AF37] font-bold hover:text-white transition"
                >
                  View Packages
                  <FaArrowRight />
                </Link>
              </div>

              {/* Premium shine overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsShowcase;