import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaClock,
  FaMapMarkerAlt,
  FaStar,
  FaWhatsapp,
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const PackageCard = ({ item }) => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  // Safety: agar item undefined aa jaye to error nahi aayega
  if (!item) {
    return null;
  }

  const whatsappNumber = "918882128135";

  const message = `Hello Safar Junction, I want to enquire about ${item.title}. Please share package details.`;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div
      className={`premium-card group rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition border border-[#D4AF37]/20 ${
        isLight ? "bg-white" : "bg-white"
      }`}
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071C2F]/85 via-transparent to-transparent"></div>

        <div className="absolute top-5 left-5 flex gap-2 flex-wrap">
          <span className="bg-[#D4AF37] text-[#071C2F] px-4 py-1 rounded-full text-xs font-bold">
            {item.category}
          </span>

          <span className="bg-white/90 text-[#071C2F] px-4 py-1 rounded-full text-xs font-bold">
            {item.type}
          </span>
        </div>

        <div className="absolute bottom-5 left-5 right-5">
          <h3 className="text-2xl font-bold text-white">{item.title}</h3>

          <p className="mt-2 flex items-center gap-2 text-sm text-gray-200">
            <FaMapMarkerAlt className="text-[#D4AF37]" />
            {item.location}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-center justify-between gap-4">
          <p className="flex items-center gap-2 text-sm text-gray-600">
            <FaClock className="text-[#D4AF37]" />
            {item.duration}
          </p>

          <p className="flex items-center gap-1 text-sm font-semibold text-[#071C2F]">
            <FaStar className="text-[#D4AF37]" />
            {item.rating}
          </p>
        </div>

        <p className="mt-4 text-gray-600 text-sm leading-6">
          {item.description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Starting from</p>
            <h4 className="text-2xl font-bold text-[#071C2F]">
              {item.price}
            </h4>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition"
            title="WhatsApp Enquiry"
          >
            <FaWhatsapp />
          </a>
        </div>

        <Link
          to={`/packages/${item.slug}`}
          className="shine-btn mt-6 inline-flex items-center justify-center gap-2 w-full border border-[#071C2F] text-[#071C2F] py-3 rounded-full font-semibold hover:bg-[#071C2F] hover:text-white transition"
        >
          View Details
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;