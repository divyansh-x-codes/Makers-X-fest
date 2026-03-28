import Reveal from '../components/Reveal';

export default function About() {
  return (
    <div id="page-about" className="page active" style={{ paddingTop: 0 }}>
      {/* Remove paddingTop here and instead rely on layout to handle spacing since the parent layout has pt-[64px] (not applicable for page-hero which expects to touch navbar, so we offset properly if needed. ACTUALLY page active sets padding-top: 64px in index.css, we should override or let it be. We removed it inline.) */} 
      <div className="page-hero">
        <h1>ABOUT <span style={{color:'var(--amber)'}}>RISHIHOOD</span></h1>
      </div>
      <div className="section grid-sparkle-bg">
        <Reveal className="about-grid">
          <div className="about-text">
            <div className="section-label">The University</div>
            <div className="section-title">A Decade of <span className="hi">Nation-Building</span></div>
            <div className="divider"></div>
            
            <div className="milestone-list">
              <div className="milestone-item">
                <div className="milestone-dot"></div>
                <div className="milestone-content">
                  <strong>The Vision</strong>
                  <p>Founded to align education with India's transformation journey, aiming to redefine learning as a tool for nation-building.</p>
                </div>
              </div>

              <div className="milestone-item">
                <div className="milestone-dot"></div>
                <div className="milestone-content">
                  <strong>IITian Roots</strong>
                  <p>Established by IITians Shobhit Mathur and Sahil Aggarwal with a mission to empower impact-driven leaders.</p>
                </div>
              </div>

              <div className="milestone-item">
                <div className="milestone-dot"></div>
                <div className="milestone-content">
                  <strong>2014: The Foundation</strong>
                  <p>The journey began with the Vision India Foundation, co-founded with Shri Suresh Prabhu to empower young minds.</p>
                </div>
              </div>

              <div className="milestone-item">
                <div className="milestone-dot"></div>
                <div className="milestone-content">
                  <strong>2021: Official Inauguration</strong>
                  <p>Launched full-time residential UG programs and a dedicated PhD track for advanced research and learning.</p>
                </div>
              </div>

              <div className="milestone-item">
                <div className="milestone-dot"></div>
                <div className="milestone-content">
                  <strong>National Transformation</strong>
                  <p>Evolved into India's first National Transformation University, based on a sprawling 25-acre modern campus.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="about-hero-frame">
              <div className="about-hero-inner">
                <img 
                  src="https://i.pinimg.com/736x/f6/50/64/f65064c3fef8ab7062454bcc7fe23cea.jpg" 
                  alt="Rishihood University Campus" 
                  className="about-hero-img" 
                />
              </div>
            </div>
            
            <div className="about-highlight">
              <p>"Success is measured by impact on society and the nation."</p>
            </div>
          </div>
        </Reveal>

        <Reveal style={{ marginTop: '4rem' }}>
          <div>
            <div className="section-label">The Fest</div>
            <div className="section-title" style={{ fontSize: '2.5rem' }}>MAKERS<span style={{ color: 'var(--amber)' }}>'X</span> FEST</div>
            <div className="divider"></div>
            <p style={{ color: 'rgba(240,237,232,0.75)', lineHeight: 1.8, fontSize: '1rem' }}>Makers'X Fest is the flagship annual fest of the BBA Department — a celebration of entrepreneurship, creativity, finance, and innovation. It brings together the brightest student minds from colleges across India to compete, collaborate, and create.</p>
            <p style={{ color: 'rgba(240,237,232,0.75)', lineHeight: 1.8, fontSize: '1rem', marginTop: '1rem' }}>Five high-stakes events. Two unforgettable days. Hundreds of ambitious minds. This is where your startup ideas get judged by real investors, and your creativity gets monetized.</p>
            <div className="address-card" style={{ marginTop: '2rem' }}>
              <div className="address-icon">📍</div>
              <div className="address-text">
                <strong>Rishihood University</strong>
                <span>Sonipat, Haryana, India — NH-44, Delhi-NCR</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal style={{ marginTop: '10rem' }}>
          <div className="section-label" style={{marginTop:'04rem',}}>Follow Us</div>
          <div className="section-title" style={{fontSize:'2.5rem', marginTop:'01rem',}}>STAY <span className="hi">CONNECTED</span></div>
          <div className="divider"></div>
          <div className="social-cards">
            <a href="https://www.linkedin.com/school/rishihood/" target="_blank" rel="noopener noreferrer" className="social-card linkedin">
              <svg className="social-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="6" fill="rgba(0,255,209,0.1)"/>
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" fill="#00FFD1"/>
                <circle cx="4" cy="4" r="2" fill="#00FFD1"/>
              </svg>
              <div className="social-card-text">
                <strong>LinkedIn</strong>
                <span>Follow Rishihood University</span>
              </div>
            </a>
            <a href="https://www.instagram.com/rishihooduni?igsh=MWFsajloa3Z0M2lubA==" target="_blank" rel="noopener noreferrer" className="social-card instagram">
              <svg className="social-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="6" fill="rgba(245,166,35,0.1)"/>
                <rect x="4" y="4" width="16" height="16" rx="5" stroke="#F5A623" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="#F5A623" strokeWidth="2"/>
                <circle cx="16.5" cy="7.5" r="1" fill="#F5A623"/>
              </svg>
              <div className="social-card-text">
                <strong>Instagram</strong>
                <span>@rishihooduni</span>
              </div>
            </a>
          </div>
        </Reveal>

       
      </div>
    </div>
  );
}
