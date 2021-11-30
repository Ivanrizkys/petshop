import SectionTittle from "./SectionTittle";
import Container from "./Container";
import {StyledButtonWraper} from "@/styled/index";
import Slide from "./intro-section/Slide";

const IntroductionSection = ({Swiper, SwiperSlide}) => {
	return (
		<Container>
			<section className="flex mt-32.5">
				<div className="w-6/12 flex justify-center">
					<img
						className="w-9/12"
						src="image-section-2.png"
						alt="section image 2"
					/>
				</div>
				<div className="w-6/12">
					<SectionTittle>Who We Are</SectionTittle>
                    <Slide Swiper={Swiper} SwiperSlide={SwiperSlide}/>
                    <StyledButtonWraper>
                        <div className="flex items-center mt-12">
                            <img
                                className="swiper-button-prev cursor-pointer"
                                src="prev-button.svg"
                                alt="prev button"
                            />
                            <img className="swiper-button-next px-3 cursor-pointer" src="next-button.svg" alt="next button" />
                            <div className="swiper-pagination-custom"></div>
                        </div>
                    </StyledButtonWraper>
				</div>
			</section>
		</Container>
	);
};

export default IntroductionSection;
