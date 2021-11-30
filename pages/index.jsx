import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import IntroductionSection from "@/components/IntroductionSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/pagination"
// import "swiper/css/navigation"
import SwiperCore, {Pagination,Navigation} from 'swiper';
  
// install Swiper modules
SwiperCore.use([Pagination,Navigation]);

export default function Home() {
  return (
    <>
      <Layout>
        <Hero/>
        <IntroductionSection Swiper={Swiper} SwiperSlide={SwiperSlide}/>
      </Layout>
    </>
  )
}
