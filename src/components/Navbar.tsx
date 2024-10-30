import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import './style.css';
import './style1.css';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path; 

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPortfolioHovered, setIsPortfolioHovered] = useState(false);
  const [isCompanyHovered, setIsCompanyHovered] = useState(false);
  const [isEventsHovered, setIsEventsHovered] = useState(false);

  let portfolioTimeout: NodeJS.Timeout | null = null;
  let companyTimeout: NodeJS.Timeout | null = null;
  let eventsTimeout: NodeJS.Timeout | null = null;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnterPortfolio = () => {
    if (portfolioTimeout) clearTimeout(portfolioTimeout);
    portfolioTimeout = setTimeout(() => {
      setIsPortfolioHovered(true);
    }, 300);
  };

  const handleMouseLeavePortfolio = () => {
    if (portfolioTimeout) clearTimeout(portfolioTimeout);
    portfolioTimeout = setTimeout(() => {
      setIsPortfolioHovered(false);
    }, 300);
  };

  const handleMouseEnterCompany = () => {
    if (companyTimeout) clearTimeout(companyTimeout);
    companyTimeout = setTimeout(() => {
      setIsCompanyHovered(true);
    }, 300);
  };

  const handleMouseLeaveCompany = () => {
    if (companyTimeout) clearTimeout(companyTimeout);
    companyTimeout = setTimeout(() => {
      setIsCompanyHovered(false);
    }, 300);
  };

  const handleMouseEnterEvents = () => {
    if (eventsTimeout) clearTimeout(eventsTimeout);
    eventsTimeout = setTimeout(() => {
      setIsEventsHovered(true);
    }, 300);
  };

  const handleMouseLeaveEvents = () => {
    if (eventsTimeout) clearTimeout(eventsTimeout);
    eventsTimeout = setTimeout(() => {
      setIsEventsHovered(false);
    }, 300);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white">
      <div className="container mx-auto max-w-screen-lg px-4 md:px-8 lg:px-8 flex justify-between items-center py-10">
        {/* Logo */}
        <Link to="/" className="flex items-center font-bold text-lg">
          <img
            src="/src/assets/naxa_logo.png"
            alt="Naxa Logo"
            className="h-10 sm:h-8 w-auto mr-2"
          />
        </Link>

        {/* Centered Navigation Items */}
        <ul
          className={`flex-col md:flex-row flex-grow md:flex md:justify-center space-y-4 md:space-y-0 md:space-x-6 absolute md:relative bg-white md:bg-transparent items-center ${
            isMobileMenuOpen ? 'flex' : 'hidden'
          } md:flex`}
        >
          <li
            className={`font-montserrat font-medium text-xl md:text-base ${
              isActive('/services') ? 'text-blue-600' : 'text-gray-700'
            }`}
          >
            <Link to="/services" onClick={closeMobileMenu}>
              Services
            </Link>
          </li>

          {/* Portfolio Dropdown */}
          <li
            className="relative dropdown font-montserrat font-medium text-xl md:text-base text-gray-700 hover:text-blue-600"
            onMouseEnter={handleMouseEnterPortfolio}
            onMouseLeave={handleMouseLeavePortfolio}
          >
            <Link to="/portfolio" onClick={closeMobileMenu}>
              Portfolio
            </Link>
            {isPortfolioHovered && (
              <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg border border-gray-200">
                <li className="dropdown-item hover:bg-yellow-400">
                  <Link
                    to="/portfolio/general"
                    className="block px-4 py-2 text-gray-700"
                  >
                    General
                  </Link>
                </li>
                <li className="dropdown-item hover:bg-yellow-400">
                  <Link
                    to="/portfolio/international"
                    className="block px-4 py-2 text-gray-700"
                  >
                    International
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Company Dropdown */}
          <li
            className="relative dropdown font-montserrat font-medium text-xl md:text-base text-gray-700 hover:text-blue-600"
            onMouseEnter={handleMouseEnterCompany}
            onMouseLeave={handleMouseLeaveCompany}
          >
            <Link to="/company" onClick={closeMobileMenu}>
              Company
            </Link>
            {isCompanyHovered && (
              <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg border border-gray-200">
                <li className="dropdown-item hover:bg-yellow-400">
                  <Link
                    to="/company/about"
                    className="block px-4 py-2 text-gray-700"
                  >
                    About us
                  </Link>
                </li>
                <li className="dropdown-item hover:bg-yellow-400">
                  <Link
                    to="/company/team"
                    className="block px-4 py-2 text-gray-700"
                  >
                    Team
                  </Link>
                </li>
                <li className="dropdown-item hover:bg-yellow-400">
                  <Link
                    to="/company/work"
                    className="block px-4 py-2 text-gray-700"
                  >
                    Work with us
                  </Link>
                </li>
                <li className="dropdown-item hover:bg-yellow-400">
                  <Link
                    to="/company/awards"
                    className="block px-4 py-2 text-gray-700"
                  >
                    Awards & Achievements
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li
            className={`font-montserrat font-medium text-xl md:text-base ${
              isActive('/blogs') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            <Link to="/blogs" onClick={closeMobileMenu}>
              GeoAI
            </Link>
          </li>

          {/* Events & Media Dropdown */}
          <li
            className="relative dropdown font-montserrat font-medium text-xl md:text-base text-gray-700 hover:text-blue-600"
            onMouseEnter={handleMouseEnterEvents}
            onMouseLeave={handleMouseLeaveEvents}
          >
            <Link to="/events-and-media" onClick={closeMobileMenu}>
              Events & Media
            </Link>
            {isEventsHovered && (
              <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg border border-gray-200">
                <li className="dropdown-item hover:bg-yellow-400">
                  <Link
                    to="/events-and-media/events"
                    className="block px-4 py-2 text-gray-700"
                  >
                    Events
                  </Link>
                </li>
                <li className="dropdown-item hover:bg-yellow-400">
                  <Link
                    to="/events-and-media/media"
                    className="block px-4 py-2 text-gray-700"
                  >
                    Media
                  </Link>
                </li>
                <li className="dropdown-item hover:bg-yellow-400">
                  <Link
                    to="/events-and-media/publications"
                    className="block px-4 py-2 text-gray-700"
                  >
                    Publications
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li
            className={`font-montserrat font-medium text-xl md:text-base ${
              isActive('/blogs') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            <Link to="/blogs" onClick={closeMobileMenu}>
              Blogs
            </Link>
          </li>
        </ul>

        {/* Right-aligned button container for mobile */}
        <div className="flex items-center md:space-x-4">
          {/* Contact Button */}
          <Link
            to="/contact"
            className="bg-custom-yellow text-blue-600 font-medium py-2 px-6 md:px-8 lg:px-10 hover:bg-yellow-500 font-montserrat text-xl md:text-base"
          >
            Let’s talk
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-custom-orange ml-4"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile View Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-yellow-300 flex justify-center items-center z-50">
          <button
            className="absolute top-4 right-4 text-blue-600 text-2xl"
            onClick={toggleMobileMenu}
          >
            &times;
          </button>
          <ul className="space-y-6 text-center">
            <li>
              <Link to="/services" onClick={closeMobileMenu}>Services</Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={closeMobileMenu}>Portfolio</Link>
            </li>
            <li>
              <Link to="/company" onClick={closeMobileMenu}>Company</Link>
            </li>
            <li>
              <Link to="/events-and-media" onClick={closeMobileMenu}>Events & Media</Link>
            </li>
            <li>
              <Link to="/blogs" onClick={closeMobileMenu}>Blogs</Link>
            </li>
            <li>
              <Link to="/contact" className="bg-custom-yellow text-blue-600 py-2 px-4" onClick={closeMobileMenu}>Let’s talk</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
