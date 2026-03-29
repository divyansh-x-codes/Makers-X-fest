import { Link } from 'react-router-dom';
import makersLogoFooter from '../assets/XSD.png';

export default function Footer() {
  return (
    <footer className="premium-footer compact">
      {/* --- PREMIUM BACKGROUND ELEMENTS --- */}
      <div className="footer-bg">
        <div className="footer-grid"></div>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="footer-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 100}%`,
              animationDelay: `-${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
              background: i % 3 === 0 ? 'var(--teal)' : i % 3 === 1 ? 'var(--red)' : 'var(--amber)',
              boxShadow: `0 0 10px ${i % 3 === 0 ? 'var(--teal)' : i % 3 === 1 ? 'var(--red)' : 'var(--amber)'}`
            }}
          />
        ))}
      </div>

      <div className="footer-inner">
        <div className="footer-main-grid-v3">
          {/* Brand Column */}
          <div className="footer-col-v3 brand-section">
            <Link to="/" className="footer-logo">
              <img src={makersLogoFooter} alt="MakersX Logo" className="footer-logo-img" />
            </Link>
            <p className="footer-motto-text">IGNITE. BUILD. WIN.</p>
            <p className="footer-subtext">Innovation beyond limits.</p>
          </div>

          <div className="footer-divider"></div>

          {/* Events Column */}
          <div className="footer-col-v3">
            <h4 className="footer-title">EVENTS</h4>
            <ul className="footer-links-v3">
              <li><Link to="/events/ignite">Ignite</Link></li>
              <li><Link to="/events/casehunt">Case Hunt</Link></li>
              <li><Link to="/events/founders-runway">Founders' Runway</Link></li>
              <li><Link to="/events/ad-mania">Ad Mania</Link></li>
              <li><Link to="/events/brand-wars">BrandWars</Link></li>
            </ul>
          </div>

          <div className="footer-divider"></div>

          {/* Social Column */}
          <div className="footer-col-v3">
            <h4 className="footer-title">SOCIAL</h4>
            <div className="footer-social-v3">
              <a href="https://www.instagram.com/makersx.ru?igsh=MWUycmx2eGFwdWxkaw==" target="_blank" rel="noopener noreferrer" className="social-link-v3 ig">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                Instagram</a>


              <p>+91 6009173198</p>
              <p>+91 9569850778</p>
            </div>
          </div>

          <div className="footer-divider"></div>

          {/* Contact Column */}
          <div className="footer-col-v3">
            <h4 className="footer-title">CONTACT</h4>
            <div className="footer-contact-v3">
              <p><span>📍</span> Sonipat, Haryana</p>
              <p><span>✉️</span> <a href="mailto:digvijayshahi144@gmail.com" className="footer-mail-link">digvijayshahi144@gmail.com</a></p>
              <p><span>✉️</span> <a href="mailto:divyansh.coredev@gmail.com" className="footer-mail-link">divyansh.coredev@gmail.com</a></p>
            </div>
          </div>
        </div>

        <div className="footer-bottom-v3">
          <div className="v3-copy">
            <p>© 2026 Makers'X Fest • BBA Department • Rishihood University</p>
          </div>
          <div className="v3-motto">
            <span>IGNITE.</span>
            <span>BUILD.</span>
            <span>WIN.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
