import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { packagesData } from "../../data/packagesData";
import PackageCard from "../packages/PackageCard";
import { useTheme } from "../../context/ThemeContext";

const FeaturedPackages = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section
      className={`py-20 px-5 transition ${
        isLight ? "bg-[#F8FAFC]" : "bg-[#FFF8E7]"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#D4AF37] uppercase tracking-[0.25em] text-sm font-semibold">
            Handpicked Packages
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-[#071C2F]">
            Featured Travel Packages
          </h2>

          <p className="mt-5 text-gray-600 leading-7">
            Choose from our most loved travel experiences, designed for
            pilgrimage, family vacations, beach holidays and international tours.
          </p>
        </div>

        {/* Moving Package Slider */}
        <div className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={28}
            loop={true}
            grabCursor={true}
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="featured-package-swiper pb-14"
          >
            {packagesData.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <PackageCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View All Button */}
        <div className="mt-8 text-center">
          <Link
            to="/packages"
            className="shine-btn inline-flex items-center gap-2 bg-[#071C2F] text-white px-8 py-3 rounded-full font-bold hover:bg-[#D4AF37] hover:text-[#071C2F] transition"
          >
            View All Packages
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;