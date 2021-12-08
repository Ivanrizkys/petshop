const SocialMedia = ({image, href, className}) => {
    return (
        <a href={href}>
            <img className={`transition duration-200 transform hover:-translate-y-4 ${className}`} src={image} alt={image}/>
        </a>
    )
}

export default SocialMedia;