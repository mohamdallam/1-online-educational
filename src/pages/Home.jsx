import React, { Fragment } from "react";
import Header from "../components/1-Header/Header";
import HeroSection from "../components/2-Hero-Section/HeroSection";
import Company from "../components/3-Company-section/Company";
import AboutUs from "../components/4-About-us/AboutUs";
import Courses from "../components/5-Courses-section/Courses";
import ChooseUs from "../components/6-Choose-us/ChooseUs";
import Features from "../components/7-Feature-section/Features";
import FreeCourse from "../components/8-Free-course-section/FreeCourse";
import Testimonials from "../components/9-Testimonial/Testimonials";
import Newsletter from "../components/10-Newsletter/Newsletter";
import Footer from "../components/11-Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <Company />
      <AboutUs />
      <Courses />
      <ChooseUs />
      <Features />
      <FreeCourse />
      <Testimonials />
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default Home;
