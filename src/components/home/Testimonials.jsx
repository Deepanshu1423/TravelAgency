import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const Testimonials = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const reviews = [
    {
      name: "Rahul Sharma",
      place: "Kedarnath Yatra",
      review:
        "Safar Junction ne hamari Kedarnath trip bahut smooth bana di. Hotel, transport aur guidance sab perfect tha.",
    },
    {
      name: "Priya Mehta",
      place: "Goa Holiday",
      review:
        "Amazing experience! Package budget-friendly tha aur stay bhi comfortable tha. Highly recommended.",
    },
    {
      name: "Amit Verma",
      place: "Dubai Tour",
      review:
        "Dubai trip beautifully planned thi. Har detail properly managed thi. Family ke saath great experience raha.",
    },
  ];

  return (
    <section
      className={`py-20 px-5 transition ${
        isLight ? "bg-white" : "bg-[#FFF8E7]"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#D4AF37] uppercase tracking-[0.25em] text-sm font-semibold">
            Traveller Stories
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-[#071C2F]">
            What Our Travellers Say
          </h2>

          <p className="mt-5 text-gray-600 leading-7">
            Real experiences from travellers who trusted Safar Junction for
            their memorable journeys.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <div
              key={index}
              className={`premium-card rounded-[2rem] p-7 shadow-lg border border-[#D4AF37]/20 transition duration-300 ${
                isLight ? "bg-[#F8FAFC]" : "bg-white"
              }`}
            >
              <FaQuoteLeft className="text-4xl text-[#D4AF37]" />

              <div className="mt-5 flex gap-1 text-[#D4AF37]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="mt-5 text-gray-600 leading-7 text-sm">
                “{item.review}”
              </p>

              <div className="mt-7 border-t border-[#D4AF37]/20 pt-5">
                <h3 className="text-lg font-bold text-[#071C2F]">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500">{item.place}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;