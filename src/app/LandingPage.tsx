import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import OurClients from "./components/OurClients";
import WhyCourse from "./components/WhyCourse";
import Features from "./components/Features";
import Categories from "./components/Categories";
import Teachers from "./components/Teachers";
import Reviews from "./components/Reviews";
import Updates from "./components/Updates";
import AppDownload from "./components/AppDownload"
import RegisterDiscount from "./components/RegisterDiscount";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurClients />
      <WhyCourse />
      <Features />
      <Categories />
      <Teachers />
      <Reviews />
      <Updates />
      <AppDownload />
      <RegisterDiscount />
    </div>
  );
};

export default LandingPage;
