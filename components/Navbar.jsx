import Container from "./Container";
import Logo from "./Logo";
import NavItem from "./nav/NavItem";
import Button from "./Button";

const Navbar = () => {
    return (
        <Container>
            <nav className="flex justify-between items-center">
                <Logo className="w-3/12"/>
                <ul className="flex justify-around w-6/12">
                    <NavItem href="#" scheme="active">Home</NavItem>
                    <NavItem href="#" scheme="disable">About</NavItem>
                    <NavItem href="#" scheme="disable">Feature</NavItem>
                    <NavItem href="#" scheme="disable">Contact</NavItem>
                </ul>
                <div className="w-3/12 text-right -mx-3" >
                    <Button className="mx-3" variant="transparant">Register</Button>
                    <Button variant="orange">Login</Button>
                </div>
            </nav>
        </Container>
    )
}

export default Navbar;