import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div id="navbar-wrapper">
        <nav id="navbar">
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <img src="src/assets/fire .gif" alt="MakersX Logo" className="nav-logo-img" />
          </Link>
          <ul className="nav-links">
            <li><NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>
            <li><NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink></li>
            <li><NavLink to="/events" className={({isActive}) => isActive ? 'active' : ''}>Events</NavLink></li>
            <li><NavLink to="/team" className={({isActive}) => isActive ? 'active' : ''}>Team</NavLink></li>
            <li><NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink></li>
            <li><NavLink to="/register" className="nav-cta">Register</NavLink></li>
          </ul>
          <div className="nav-actions-mobile">
            <Link to="/register" className="nav-register-btn-mobile" onClick={closeMenu}>REGISTER</Link>
            <div id="hamburger" onClick={toggleMenu} className={menuOpen ? 'open' : ''}>
              <span></span><span></span><span></span>
            </div>
          </div>
        </nav>
      </div>

      {/* MOBILE MENU */}
      <div id="mobile-menu" className={menuOpen ? 'open' : ''}>
        <Link to="/" onClick={closeMenu}>HOME</Link>
        <Link to="/about" onClick={closeMenu}>ABOUT</Link>
        <Link to="/events" onClick={closeMenu}>EVENTS</Link>
        <Link to="/team" onClick={closeMenu}>TEAM</Link>
        <Link to="/contact" onClick={closeMenu}>CONTACT</Link>
        <Link to="/register" onClick={closeMenu}>REGISTER</Link>
      </div>
    </>
  );
}
