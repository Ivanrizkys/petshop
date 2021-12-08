import { getStyleAos } from "@/utils/conditional-style";

const Card = ({className, image, tittle, description, imageName, animation, animationMobile, screen}) => {
    return (
        <div data-aos={getStyleAos(screen, animation, animationMobile)} className={`mini:w-10/12 sm:w-5/12 lg:w-4/12 h-[420px] mini:h-[400px] xl:h-[453px] text-center mt-27 xl:mt-30.1 ${className}`}>
            <div className="w-full h-full flex items-center flex-col bg-orange-transparant rounded-2xl font-poppins relative hover:transform hover:-translate-y-6 hover:bg-orange-card-primary transition duration-200">
                <img className="w-2/4 relative -top-14" src={image} alt={imageName}/>
                <h4 className="font-semibold text-2xl tracking-wider leading-9 -mt-6">{tittle}</h4>
                <p className="text-base leading-6 tracking-wider px-7 mt-4">{description}</p>
                <img className="absolute -bottom-7" src="button-arrow-white.svg" alt="Button arrow white"/>
            </div>
        </div>
    )
}

export default Card;