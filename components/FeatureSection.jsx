import Container from "./Container";
import SectionTittle from "./SectionTittle";
import Button from "./Button";
import Card from "./feature/Card";

const FeatureSection = ({ screenWidth }) => {
	return (
		<Container>
			<section className="mt-14 sm:mt-20 lg:mt-27 xl:mt-30.5">
				<SectionTittle animation="fade-up">
					Anything featured in here
				</SectionTittle>
				<div data-aos="fade-up" className="flex flex-col sm:flex-row mt-6 lg:mt-8">
					<p className="sm:w-8/12 lg:w-7/12 text-black-primary text-center sm:text-left text-sm lg:text-base font-poppins leading-6">
						We are a community of animal lovers, especially cats and
						dogs, we have the initiative to maintain environmental
						health by helping abandoned animals.In addition we also
						open charities{" "}
					</p>
					<div className="sm:w-4/12 lg:w-5/12 flex items-center justify-center sm:justify-end mt-6 sm:mt-0">
						<Button
							variant="transparant"
							className="flex items-center py-2"
						>
							<p className="pr-2">See All Pet</p>
							<img src="arrow-orange.svg" alt="arrow orange" />
						</Button>
					</div>
				</div>
				<div className="flex flex-col items-center sm:items-start sm:flex-row sm:flex-wrap sm:justify-around lg:flex-nowrap -mx-1 lg:-mx-5">
					<Card
						animation="flip-left"
						animationMobile="zoom-in-up"
						screen={screenWidth}
						className="mx-1 lg:mx-5"
						image="anjing-1.png"
						tittle="Healthy"
						imageName="Anjing 1"
						description="We always routinely clean the food, toilet, and bed every day, so that health is guaranteed"
					/>
					<Card
						animation="flip-left"
						animationMobile="zoom-in-up"
						screen={screenWidth}
						className="mx-1 lg:mx-5"	
						image="anjing-2.png"
						tittle="Fragrant"
						imageName="Anjing 2"
						description="Cleanliness is part of faith, because cleanliness of animals is always healthy"
					/>
					<Card
						animation="flip-left"
						animationMobile="zoom-in-up"
						screen={screenWidth}
						className="mx-1 lg:mx-5"
						image="anjing-3.png"
						tittle="Happy"
						imageName="Anjing 3"
						description="We give toys and we invite the animals to play so the animals don't get stressed"
					/>
				</div>
			</section>
		</Container>
	);
};

export default FeatureSection;
