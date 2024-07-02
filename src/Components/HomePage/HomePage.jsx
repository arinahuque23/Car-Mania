import React from "react";
import BannerBottom from "../BannerBottom/BannerBottom";
import BrandLogoSection from "../BrandLogoSection/BrandLogoSection";
import HowItWork from "../../Pages/HowItWork/HowItWork";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import POpularRentalDeals from "../POpularRentalDeals/POpularRentalDeals";
import Testimonials from "../Testimonials/Testimonials";

const HomePage = () => {
  return <div>
    <BannerBottom></BannerBottom>
    <BrandLogoSection></BrandLogoSection>
    <HowItWork></HowItWork>
    <WhyChooseUs></WhyChooseUs>
    <POpularRentalDeals></POpularRentalDeals>
    <Testimonials></Testimonials>
  </div>;
};

export default HomePage;
