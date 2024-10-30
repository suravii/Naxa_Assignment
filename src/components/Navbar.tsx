import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
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

        {/* Mobile menu button */}
{/* Mobile menu button */}
<button
  className="md:hidden p-2 text-custom-orange ml-auto"
  onClick={toggleMobileMenu}
  aria-label="Toggle mobile menu"
>
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
  </svg>
</button>



        {/* Menu Items */}
        <ul className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-6 absolute md:relative bg-white md:bg-transparent md:flex md:items-center ${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex`}>
          <li className={`font-montserrat font-medium text-xl md:text-base ${isActive('/services') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
            <Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          </li>
          <li className={`font-montserrat font-medium text-xl md:text-base ${isActive('/portfolio') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
            <Link to="/portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
          </li>
          <li className={`font-montserrat font-medium text-xl md:text-base ${isActive('/company') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
            <Link to="/company" onClick={() => setMobileMenuOpen(false)}>Company</Link>
          </li>
          <li className={`font-montserrat font-medium text-xl md:text-base ${isActive('/geoai') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
            <Link to="/geoai" onClick={() => setMobileMenuOpen(false)}>GeoAI</Link>
          </li>
          <li className={`font-montserrat font-medium text-xl md:text-base ${isActive('/events-and-media') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
            <Link to="/events-and-media" onClick={() => setMobileMenuOpen(false)}>Events & Media</Link>
          </li>
          <li className={`font-montserrat font-medium text-xl md:text-base ${isActive('/blogs') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
            <Link to="/blogs" onClick={() => setMobileMenuOpen(false)}>Blogs</Link>
          </li>
        </ul>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="bg-custom-yellow text-blue-600 font-medium py-2 px-6 md:px-8 lg:px-10 hover:bg-yellow-500 font-montserrat text-xl md:text-base"
        >
          Let’s talk
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
