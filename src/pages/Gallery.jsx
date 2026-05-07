import { useMemo, useState } from "react";
import { FaMapMarkerAlt, FaSearchPlus, FaTimes } from "react-icons/fa";
import { galleryData } from "../data/galleryData";
import { useTheme } from "../context/ThemeContext";

const Gallery = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    "All",
    ...new Set(galleryData.map((item) => item.category)),
  ];

  const filteredGallery = useMemo(() => {
    if (selectedCategory === "All") {
      return galleryData;
    }

    return galleryData.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section
      className={`min-h-screen transition ${
        isLight ? "bg-[#F8FAFC]" : "bg-[#FFF8E7]"
      }`}
    >
      {/* Top Banner */}
      <div
        className={`relative px-5 pt-32 pb-24 overflow-hidden ${
          isLight ? "bg-[#F8FAFC] text-[#071C2F]" : "bg-[#071C2F] text-white"
        }`}
      >
        <div
          className={`absolute inset-0 bg-cover bg-center ${
            isLight ? "opacity-15" : "opacity-25"
          }`}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
          }}
        ></div>

        <div
          className={`absolute inset-0 ${
            isLight
              ? "bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/90 to-[#FFF8E7]/40"
              : "bg-gradient-to-r from-[#071C2F] via-[#071C2F]/90 to-[#071C2F]/40"
          }`}
        ></div>

        <div className="absolute top-20 right-20 w-72 h-72 bg-[#D4AF37]/20 rounded-full blur-3xl"></div>

        <div
          className={`absolute bottom-0 left-10 w-64 h-64 rounded-full blur-3xl ${
            isLight ? "bg-[#071C2F]/10" : "bg-white/10"
          }`}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="text-[#D4AF37] uppercase tracking-[0.25em] text-sm font-semibold">
            Travel Memories
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold">
            Explore Our Gallery
          </h1>

          <p
            className={`mt-5 max-w-2xl mx-auto leading-8 ${
              isLight ? "text-gray-600" : "text-gray-200"
            }`}
          >
            Discover beautiful destinations, peaceful journeys, luxury holidays
            and unforgettable travel moments with Safar Junction.
          </p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="max-w-7xl mx-auto px-5 -mt-8 relative z-20">
        <div
          className={`rounded-[2rem] shadow-xl border border-[#D4AF37]/20 p-5 ${
            isLight ? "bg-white/95" : "bg-white"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                  selectedCategory === category
                    ? "bg-[#071C2F] text-white"
                    : "bg-[#FFF8E7] text-[#071C2F] hover:bg-[#D4AF37] hover:text-[#071C2F]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#071C2F]">
              {selectedCategory === "All"
                ? "All Travel Photos"
                : `${selectedCategory} Photos`}
            </h2>

            <p className="mt-2 text-gray-600 text-sm">
              Showing {filteredGallery.length} photo(s)
            </p>
          </div>

          {selectedCategory !== "All" && (
            <button
              onClick={() => setSelectedCategory("All")}
              className="text-sm font-semibold text-[#071C2F] bg-white border border-[#D4AF37]/30 px-4 py-2 rounded-full hover:bg-[#D4AF37] transition"
            >
              Clear Filter
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className={`premium-card group relative overflow-hidden rounded-[2rem] shadow-lg cursor-pointer border border-[#D4AF37]/20 ${
                index === 1 || index === 5 ? "lg:row-span-2" : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className={`w-full object-cover group-hover:scale-110 transition duration-700 ${
                  index === 1 || index === 5 ? "h-[520px]" : "h-72"
                }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071C2F]/90 via-[#071C2F]/20 to-transparent opacity-90"></div>

              <div className="absolute inset-0 bg-[#071C2F]/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#D4AF37] text-[#071C2F] flex items-center justify-center text-xl">
                  <FaSearchPlus />
                </div>
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="inline-block bg-[#D4AF37] text-[#071C2F] px-4 py-1 rounded-full text-xs font-bold mb-3">
                  {item.category}
                </span>

                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="mt-2 flex items-center gap-2 text-sm text-gray-200">
                  <FaMapMarkerAlt className="text-[#D4AF37]" />
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Popup */}
      {selectedImage && (
        <div className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center px-5">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white text-[#071C2F] flex items-center justify-center hover:bg-[#D4AF37] transition"
          >
            <FaTimes />
          </button>

          <div className="max-w-5xl w-full">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[75vh] object-cover rounded-[2rem] shadow-2xl"
            />

            <div className="mt-5 text-white text-center">
              <h3 className="text-3xl font-bold">{selectedImage.title}</h3>

              <p className="mt-2 text-gray-300 flex items-center justify-center gap-2">
                <FaMapMarkerAlt className="text-[#D4AF37]" />
                {selectedImage.location} • {selectedImage.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;