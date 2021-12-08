import Container from "./Container";
import Logo from "./Logo";
import NavItem from "./nav/NavItem";
import Button from "./Button";
import { useState } from "react";

const Navbar = ({screenWidth}) => {
    const [toggle, setToggle] = useState(false);
    return (
        <Container>
            <nav className="flex justify-between items-center">
                <Logo className="w-3/12 z-20"/>
                <ul className="hidden md:flex justify-around w-6/12">
                    <NavItem href="#" scheme="active">Home</NavItem>
                    <NavItem href="#" scheme="disable">About</NavItem>
                    <NavItem href="#" scheme="disable">Feature</NavItem>
                    <NavItem href="#" scheme="disable">Contact</NavItem>
                </ul>
                <div className="hidden lg:block w-3/12 text-right " >
                    <Button className="mx-3" variant="transparant">Register</Button>
                    <Button variant="orange">Login</Button>
                </div>
                <div onClick={() => setToggle(!toggle)} className="h-[20px] flex flex-col justify-between cursor-pointer z-20 lg:hidden">
                    <div className={`bg-orange-primary w-[28px] h-[3px] first-line transition duration-500 ${toggle && "first-line-check"}`}></div>
                    <div className={`bg-orange-primary w-[28px] h-[3px] transition duration-500 ${toggle && "opacity-0 transform scale-0"}`}></div>
                    <div className={`bg-orange-primary w-[28px] h-[3px] fourth-line transition duration-500 ${toggle && "fourth-line-check"}`}></div>
                    {/* <p>{toggle ? "True": "False"}</p> */}
                </div>
            </nav>
            <ul className={`flex flex-col justify-around md:justify-evenly items-center absolute w-screen h-screen right-0 top-0 bg-orange-transparant z-10 transition duration-500 transform ${!toggle && "translate-x-full hidden"}`}>
                {screenWidth <= 768 &&
                    <>
                        <NavItem className="" href="#" scheme="active">Home</NavItem>
                        <NavItem className="" href="#" scheme="active">About</NavItem>
                        <NavItem className="" href="#" scheme="active">Feature</NavItem>
                        <NavItem className="" href="#" scheme="active">Contact</NavItem>
                    </>
                }
                <NavItem className="" href="#" scheme="active">Login</NavItem>
                <NavItem className="" href="#" scheme="active">Register</NavItem>
            </ul>
        </Container>
    )
}

export default Navbar;