const NavItem = ({children, scheme, href}) => {
    const schemes = {
        "active": "",
        "disable": "opacity-70"
    }
    const pickedScheme = schemes[scheme];
    return (
        <li>
            <a href={href} className={`text-orange-primary font-poppins tracking-wider ${pickedScheme}`}>{children}</a>
        </li>
    )
}

export default NavItem;