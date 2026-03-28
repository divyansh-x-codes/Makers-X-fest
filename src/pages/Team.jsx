import Reveal from '../components/Reveal';

export default function Team() {
  return (
    <div id="page-team" className="page active" style={{ paddingTop: 0 }}>
      {/* Remove inline paddingTop since the parent layout uses pt-0 now, and we can manage layout or rely on page css. */}
      {/* Wait, index.css sets .page { padding-top: 64px; min-height: 100vh; }. We have pt-0 overridden in App layout, so page-hero is fine. We will apply inline padding if needed. Actually, .page has padding-top:64px. Let's rely on that so we don't break page-hero which might negative margin or just fit. */}
      <div className="page-hero">
        <h1>THE <span style={{color:'var(--amber)'}}>MAKERS</span></h1>
        <p>The team bringing Makers'X Fest 2026 to life</p>
      </div>
      <div className="team-section">
        <Reveal className="core-team-section grid-sparkle-bg">
          <div className="core-title">MEET <span>OUR EVENT POC</span></div>
          
          <div className="core-grid">
            {/* Sidhhart  */}
            <div className="core-card">
              <div className="core-img-wrap">
                <img src="https://i.pinimg.com/736x/83/62/13/836213dad83fe1c1d39d7e99df958c48.jpg" alt="siddardha gangeli" className="core-img" />
              </div>
              <div className="core-info">
                <h3>Siddardha Gangeli</h3>
                <p>Founder</p>
                <div className="core-socials">
                  <a href="#" className="core-social-link"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" ><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></a>
                  <a href="#" className="core-social-link"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
                </div>
              </div>
            </div>

            {/* Akshra Rajput */}
            <div className="core-card">
              <div className="core-img-wrap">
                <img src="https://i.pinimg.com/736x/1a/22/e3/1a22e356f75ed9a0720627132817ce97.jpg" alt="Akshra Rajput" className="core-img" />
              </div>
              <div className="core-info">
                <h3>Akshra Rajput</h3>
                <p>Event POC</p>
                <div className="core-socials">
                  <a href="#" className="core-social-link"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></a>
                  <a href="#" className="core-social-link"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        
        <div className="section-label">Organising Teams</div>
        <div className="section-title grid-sparkle-bg" style={{ fontSize: '2.5rem', padding: '2rem', borderRadius: '16px' }}>
EVENT <span className="hi">TEAMS</span></div>
        <div className="divider"></div>
        
        <Reveal className="team-grid">
          <div className="team-event-card">
            <div className="team-event-name">🧩 Case Hunt</div>
            <div className="team-members">
              {['Akshra Rajput', 'Kavyansh', 'Palak', 'Vansh', 'Sarthak', 'Aaditya Tanwar', 'Insha'].map(n => <span key={n} className="member-chip">{n}</span>)}
            </div>
          </div>
          <div className="team-event-card">
            <div className="team-event-name">🚀 Founders' Runway</div>
            <div className="team-members">
              {['Tiya', 'Sarahana Pande', 'Akshra Rajput', 'Priyanshi Agrawal', 'Vedika', 'Vedansh', 'Jhilmil', 'Arpita', 'Insha', 'Mishti', 'Palak', 'Neha'].map(n => <span key={n} className="member-chip">{n}</span>)}
            </div>
          </div>
          <div className="team-event-card">
            <div className="team-event-name">🔥 Ignite</div>
            <div className="team-members">
              {['Siddharth', 'Ipshita', 'Kavyansh', 'Vedika', 'Vansh Wadhwa', 'Adarsh', 'Parbhav'].map(n => <span key={n} className="member-chip">{n}</span>)}
            </div>
          </div>
          <div className="team-event-card">
            <div className="team-event-name">📣 Ad Mania</div>
            <div className="team-members">
              {['Priyanshi Agrawal', 'Sarthak', 'Shiladitya Roy', 'Sahil', 'Jhilmil', 'Palak', 'Aditya Tanwar', 'Manosh Ranjan'].map(n => <span key={n} className="member-chip">{n}</span>)}
            </div>
          </div>
          <div className="team-event-card">
            <div className="team-event-name">⚔️ BrandWars</div>
            <div className="team-members">
              {['Sarahana Pande', 'Shiladitya Roy', 'Sahil', 'Jhilmil', 'Aditya Tanwar', 'Vidansh'].map(n => <span key={n} className="member-chip">{n}</span>)}
            </div>
          </div>
          <div className="team-event-card">
            <div className="team-event-name">⚙️ The Forge</div>
            <div className="team-members">
              {['Maanit', 'Gaunath'].map(n => <span key={n} className="member-chip">{n}</span>)}
            </div>
          </div>
          <div className="team-event-card">
            <div className="team-event-name">🎲 Mokshapatram</div>
            <div className="team-members">
              <span className="member-chip">Riddhi</span>
            </div>
          </div>
          <div className="team-event-card">
            <div className="team-event-name">☕ Founders Talk</div>
            <div className="team-members">
              {['Maanit', 'Gaunath'].map(n => <span key={n} className="member-chip">{n}</span>)}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
