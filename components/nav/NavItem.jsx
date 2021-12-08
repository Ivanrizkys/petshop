const NavItem = ({children, scheme, href, className}) => {
    const schemes = {
        "active": "",
        "disable": "opacity-70"
    }
    const pickedScheme = schemes[scheme];
    return (
        <li>
            <a href={href} className={`text-orange-primary font-poppins tracking-wider ${pickedScheme} ${className}`}>{children}</a>
        </li>
    )
}

export default NavItem;