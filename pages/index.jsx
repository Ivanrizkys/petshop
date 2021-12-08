import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import IntroductionSection from "@/components/IntroductionSection";
import FeatureSection from "@/components/FeatureSection";
import InvitesSection from "@/components/InvitesSection";
import Footer from "@/components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, {Pagination,Navigation} from 'swiper';
import AOS from 'aos';
import "aos/dist/aos.css";
import {useEffect, useState, useLayoutEffect} from 'react';
  
// install Swiper modules
SwiperCore.use([Pagination,Navigation]);


export default function Home() {
  const [width, setWidth] = useState('');

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handlerResize = () => {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handlerResize)
    return () => window.removeEventListener("resize", handlerResize)
  });
  
  return (
    <>
      <Layout>
        {/* <p>{width}</p> */}
        <Hero screenWidth={width}/>
        <IntroductionSection screenWidth={width} Swiper={Swiper} SwiperSlide={SwiperSlide}/>
        <FeatureSection screenWidth={width}/>
        <InvitesSection screenWidth={width}/>
        <Footer/>
      </Layout>
    </>
  )
}
