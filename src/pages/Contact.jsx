import { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUser,
  FaWhatsapp,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const whatsappNumber = "918882128135";

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    destination: "",
    travelDate: "",
    persons: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.mobile.trim() ||
      !formData.destination.trim()
    ) {
      setError("Please fill Name, Mobile Number and Destination.");
      return;
    }

    if (formData.mobile.trim().length < 10) {
      setError("Please enter a valid mobile number.");
      return;
    }

    const whatsappMessage = `Hello Safar Junction,

I want to enquire about a travel package.

Name: ${formData.name}
Mobile: ${formData.mobile}
Destination: ${formData.destination}
Travel Date: ${formData.travelDate || "Not decided"}
No. of Persons: ${formData.persons || "Not mentioned"}
Message: ${formData.message || "Please share package details."}`;

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappLink, "_blank");
  };

  const pageBg = isLight ? "bg-[#F8FAFC]" : "bg-[#FFF8E7]";
  const bannerBg = isLight
    ? "bg-[#F8FAFC] text-[#071C2F]"
    : "bg-[#071C2F] text-white";
  const bannerText = isLight ? "text-gray-600" : "text-gray-200";
  const infoBox = isLight
    ? "bg-white text-[#071C2F]"
    : "bg-[#071C2F] text-white";
  const mutedText = isLight ? "text-gray-600" : "text-gray-300";

  return (
    <section className={`${pageBg} min-h-screen transition`}>
      {/* Top Banner */}
      <div
        className={`relative px-5 pt-32 pb-24 overflow-hidden ${bannerBg}`}
      >
        <div
          className={`absolute inset-0 bg-cover bg-center ${
            isLight ? "opacity-15" : "opacity-25"
          }`}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1600&q=80')",
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
            Contact Us
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold">
            Plan Your Perfect Trip
          </h1>

          <p className={`mt-5 max-w-2xl mx-auto leading-8 ${bannerText}`}>
            Share your travel requirements with us. Our team will help you
            choose the best package for your destination, budget and dates.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div
              className={`premium-card rounded-[2rem] p-7 shadow-xl border border-[#D4AF37]/20 ${infoBox}`}
            >
              <h2 className="text-2xl font-bold">
                Get In <span className="text-[#D4AF37]">Touch</span>
              </h2>

              <p className={`mt-4 leading-7 ${mutedText}`}>
                Need a custom travel plan? Contact Safar Junction and our team
                will guide you with the best options.
              </p>
            </div>

            <div className="premium-card bg-white rounded-[2rem] p-6 shadow border border-[#D4AF37]/20 flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#D4AF37] text-[#071C2F] flex items-center justify-center text-xl shrink-0">
                <FaPhoneAlt />
              </div>

              <div>
                <h3 className="font-bold text-[#071C2F]">Phone</h3>
                <p className="mt-1 text-gray-600">+91 88821 28135</p>
              </div>
            </div>

            <div className="premium-card bg-white rounded-[2rem] p-6 shadow border border-[#D4AF37]/20 flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#D4AF37] text-[#071C2F] flex items-center justify-center text-xl shrink-0">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="font-bold text-[#071C2F]">Email</h3>
                <p className="mt-1 text-gray-600">safarjunction88@gmail.com</p>
              </div>
            </div>

            <div className="premium-card bg-white rounded-[2rem] p-6 shadow border border-[#D4AF37]/20 flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#D4AF37] text-[#071C2F] flex items-center justify-center text-xl shrink-0">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="font-bold text-[#071C2F]">Address</h3>
                <p className="mt-1 text-gray-600">Noida sector 16, Uttar Pradesh, India - 201301</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[2rem] p-6 md:p-9 shadow-xl border border-[#D4AF37]/20">
              <div className="mb-8">
                <p className="text-[#D4AF37] uppercase tracking-[0.25em] text-sm font-semibold">
                  Enquiry Form
                </p>

                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#071C2F]">
                  Tell Us About Your Trip
                </h2>

                <p className="mt-4 text-gray-600 leading-7">
                  Fill this form and your enquiry will open directly in
                  WhatsApp with all details.
                </p>
              </div>

              {error && (
                <div className="mb-6 rounded-2xl bg-red-50 border border-red-200 text-red-700 px-5 py-3 text-sm font-medium">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#071C2F] mb-2">
                      Full Name *
                    </label>

                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full pl-11 pr-4 py-3 rounded-2xl border border-[#D4AF37]/20 outline-none focus:border-[#D4AF37] bg-[#FFF8E7]/70 text-[#071C2F] shadow-sm focus:shadow-md transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#071C2F] mb-2">
                      Mobile Number *
                    </label>

                    <div className="relative">
                      <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Enter mobile number"
                        className="w-full pl-11 pr-4 py-3 rounded-2xl border border-[#D4AF37]/20 outline-none focus:border-[#D4AF37] bg-[#FFF8E7]/70 text-[#071C2F] shadow-sm focus:shadow-md transition"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#071C2F] mb-2">
                      Destination *
                    </label>

                    <input
                      type="text"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      placeholder="Goa, Dubai, Kedarnath..."
                      className="w-full px-4 py-3 rounded-2xl border border-[#D4AF37]/20 outline-none focus:border-[#D4AF37] bg-[#FFF8E7]/70 text-[#071C2F] shadow-sm focus:shadow-md transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#071C2F] mb-2">
                      Travel Date
                    </label>

                    <input
                      type="date"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl border border-[#D4AF37]/20 outline-none focus:border-[#D4AF37] bg-[#FFF8E7]/70 text-[#071C2F] shadow-sm focus:shadow-md transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#071C2F] mb-2">
                      No. of Persons
                    </label>

                    <input
                      type="number"
                      name="persons"
                      value={formData.persons}
                      onChange={handleChange}
                      placeholder="4"
                      min="1"
                      className="w-full px-4 py-3 rounded-2xl border border-[#D4AF37]/20 outline-none focus:border-[#D4AF37] bg-[#FFF8E7]/70 text-[#071C2F] shadow-sm focus:shadow-md transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#071C2F] mb-2">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us your budget, hotel preference, travel plan or any special request..."
                    rows="5"
                    className="w-full px-4 py-3 rounded-2xl border border-[#D4AF37]/20 outline-none focus:border-[#D4AF37] bg-[#FFF8E7]/70 text-[#071C2F] shadow-sm focus:shadow-md transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="shine-btn inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition shadow-lg"
                >
                  <FaWhatsapp />
                  Send Enquiry on WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white rounded-[2rem] overflow-hidden shadow-xl border border-[#D4AF37]/20">
          <div className="p-6 md:p-8">
            <p className="text-[#D4AF37] uppercase tracking-[0.25em] text-sm font-semibold">
              Find Us
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#071C2F]">
              Our Office Location
            </h2>

            <p className="mt-3 text-gray-600">
              Visit us or contact us online for your travel planning.
            </p>
          </div>

          <div
            className={`h-[350px] flex items-center justify-center text-center px-5 ${
              isLight ? "bg-[#F8FAFC]" : "bg-[#071C2F]"
            }`}
          >
            <div>
              <FaMapMarkerAlt className="text-[#D4AF37] text-5xl mx-auto" />

              <h3
                className={`mt-4 text-2xl font-bold ${
                  isLight ? "text-[#071C2F]" : "text-white"
                }`}
              >
                Safar Junction
              </h3>

              <p className={isLight ? "mt-2 text-gray-600" : "mt-2 text-gray-300"}>
                Noida sector 16, Uttar Pradesh, India - 201301
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Google Map iframe can be added here later.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;