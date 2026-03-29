import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import makersLogo from '../assets/XSD.png';
import { playSound } from '../utils/sounds';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div id="navbar-wrapper">
        <nav id="navbar">
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <img src={makersLogo} alt="MakersX Logo" className="nav-logo-img" />
          </Link>
          <ul className="nav-links">
            <li><NavLink onMouseEnter={() => playSound('hover')} onClick={() => playSound('click')} to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>
            <li><NavLink onMouseEnter={() => playSound('hover')} onClick={() => playSound('click')} to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink></li>
            <li><NavLink onMouseEnter={() => playSound('hover')} onClick={() => playSound('click')} to="/events" className={({isActive}) => isActive ? 'active' : ''}>Events</NavLink></li>
            <li><NavLink onMouseEnter={() => playSound('hover')} onClick={() => playSound('click')} to="/team" className={({isActive}) => isActive ? 'active' : ''}>Team</NavLink></li>
            <li><NavLink onMouseEnter={() => playSound('hover')} onClick={() => playSound('click')} to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink></li>
            <li><a href="https://unstop.com/college-fests/makersx-fest-rishihood-university-454805" target="_blank" rel="noopener noreferrer" className="nav-cta" onMouseEnter={() => playSound('hover')} onClick={() => playSound('click')}>Register</a></li>
          </ul>
          <div className="nav-actions-mobile">
            <a href="https://unstop.com/college-fests/makersx-fest-rishihood-university-454805" target="_blank" rel="noopener noreferrer" className="nav-register-btn-mobile" onClick={closeMenu}>REGISTER</a>
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
        <a href="https://unstop.com/college-fests/makersx-fest-rishihood-university-454805" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>REGISTER</a>
      </div>
    </>
  );
}
