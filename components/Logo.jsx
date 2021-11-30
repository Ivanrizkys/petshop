const Logo = ({className}) => {
    return (
        <div className={`flex items-center ${className}`}>
            <img src="new_logo.png" alt="logo" className="w-[50px]"/>
            <p className="font-rambla text-orange-secondary text-2xl tracking-wider cursor-pointer">LovePet</p>
        </div>
    )
}

export default Logo;