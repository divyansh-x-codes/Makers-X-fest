import Reveal from '../components/Reveal';

export default function Register() {
  const unstopLinks = [
    { name: "🔥 Ignite", link: "https://unstop.com/college-fests/makersx-fest-rishihood-university-454805", color: "var(--amber)", desc: "Flagship Startup & IPO Simulation" },
    { name: "📈 The Listing", link: "https://unstop.com/competitions/the-listing-virtual-stock-market-simulation-makersx-fest-rishihood-university-1667053", color: "var(--green)", desc: "Virtual Stock Market Trading" },
    { name: "🧩 Case Hunt", link: "https://unstop.com/competitions/case-hunt-makersx-fest-rishihood-university-1666962", color: "var(--teal)", desc: "Business Case Strategy Competition" },
    { name: "🚀 Founders' Runway", link: "https://unstop.com/competitions/founder-runway-makersx-fest-rishihood-university-1666970", color: "var(--purple)", desc: "Premier Startup Pitch Stage" },
    { name: "📣 Ad Mania", link: "https://unstop.com/competitions/ad-mania-makersx-fest-rishihood-university-1666974", color: "var(--red)", desc: "Creative Advertising Challenge" },
    { name: "⚔️ BrandWars", link: "https://unstop.com/competitions/brand-wars-rishihood-university-1666907", color: "var(--amber)", desc: "Head-to-Head Branding Battle" },
    { name: "🎲 Mokshapatram", link: "https://unstop.com/competitions/mokshapataram-makersx-fest-rishihood-university-1666986", color: "var(--green)", desc: "Life-Sized Business Game" },
    { name: "☕ Founders Talk", link: "https://unstop.com/college-fests/makersx-fest-rishihood-university-454805", color: "var(--grey)", desc: "Networking & Stories" }
  ];

  return (
    <div id="page-register" className="page active" style={{ paddingTop: 0 }}>
      <div className="page-hero">
        <h1>REGISTRATION <span style={{color:'var(--amber)'}}>HUB</span></h1>
        <p>One-stop link to all Makers'X Fest 2026 competitions</p>
      </div>
      
      <div className="register-wrap" style={{ maxWidth: '1000px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="form-title">JOIN THE ARENA.</div>
          <div className="form-sub">Select an event below to register directly on Unstop.</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {unstopLinks.map((item, idx) => (
            <Reveal key={idx}>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="reg-hub-card" style={{
                display: 'block',
                textDecoration: 'none',
                background: 'rgba(255,255,255,0.03)',
                border: `1px solid rgba(255,255,255,0.08)`,
                borderRadius: '16px',
                padding: '2rem',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                height: '100%',
                borderBottom: `3px solid ${item.color}`
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.name.split(' ')[0]}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--white)', marginBottom: '0.5rem', letterSpacing: '2px' }}>
                  {item.name.split(' ').slice(1).join(' ').toUpperCase() || item.name.toUpperCase()}
                </h3>
                <p style={{ color: 'var(--grey)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.5' }}>{item.desc}</p>
                <div style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-head)',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  letterSpacing: '2px',
                  color: item.color,
                  textTransform: 'uppercase'
                }}>
                  Register Now <span style={{ fontSize: '1.1rem' }}>→</span>
                </div>
                <div className="hover-glow" style={{
                  position: 'absolute',
                  inset: 0,
                  background: `radial-gradient(circle at center, ${item.color}15 0%, transparent 70%)`,
                  opacity: 0,
                  transition: '0.3s'
                }}></div>
              </a>
            </Reveal>
          ))}
        </div>

        <div style={{ marginTop: '6rem', textAlign: 'center', padding: '3rem', background: 'rgba(245,166,35,0.05)', borderRadius: '20px', border: '1px solid rgba(245,166,35,0.1)' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--amber)', marginBottom: '1rem' }}>GENERAL REGISTRATION</h2>
          <p style={{ color: 'var(--grey)', marginBottom: '2rem' }}>Want to attend the fest as a spectator or join multiple events?</p>
          <a href="https://unstop.com/college-fests/makersx-fest-rishihood-university-454805" target="_blank" rel="noopener noreferrer" className="event-register-btn" style={{ background: 'var(--amber)', color: 'var(--black)', padding: '1.2rem 3rem', textDecoration: 'none', borderRadius: '8px', fontWeight: '800', letterSpacing: '3px' }}>
            FEST MAIN PAGE →
          </a>
        </div>
      </div>
      
      <style>{`
        .reg-hub-card:hover {
          background: rgba(255,255,255,0.06);
          transform: translateY(-8px);
          border-color: rgba(255,255,255,0.2);
        }
        .reg-hub-card:hover .hover-glow {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
