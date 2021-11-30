const Button = ({children, variant, className}) => {
    const variants =  {
        "outline-transparant": "text-orange-primary outline-none",
        "transparant": "border border-yellow-500 text-orange-primary",
        "orange": "border border-yellow-500 text-white bg-orange-primary"
    }
    const pickedVariants = variants[variant];
    return <a href="#" className= {`rounded-lg py-1 px-3 font-poppins inline-block ${pickedVariants} ${className}`}>{children}</a>
}

export default Button;