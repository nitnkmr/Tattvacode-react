import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navbar.css"
import logo from "../assets/logo.png"
import gitlogo from "../assets/animatedlogo.png"

const Navbar = () => {
    return (
        <>



            <header className="backdrop-blur-md bg-transparent justify-between flex-col z-10 sticky top-0 md:flex-row shadow-lg h-20 flex">
                <AnchorLink href="#" className="flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8">
                    <img className="h-16 p-2 md:24" src={gitlogo} />
                </AnchorLink>
                <nav className="header-links  flex justify-center items-center font-semibold text-base lg:text-lg">
                    <ul className="flex h-full w-full items-center justify-around ml-4 xl:ml-8 mr-auto">
                        <li className="p-3 xl:p-6 active">
                            <AnchorLink href="#">
                                <span>Home</span>
                            </AnchorLink>
                        </li>
                        <li className="p-3 xl:p-6">
                            <AnchorLink href="#services">
                                <span>Services</span>
                            </AnchorLink>
                        </li>
                        <li className="p-3 xl:p-6">
                            <AnchorLink href="#about">
                                <span>About</span>
                            </AnchorLink>
                        </li>
                        <li className="p-3 xl:p-6">
                            <AnchorLink href="#contact">
                                <span className='p-2 border bg-transparent rounded-lg'>Contacts Us</span>
                            </AnchorLink>
                        </li>
                    </ul>
                </nav>

            
            </header>

        </>
    )
}

export default Navbar