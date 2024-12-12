import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navbar.css"
import gitlogo from "../assets/animatedlogo.png"

const Navbar = () => {
    return (
        <>



            <header className="backdrop-blur-md bg-transparent justify-between w-[100vw] flex-col z-40 fixed top-0 md:flex-row shadow-lg flex">
                <AnchorLink href="#home" className="flex-shrink-0 flex items-center justify-center mx-4 lg:mx-6 xl:mx-8">
                    <img className="h-16 m-2" src={gitlogo} />
                </AnchorLink>
                <nav className="header-links  flex justify-center items-center font-semibold text-base lg:text-lg">
                    <ul className="flex h-full w-full items-center justify-around ml-0 xl:ml-8 mr-auto">
                        <li className="m-3 xl:m-6">
                            <AnchorLink href="#home">
                                <span>Home</span>
                            </AnchorLink>
                        </li>
                        <li className="m-3 xl:m-6">
                            <AnchorLink href="#services">
                                <span>Services</span>
                            </AnchorLink>
                        </li>
                        <li className="m-3 xl:m-6">
                            <AnchorLink href="#about">
                                <span>About</span>
                            </AnchorLink>
                        </li>
                        <li className="m-3 xl:m-6">
                            <AnchorLink href="#contact">
                                <span className='p-2 border bg-transparent hover:border-blue-600 hover:text-blue-600 rounded-lg'>Contacts</span>
                            </AnchorLink>
                        </li>
                    </ul>
                </nav>

            
            </header>

        </>
    )
}

export default Navbar