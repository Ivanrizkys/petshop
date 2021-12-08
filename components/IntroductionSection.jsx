import SectionTittle from "./SectionTittle";
import Container from "./Container";
import Slide from "./intro-section/Slide";
import { getStyleAos } from "@/utils/conditional-style";

const IntroductionSection = ({Swiper, SwiperSlide, screenWidth}) => {
	return (
		<Container>
			<section className="flex flex-col items-center md:items-center md:flex-row mt-14 sm:mt-20 lg:mt-27 xl:mt-32.5">
				{screenWidth < 768 && <SectionTittle>Who We Are</SectionTittle>}
				<div data-aos={getStyleAos(screenWidth, "fade-right", "fade-up")} className="w6/12 md:w-6/12 flex justify-center md:justify-start lg:justify-center">
					<img
						className="w-6/12 mb-8 mt-3 md:mt-0 md:mb-0 md:w-10/12 lg:w-10/12 xl:w-8/12"
						src="image-section-2.png"
						alt="section image 2"
					/>
				</div>
				<div data-aos={getStyleAos(screenWidth, "fade-left", "fade-up")} className="w-full text-center md:text-left md:w-6/12 lg:pl-11">
					{screenWidth >= 768 && <SectionTittle>Who We Are</SectionTittle>}
                    <Slide Swiper={Swiper} SwiperSlide={SwiperSlide}/>
					<div className="flex items-center mt-4 lg:mt-12">
						<img
							className="swiper-button-prev cursor-pointer hidden lg:inline-block"
							src="prev-button.svg"
							alt="prev button"
						/>
						<img className="swiper-button-next px-3 cursor-pointer hidden lg:inline-block" src="next-button.svg" alt="next button" />
						<div className="w-[33px] md:w-full swiper-pagination-custom font-poppins text-black-primary text-sm mx-auto md:mx-0 lg:text-base"></div>
					</div>
				</div>
			</section>
		</Container>
	);
};

export default IntroductionSection;
