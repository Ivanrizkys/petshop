const SectionTittle = ({children}) => {
    return (
        <div className="flex items-center">
            <h2 className="font-poppins text-orange-primary text-5xl font-semibold">{children}</h2>
            <img src="lamp.svg" alt="lamp"/>
        </div>
    )
}

export default SectionTittle;