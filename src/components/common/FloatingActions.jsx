import { useEffect, useState } from "react";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const FloatingActions = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const [showTop, setShowTop] = useState(false);

  const whatsappNumber = "918882128135";

  const message =
    "Hello Safar Junction, I want to plan a trip. Please share package details.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed right-5 bottom-5 z-[999] flex flex-col gap-3">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center text-2xl shadow-2xl hover:scale-110 transition gold-glow"
        title="WhatsApp Enquiry"
      >
        <FaWhatsapp />
      </a>

      {showTop && (
        <button
          type="button"
          onClick={goToTop}
          className={`w-12 h-12 rounded-full flex items-center justify-center text-lg shadow-2xl hover:scale-110 transition border border-[#D4AF37]/40 ${
            isLight
              ? "bg-white text-[#071C2F] hover:bg-[#D4AF37]"
              : "bg-[#D4AF37] text-[#071C2F]"
          }`}
          title="Back to Top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default FloatingActions;