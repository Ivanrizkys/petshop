const Card = ({className, image, tittle, description, imageName}) => {
    return (
        <div className={`flex items-center flex-col w-4/12 h-[453px] bg-orange-transparant text-center font-poppins rounded-2xl relative mt-30.1 transform hover:-translate-y-6 hover:bg-orange-card-primary transition duration-200 ${className}`}>
            <img className="w-2/4 relative -top-14" src={image} alt={imageName}/>
            <h4 className="font-semibold text-2xl tracking-wider leading-9 -mt-6">{tittle}</h4>
            <p className="text-base leading-6 tracking-wider px-7 mt-4">{description}</p>
            <img className="absolute -bottom-7" src="button-arrow-white.svg" alt="Button arrow white"/>
        </div>
    )
}

export default Card;