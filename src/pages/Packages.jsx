import { useMemo, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { packagesData } from "../data/packagesData";
import PackageCard from "../components/packages/PackageCard";
import { useTheme } from "../context/ThemeContext";

const Packages = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const categories = [
    "All",
    ...new Set(packagesData.map((item) => item.category)),
  ];

  const types = ["All", ...new Set(packagesData.map((item) => item.type))];

  const filteredPackages = useMemo(() => {
    return packagesData.filter((item) => {
      const searchValue = searchText.toLowerCase();

      const matchesSearch =
        item.title.toLowerCase().includes(searchValue) ||
        item.location.toLowerCase().includes(searchValue) ||
        item.category.toLowerCase().includes(searchValue) ||
        item.type.toLowerCase().includes(searchValue);

      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;

      const matchesType = selectedType === "All" || item.type === selectedType;

      return matchesSearch && matchesCategory && matchesType;
    });
  }, [searchText, selectedCategory, selectedType]);

  const clearFilters = () => {
    setSearchText("");
    setSelectedCategory("All");
    setSelectedType("All");
  };

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
              "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80')",
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

        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-[#D4AF37] uppercase tracking-[0.25em] text-sm font-semibold">
            Explore Packages
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold">
            Find Your Perfect Travel Plan
          </h1>

          <p
            className={`mt-5 max-w-2xl leading-8 ${
              isLight ? "text-gray-600" : "text-gray-200"
            }`}
          >
            Browse domestic, international, pilgrimage, honeymoon, family and
            adventure packages crafted for unforgettable journeys.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-5 -mt-10 relative z-20">
        <div
          className={`relative overflow-hidden rounded-[2rem] shadow-2xl border border-[#D4AF37]/30 p-5 md:p-6 ${
            isLight ? "bg-white/95" : "bg-white/90"
          } backdrop-blur-xl`}
        >
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#D4AF37]/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#071C2F]/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="lg:col-span-2 relative">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="Search by package, location or category..."
                  className="w-full pl-11 pr-4 py-3 rounded-full border border-[#D4AF37]/20 outline-none focus:border-[#D4AF37] bg-[#FFF8E7]/70 shadow-sm focus:shadow-md transition text-[#071C2F]"
                />
              </div>

              {/* Category */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-full border border-[#D4AF37]/20 outline-none focus:border-[#D4AF37] bg-[#FFF8E7]/70 shadow-sm focus:shadow-md transition text-[#071C2F]"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "All" ? "All Categories" : category}
                  </option>
                ))}
              </select>

              {/* Type */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 rounded-full border border-[#D4AF37]/20 outline-none focus:border-[#D4AF37] bg-[#FFF8E7]/70 shadow-sm focus:shadow-md transition text-[#071C2F]"
              >
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type === "All" ? "All Types" : type}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-sm text-gray-600">
                Showing{" "}
                <span className="font-bold text-[#071C2F]">
                  {filteredPackages.length}
                </span>{" "}
                package(s)
              </p>

              {(searchText ||
                selectedCategory !== "All" ||
                selectedType !== "All") && (
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#071C2F] bg-[#FFF8E7] border border-[#D4AF37]/30 px-4 py-2 rounded-full hover:bg-[#D4AF37] hover:text-[#071C2F] transition"
                >
                  <FaTimes />
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-5 py-16">
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((item) => (
              <PackageCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="premium-card bg-white rounded-[2rem] p-10 text-center border border-[#D4AF37]/20 shadow-xl">
            <h3 className="text-2xl font-bold text-[#071C2F]">
              No packages found
            </h3>

            <p className="mt-3 text-gray-600">
              Try changing your search or filter options.
            </p>

            <button
              onClick={clearFilters}
              className="shine-btn mt-6 bg-[#071C2F] text-white px-7 py-3 rounded-full font-bold hover:bg-[#D4AF37] hover:text-[#071C2F] transition"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Packages;