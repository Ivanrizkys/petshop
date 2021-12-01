import Container from "./Container"
import SectionTittle from "./SectionTittle";
import Button from "./Button";

const FeatureSection = () => {
    return (
        <Container>
            <section className="mt-30.5">
                <SectionTittle>Anything featured in here</SectionTittle>
                <div className="flex mt-8">
                    <p className="w-7/12 text-black-primary text-base font-poppins leading-6">We are a community of animal lovers, especially cats and dogs, we have the initiative to maintain environmental health by helping abandoned animals.In addition we also open charities </p>
                    <div className="w-5/12 flex items-center justify-end">
                        <Button variant="transparant" className="flex items-center py-2">
                            <p className="pr-2">See All Pet</p>
                            <img src="arrow-orange.svg" alt="arrow orange"/>
                        </Button>
                    </div>
                </div>
                <div className="flex -mx-5">
                    <div className="flex items-center flex-col w-4/12 h-[453px] bg-orange-transparant text-center font-poppins rounded-2xl relative mt-30.1 mx-5 transform hover:-translate-y-6 hover:bg-orange-card-primary transition duration-200">
                        <img className="w-2/4 relative -top-14" src="anjing-1.png" alt="Anjing 1"/>
                        <h4 className="font-semibold text-2xl tracking-wider leading-9 -mt-6">Healthy</h4>
                        <p className="text-base leading-6 tracking-wider px-7 mt-4">We always routinely clean the food, toilet, and bed every day, so that health is guaranteed</p>
                        <img className="absolute -bottom-7" src="button-arrow-white.svg" alt="Button arrow white"/>
                    </div>
                    <div className="flex items-center flex-col w-4/12 h-[453px] bg-orange-transparant text-center font-poppins rounded-2xl relative mt-30.1 mx-5 transform hover:-translate-y-6 hover:bg-orange-card-primary transition duration-200">
                        <img className="w-2/4 relative -top-14" src="anjing-2.png" alt="Anjing 2"/>
                        <h4 className="font-semibold text-2xl tracking-wider leading-9 -mt-6">Fragrant</h4>
                        <p className="text-base leading-6 tracking-wider px-7 mt-4">Cleanliness is part of faith, because cleanliness of animals is always healthy</p>
                        <img className="absolute -bottom-7" src="button-arrow-white.svg" alt="Button arrow white"/>
                    </div>
                    <div className="flex items-center flex-col w-4/12 h-[453px] bg-orange-transparant text-center font-poppins rounded-2xl relative mt-30.1 mx-5 transform hover:-translate-y-6 hover:bg-orange-card-primary transition duration-200">
                        <img className="w-2/4 relative -top-14" src="anjing-3.png" alt="Anjing 3"/>
                        <h4 className="font-semibold text-2xl tracking-wider leading-9 -mt-6">Happy</h4>
                        <p className="text-base leading-6 tracking-wider px-7 mt-4">We give toys and we invite the animals to play so the animals don't get stressed</p>
                        <img className="absolute -bottom-7" src="button-arrow-white.svg" alt="Button arrow white"/>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default FeatureSection;