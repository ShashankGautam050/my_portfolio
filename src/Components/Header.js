import React, { useState } from 'react';
import { Link } from 'react-scroll';
import AnimatedLogo from './AnimatedLogo'; // Adjust the import path as necessary

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white fixed top-0 w-full z-50 shadow-md">
      <div className="flex justify-between items-center p-4 container mx-auto">
        <div className="flex items-center">
          {/* Replace text with AnimatedLogo */}
          <AnimatedLogo />
        </div>
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-yellow-500"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-yellow-500"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-yellow-500"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-yellow-500"
          >
            Contact
          </Link>
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-yellow-500 hover:border-yellow-500"
          onClick={toggleMenu}
        >
          <svg
            className="fill-current h-6 w-6"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.414 4.586a2 2 0 10-2.828-2.828L12 6.344 7.414 1.758a2 2 0 00-2.828 2.828L9.657 9.172 4.172 14.657a2 2 0 102.828 2.828L12 11.828l4.586 4.657a2 2 0 102.828-2.828L14.344 9.172l5.242-5.586a2 2 0 00-2.828-2.828L12 6.344 7.414 1.758a2 2 0 10-2.828 2.828L12 12l4.586-4.586L12 2.828 16.344 4.586a2 2 0 100 2.828L12 6.344l4.586-4.586z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-700 px-4 pb-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="block py-2 hover:text-yellow-500"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="block py-2 hover:text-yellow-500"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="block py-2 hover:text-yellow-500"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="block py-2 hover:text-yellow-500"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
