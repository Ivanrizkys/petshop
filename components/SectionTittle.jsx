const SectionTittle = ({children, animation, className}) => {
    return (
        <div data-aos={animation} className="flex justify-center md:justify-start items-center">
            <h2 className={`font-poppins text-orange-primary text-3xl text-center sm:text-left md:text-4xl lg:text-5xl font-semibold`}>{children}</h2>
            <img className="hidden sm:inline" src="lamp.svg" alt="lamp"/>
        </div>
    )
}

export default SectionTittle;