import { Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
  FaRupeeSign,
  FaStar,
  FaTimesCircle,
  FaWhatsapp,
} from "react-icons/fa";
import { packagesData } from "../data/packagesData";
import PackageCard from "../components/packages/PackageCard";
import { useTheme } from "../context/ThemeContext";

const PackageDetails = () => {
  const { id } = useParams();
  const { theme } = useTheme();
  const isLight = theme === "light";

  const packageItem = packagesData.find((item) => item.slug === id);

  if (!packageItem) {
    return (
      <section
        className={`min-h-screen px-5 pt-32 pb-24 ${
          isLight ? "bg-[#F8FAFC]" : "bg-[#FFF8E7]"
        }`}
      >
        <div className="max-w-4xl mx-auto bg-white rounded-4xl p-10 text-center shadow border border-[#D4AF37]/20">
          <h1 className="text-3xl font-bold text-[#071C2F]">
            Package Not Found
          </h1>

          <p className="mt-4 text-gray-600">
            The package you are looking for does not exist.
          </p>

          <Link
            to="/packages"
            className="shine-btn mt-7 inline-flex items-center gap-2 bg-[#071C2F] text-white px-7 py-3 rounded-full font-bold hover:bg-[#D4AF37] hover:text-[#071C2F] transition"
          >
            <FaArrowLeft />
            Back to Packages
          </Link>
        </div>
      </section>
    );
  }

  const whatsappNumber = "918882128135";

  const message = `Hello Safar Junction, I want to book/enquire about ${packageItem.title}.

Package: ${packageItem.title}
Location: ${packageItem.location}
Duration: ${packageItem.duration}
Price: ${packageItem.price}

Please share complete details.`;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  const relatedPackages = packagesData
    .filter(
      (item) =>
        item.slug !== packageItem.slug &&
        (item.category === packageItem.category ||
          item.type === packageItem.type)
    )
    .slice(0, 3);

  const pageBg = isLight ? "bg-[#F8FAFC]" : "bg-[#FFF8E7]";
  const bannerBg = isLight
    ? "bg-[#F8FAFC] text-[#071C2F]"
    : "bg-[#071C2F] text-white";
  const mutedText = isLight ? "text-gray-600" : "text-gray-200";

  return (
    <section className={`${pageBg} min-h-screen transition`}>
      {/* Banner */}
      <div className={`relative min-h-[70vh] overflow-hidden ${bannerBg}`}>
        <img
          src={packageItem.image}
          alt={packageItem.title}
          className={`absolute inset-0 w-full h-full object-cover ${
            isLight ? "opacity-20" : "opacity-35"
          }`}
        />

        <div
          className={`absolute inset-0 ${
            isLight
              ? "bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/90 to-[#FFF8E7]/40"
              : "bg-gradient-to-r from-[#071C2F] via-[#071C2F]/90 to-[#071C2F]/30"
          }`}
        ></div>

        <div className="absolute top-24 right-20 w-72 h-72 bg-[#D4AF37]/20 rounded-full blur-3xl"></div>

        <div
          className={`absolute bottom-0 left-10 w-64 h-64 rounded-full blur-3xl ${
            isLight ? "bg-[#071C2F]/10" : "bg-white/10"
          }`}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 pt-32 pb-20 min-h-[70vh] flex items-end">
          <div className="max-w-4xl">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold hover:opacity-80 transition mb-6"
            >
              <FaArrowLeft />
              Back to Packages
            </Link>

            <div className="flex flex-wrap gap-3 mb-5">
              <span className="bg-[#D4AF37] text-[#071C2F] px-4 py-1 rounded-full text-sm font-bold">
                {packageItem.category}
              </span>

              <span
                className={`px-4 py-1 rounded-full text-sm font-bold border ${
                  isLight
                    ? "bg-white/80 text-[#071C2F] border-[#D4AF37]/30"
                    : "bg-white/15 text-white border-white/20"
                }`}
              >
                {packageItem.type}
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold leading-tight">
              {packageItem.title}
            </h1>

            <p className={`mt-5 text-lg leading-8 max-w-3xl ${mutedText}`}>
              {packageItem.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Main */}
          <div className="lg:col-span-2 space-y-8">
            {/* Info Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  icon: <FaMapMarkerAlt />,
                  label: "Location",
                  value: packageItem.location,
                },
                {
                  icon: <FaClock />,
                  label: "Duration",
                  value: packageItem.duration,
                },
                {
                  icon: <FaStar />,
                  label: "Rating",
                  value: packageItem.rating,
                },
                {
                  icon: <FaRupeeSign />,
                  label: "Price",
                  value: packageItem.price,
                },
              ].map((info) => (
                <div
                  key={info.label}
                  className="premium-card bg-white rounded-2xl p-5 shadow border border-[#D4AF37]/20"
                >
                  <div className="text-[#D4AF37] text-2xl">{info.icon}</div>

                  <p className="mt-3 text-xs text-gray-500">{info.label}</p>

                  <h3 className="font-bold text-[#071C2F]">{info.value}</h3>
                </div>
              ))}
            </div>

            {/* Overview */}
            <div className="bg-white rounded-[2rem] p-7 md:p-9 shadow border border-[#D4AF37]/20">
              <h2 className="text-3xl font-bold text-[#071C2F]">
                Package Overview
              </h2>

              <p className="mt-5 text-gray-600 leading-8">
                {packageItem.overview}
              </p>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-[2rem] p-7 md:p-9 shadow border border-[#D4AF37]/20">
              <h2 className="text-3xl font-bold text-[#071C2F]">
                Day-wise Itinerary
              </h2>

              <div className="mt-8 space-y-6">
                {packageItem.itinerary.map((day, index) => (
                  <div key={index} className="relative pl-10">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#D4AF37] border-4 border-[#FFF8E7]"></div>

                    {index !== packageItem.itinerary.length - 1 && (
                      <div className="absolute left-3 top-8 w-[2px] h-full bg-[#D4AF37]/30"></div>
                    )}

                    <p className="text-sm font-bold text-[#D4AF37]">
                      {day.day}
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-[#071C2F]">
                      {day.title}
                    </h3>

                    <p className="mt-2 text-gray-600 leading-7">
                      {day.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions / Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-[2rem] p-7 shadow border border-green-100">
                <h2 className="text-2xl font-bold text-[#071C2F]">
                  Inclusions
                </h2>

                <div className="mt-5 space-y-3">
                  {packageItem.inclusions.map((item, index) => (
                    <p
                      key={index}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-[2rem] p-7 shadow border border-red-100">
                <h2 className="text-2xl font-bold text-[#071C2F]">
                  Exclusions
                </h2>

                <div className="mt-5 space-y-3">
                  {packageItem.exclusions.map((item, index) => (
                    <p
                      key={index}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <FaTimesCircle className="text-red-500 mt-1 shrink-0" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Booking Card */}
          <aside className="lg:col-span-1">
            <div
              className={`sticky top-28 rounded-[2rem] p-7 shadow-2xl border border-[#D4AF37]/30 ${
                isLight ? "bg-white text-[#071C2F]" : "bg-[#071C2F] text-white"
              }`}
            >
              <p className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-semibold">
                Starting From
              </p>

              <h2 className="mt-2 text-4xl font-bold">{packageItem.price}</h2>

              <p
                className={`mt-4 leading-7 ${
                  isLight ? "text-gray-600" : "text-gray-300"
                }`}
              >
                Want to customize this package? Contact our travel expert on
                WhatsApp and get the best plan.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition"
              >
                <FaWhatsapp />
                Enquire on WhatsApp
              </a>

              <Link
                to="/contact"
                className="shine-btn mt-4 inline-flex w-full items-center justify-center border border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-full font-bold hover:bg-[#D4AF37] hover:text-[#071C2F] transition"
              >
                Contact Us
              </Link>

              <div
                className={`mt-7 pt-7 border-t text-sm space-y-3 ${
                  isLight
                    ? "border-gray-100 text-gray-600"
                    : "border-white/10 text-gray-300"
                }`}
              >
                <p>✓ Custom package available</p>
                <p>✓ Family and group booking support</p>
                <p>✓ Travel expert guidance</p>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Packages */}
        {relatedPackages.length > 0 && (
          <div className="mt-20">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-[#D4AF37] uppercase tracking-[0.25em] text-sm font-semibold">
                You May Also Like
              </p>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-[#071C2F]">
                Related Packages
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPackages.map((item) => (
                <PackageCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PackageDetails;