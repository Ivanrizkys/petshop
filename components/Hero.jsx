import Navbar from "./Navbar";
import Button from './Button';
import Container from "./Container";

const Hero = () => {
    return (
        <div className="bg-bg-hero h-[750px]">
            <Navbar/>
            <Container>
                <div className="flex items-center mt-27">
                    <div className="w-7/12 font-poppins">
                        <h1 className="w-9/12 text-5.1xl text-orange-primary font-semibold mb-4">Find Your New Pet and Adopt it</h1>
                        <p className="w-6/12 text-base text-black-primary mb-14">Connecting great people with happy, healthy cat and dogs from book animal shelter</p>
                        <div className="flex">
                            <Button className="flex items-center mr-2" variant="orange">
                                <p className="pr-2">Get Started</p>
                                <img src="white-arrow.svg" alt=""/>
                            </Button>
                            <Button variant="outline-transparant" className="flex items-center">
                                <img className="pr-2" src="play-button.svg" alt="play-button"/>
                                <p>Watch Videos</p>
                            </Button>
                        </div>
                    </div>
                    <div className="w-5/12">
                        <img src="hero-image-new.png" alt="hero-image"/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Hero;