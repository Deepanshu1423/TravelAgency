import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="w-11 h-11 rounded-full border border-[#D4AF37]/40 bg-white/10 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#071C2F] transition"
      title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;