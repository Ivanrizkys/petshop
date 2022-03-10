import Container from "./Container";
import Logo from "./Logo";
import SocialMedia from "./footer/SocialMedia";

const Footer = () => {
    return (
        <footer className="mini:h-[400px] bg-orange-transparant mt-27 xl:mt-40">
            <Container>
                <div className="flex flex-wrap justify-around sm:flex-nowrap pt-3 sm:pt-14  lg:pt-16">
                    <div className="flex flex-col items-center sm:block w-12/12 sm:w-4/12 lg:mx-0 lg:w-6/12 font-poppins text-brown-primary">
                        <Logo className="w-2/6"/>
                        <p className="lg:w-7/12 text-center sm:text-left text-base lg:text-xl mt-6">We are a community of animal lovers whose goal is to care for and love them</p>
                    </div>
                    <ul className="lg:w-2/12 mt-8 sm:mt-0 lg:mx-0 flex flex-col justify-center text-base lg:text-xl font-poppins text-brown-primary">
                        <li className="font-semibold">About me</li>
                        <li className="py-5">Who are we</li>
                        <li>Featured</li>
                    </ul>
                    <ul className="lg:w-2/12 mt-8 sm:mt-0 lg:mx-0 flex flex-col justify-center text-base lg:text-xl font-poppins text-brown-primary">
                        <li className="font-semibold">Company</li>
                        <li className="py-5">Our Team</li>
                        <li>Our partners</li>
                    </ul>
                    <ul className="lg:w-2/12 mt-8 sm:mt-0 lg:mx-0 flex flex-col justify-center text-base lg:text-xl font-poppins text-brown-primary">
                        <li className="font-semibold">Endorsement</li>
                        <li className="py-5">Support Center</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="flex flex-col mini:flex-row mt-16 mini:mt-19 sm:mt-24 mini:mx-0">
                    <div className="flex w-full mini:w-3/12 sm:w-2/12 justify-center mini:justify-between -mx-4 mini:mx-0">
                        <SocialMedia className="mx-4 mini:mx-0" image="facebook.svg" href="#"/>
                        <SocialMedia className="mx-4 mini:mx-0" image="twitter.svg" href="#"/>
                        <SocialMedia className="mx-4 mini:mx-0" image="instagram.svg" href="#"/>
                    </div>
                    <p className="w-full mini:w-9/12 sm:w-10/12 font-poppins text-brown-primary text-lg sm:text-xl lg:text-1xl text-center mini:text-right sm:pr-16 mt-4 mini:mt-0 pb-4 mini:pb-0">copyright LovePet. All right reserved</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;