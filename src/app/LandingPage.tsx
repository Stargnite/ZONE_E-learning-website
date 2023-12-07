"use client"

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
import Footer from "./components/Footer";
import { useDarkMode } from "./ContextProvider";

const LandingPage = () => {
  const {isDarkMode, toggleDarkMode} = useDarkMode()

  return (
    <div className={isDarkMode ? "bg-gray-900" : ""}>
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
      <Footer />
    </div>
  );
};

export default LandingPage;
