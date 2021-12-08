const Button = ({children, variant, className, padding, rounded, animation}) => {
    const variants =  {
        "outline-transparant": "text-orange-primary outline-none",
        "transparant": "border border-yellow-500 text-orange-primary",
        "orange": "border border-yellow-500 text-white bg-orange-primary"
    }
    const paddings = padding ? padding : "py-1 px-3";
    const pickedVariants = variants[variant];
    const roundeds = rounded ? rounded : "rounded-lg"
    return <a data-aos={animation} href="#" className= {`${roundeds} ${paddings} font-poppins inline-block ${pickedVariants} ${className}`}>{children}</a>
}

export default Button;