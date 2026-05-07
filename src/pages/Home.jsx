import Hero from "../components/home/Hero";
import FeaturedPackages from "../components/home/FeaturedPackages";
import WhyChooseUs from "../components/home/WhyChooseUs";
import DestinationsShowcase from "../components/home/DestinationsShowcase";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedPackages />
      <WhyChooseUs />
      <DestinationsShowcase />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;