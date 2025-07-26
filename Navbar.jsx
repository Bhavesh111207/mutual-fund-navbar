// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'SIP Calculator', path: '/calculator' },
    { name: 'SIP Planner', path: '/planner' },
    { name: 'Fund Explorer', path: '/explorer' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Academy', path: '/academy' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-purple-600">Great Stocks</Link>

        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 dark:text-gray-200 hover:text-purple-600 font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/login" className="bg-purple-600 text-white px-4 py-1 rounded hover:bg-purple-700">
            Login
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block text-gray-700 dark:text-gray-200 hover:text-purple-600"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/login"
            className="block mt-2 bg-purple-600 text-white px-4 py-2 rounded text-center"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
