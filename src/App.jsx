import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import FloatingActions from "./components/common/FloatingActions";
import ScrollToTop from "./components/common/ScrollToTop";

import Home from "./pages/Home";
import Packages from "./pages/Packages";
import PackageDetails from "./pages/PackageDetails";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen theme-page overflow-x-hidden">
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/packages/:id" element={<PackageDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;