import logo from '../assets/home-icon.png'
import { useState } from 'react';
import { FaXmark, FaBars  } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const navItems = [
        { link: "Overview", path: "home" },
        { link: "Experience", path: "home" },
        { link: "Education", path: "home" },
        { link: "Projects", path: "home" },
    ]
    return (
        <>
            <nav className='bg-white md:px-14 p-4 max-w-screen-2x1 mx-auto text-primary fixed top-0 right-0 left-0'>
                <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
                    <div className='flex space-x-14 items-center'>
                        <a href="/" className='text-2x1 font-semibold flex items-center space-x-3 text-primart'>
                            <img src={logo} alt="" className='w-10 inline-block items-center' /></a>
                        <ul className='md:flex space-x-12 hidden'>
                            {
                                navItems.map(({ link, path }) => <a key={link} href={path} className='block hover:text-gray-300'>{link}</a>)
                            }
                        </ul>
                    </div>
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
                            {
                                isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary' />) : (<FaBars className='w-6 h-6 text-primary' />)
                            }
                        </button>
                    </div>
                </div>
            </nav>
            <div className={`space-y-4 px-4 pt-24 pb-24 bg-secondary ${isMenuOpen ? "block fixed top-0 right-0": "hidden"}`}>
                {
                    navItems.map(({ link, path }) => <a key={link} href={path} className='block hover:text-gray-300'>{link}</a>)
                }
            </div>
        </>
    );
}

export default Navbar