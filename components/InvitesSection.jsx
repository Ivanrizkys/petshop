import Container from "./Container"
import Button from "./Button";

const InvitesSection =  ({screenWidth}) => {
    return (
        <Container>
            <section data-aos="fade-up" className="flex flex-col md:flex-row sm:h-[384px] font-poppins bg-orange-transparant mt-32 xl:mt-49 relative md:static">
                <div className="w-6/12 mini:w-5/12 md:w-4/12 inline-block md:flex md:items-center lg:items-end pl-5 lg:pl-13 mx-auto md:mx-0 absolute md:static left-1/2 right-1/2 -top-8 transform -translate-x-2/4 md:translate-x-0">
                    <img className="" src="anjing-4.png" alt="Anjing 4"/>
                </div>
                <div className="md:w-8/12 text-brown-primary tracking-wider sm:pl-5 lg:pl-16 relative">
                    <h2 className="font-semibold text-3xl sm:text-4xl lg:text-4.3xl text-center md:text-left mt-32 sm:mt-40 md:mt-16 lg:mt-19">Want To Join Us ?</h2>
                    <p className="md:w-5/6 xl:w-4/6 text-center md:text-left text-base lg:text-lg mt-4">Want to join us to help and help animals that do not have employers so that they can live properly</p>
                    {screenWidth >= 640 &&
                        <form className="sm:w-[414px] md:w-auto mx-auto mt-8 lg:mt-12" action="submit">
                            <input className="block sm:inline mx-auto sm:mx-0 px-1 lg:px-8 py-2 lg:py-3.9 rounded-r-lg sm:rounded-r-none rounded-l-lg" type="email" placeholder="Enter your email here ....."/>
                            <Button className="w-4/12 sm:w-auto mx-auto sm:mx-0 text-center sm:text-left" variant="orange" padding="px-1 lg:px-8 py-2 lg:py-3.9" rounded="rounded-l-lg sm:rounded-l-none rounded-r-lg">Subscribe</Button>
                        </form>
                    }
                    {screenWidth < 640 &&
                        <form className="w-[200px] mini:w-[370px] mb-5 mx-auto mt-8" action="submit">
                            <input className="w-9/12 mini:w-auto px-1 py-2 rounded-r-none rounded-l-lg" type="email" placeholder="Enter your email..."/>
                            <Button className="w-3/12 mini:w-auto text-left" variant="orange" padding="px-1 lg:px-8 py-2 lg:py-3.9" rounded="rounded-r-lg">Subs</Button>
                        </form>
                    }
                    <img className="hidden md:inline w-1/6 lg:w-1/6 absolute -top-8 lg:-top-12 xl:-top-14 2xl:-top-16 right-0" src="anjing-5.png" alt="Anjing 5"/>
                </div>
            </section>
        </Container>
    )
}

export default InvitesSection;