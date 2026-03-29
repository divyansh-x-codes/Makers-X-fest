import Reveal from '../components/Reveal';

const POCMember = ({ name, role, img, linkedin }) => (
  <div className="compact-poc-card" style={{ 
    background: 'rgba(255,255,255,0.03)', 
    border: '1px solid rgba(255,255,255,0.08)', 
    padding: '0.8rem 1rem', 
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    transition: '0.3s'
  }}>
    <img src={img || "https://i.pinimg.com/736x/c0/27/74/c027749bc1aa97f9037069e96d19adc8.jpg"} alt={name} style={{ width: '45px', height: '45px', objectFit: 'cover', objectPosition: 'top', borderRadius: '50%', border: '2px solid rgba(0,255,209,0.2)' }} />
    <div style={{ flex: 1 }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--white)', letterSpacing: '1px' }}>{name}</div>
      <div style={{ fontSize: '0.7rem', color: 'var(--grey)', textTransform: 'uppercase', letterSpacing: '1px' }}>{role || "Event POC"}</div>
    </div>
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--teal)', opacity: 0.7 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
        </a>
      )}
      <a href="mailto:hello@rishihood.edu.in" style={{ color: 'var(--grey)', opacity: 0.7 }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      </a>
    </div>
  </div>
);

export default function Team() {
  const eventTeams = [
    {
      name: "🔥 Ignite",
      pocs: [
        { name: "Siddhardha Gangeli", img: "https://i.pinimg.com/736x/83/62/13/836213dad83fe1c1d39d7e99df958c48.jpg", linkedin: " " },
        { name: "Prabhav", img: "https://i.pinimg.com/736x/7f/a9/88/7fa9880c03ac2c6946f1920ab6ad4165.jpg", linkedin: "" }
      ]
    },
    {
      name: "📈 The Listing",
      pocs: [
        { name: "Siddhardha Gangeli", img: "https://i.pinimg.com/736x/83/62/13/836213dad83fe1c1d39d7e99df958c48.jpg", linkedin: " " },
        { name: "Prabhav", img: "https://i.pinimg.com/736x/7f/a9/88/7fa9880c03ac2c6946f1920ab6ad4165.jpg", linkedin: "" }
      ]
    },
    {
      name: "🧩 Case Hunt",
      pocs: [
        { name: "Palak", img: "https://i.pinimg.com/736x/ae/f5/70/aef570375a6cd9179a61f4095fcf005c.jpg", linkedin: "" },
        { name: "Tiya", img: "https://i.pinimg.com/736x/41/95/40/419540c42f0d0a6254423fd1596b7959.jpg", linkedin: "" },
        { name: "Vansh", img: "", linkedin: "" }
      ]
    },
    {
      name: "🚀 Founders' Runway",
      pocs: [
        { name: "Tiya", img: "https://i.pinimg.com/736x/41/95/40/419540c42f0d0a6254423fd1596b7959.jpg", linkedin: "" },
        { name: "Priyanshi", img: "https://i.pinimg.com/736x/0c/45/15/0c45157f208ca56a3eb263a19895674d.jpg", linkedin: "" }
      ]
    },
    {
      name: "📣 Ad Mania",
      pocs: [
        { name: "Akshra Rajput", img: "https://i.pinimg.com/736x/90/bd/7a/90bd7aa84d6b21d4666ce7b1d8d33774.jpg", linkedin: "" },
        { name: "Sarahana", img: "https://i.pinimg.com/736x/d6/0c/b6/d60cb645a50a1276a700ee0bc7b40964.jpg", linkedin: "" }
      ]
    },
    {
      name: "⚔️ BrandWars",
      pocs: [
        { name: "Akshra Rajput", img: "https://i.pinimg.com/736x/90/bd/7a/90bd7aa84d6b21d4666ce7b1d8d33774.jpg", linkedin: "" },
        { name: "Sarahana", img: "https://i.pinimg.com/736x/d6/0c/b6/d60cb645a50a1276a700ee0bc7b40964.jpg", linkedin: "" }
      ]
    },
    {
      name: "🎲 Mokshapatram",
      pocs: [
        { name: "Shagun", img: "https://i.pinimg.com/736x/d4/70/fc/d470fc9ede66068b5e0df9aed69c14b5.jpg", linkedin: "https://www.linkedin.com/in/shagun-dahiya-29172531a?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
        { name: "Sameeksha", img: "https://i.pinimg.com/736x/fb/a0/4b/fba04b1c8a1b77e341c74a71e09d8400.jpg", linkedin: "https://www.linkedin.com/in/sameekshareetankar?utm_source=share_via&utm_content=profile&utm_medium=member_ios" }
      ]
    },
    {
      name: "☕ Founders Talk",
      pocs: [
        { name: "Maanit", img: "", linkedin: "" },
        { name: "Priyanshi", img: "https://i.pinimg.com/736x/0c/45/15/0c45157f208ca56a3eb263a19895674d.jpg", linkedin: "" }
      ]
    }
  ];

  return (
    <div id="page-team" className="page active" style={{ paddingTop: 0 }}>
      <div className="page-hero">
        <h1>THE <span style={{color:'var(--amber)'}}>MAKERS</span></h1>
        <p>The team bringing Makers'X Fest 2026 to life</p>
      </div>
      <div className="team-section">
        <Reveal className="core-team-section grid-sparkle-bg">
          <div className="core-title">MEET <span>OUR EVENT POC</span></div>
          
          <div className="core-grid">
            {/* Siddardha */}
            <div className="core-card">
              <div className="core-img-wrap">
                <img src="https://i.pinimg.com/736x/83/62/13/836213dad83fe1c1d39d7e99df958c48.jpg" alt="siddardha gangeli" className="core-img" />
              </div>
              <div className="core-info">
                <h3>Siddardha Gangeli</h3>
                <p>Event POC</p>
                <div className="core-socials">
                  <a href="mailto:hello@rishihood.edu.in" className="core-social-link"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" ><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></a>
                  <a href=" " className="core-social-link"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
                </div>
              </div>
            </div>

            {/* Akshra Rajput */}
            <div className="core-card">
              <div className="core-img-wrap">
                <img src="https://i.pinimg.com/736x/90/bd/7a/90bd7aa84d6b21d4666ce7b1d8d33774.jpg" alt="Akshra Rajput" className="core-img" />
              </div>
              <div className="core-info">
                <h3>Akshra Rajput</h3>
                <p>Event POC</p>
                <div className="core-socials">
                  <a href="mailto:hello@rishihood.edu.in" className="core-social-link"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></a>
                  <a href="#" className="core-social-link"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        
        <div className="section-label" style={{ marginTop: '5rem' }}>Organising Teams</div>
        <div className="section-title grid-sparkle-bg" style={{ fontSize: '2.5rem', padding: '1.5rem', borderRadius: '16px' }}>
          EVENT <span className="hi">POCs</span>
        </div>
        <div className="divider"></div>
        
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
            {eventTeams.map((team, idx) => (
              <div key={idx} className="team-event-card" style={{ 
                height: 'auto', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1rem', 
                padding: '1.2rem', 
                background: 'rgba(255,255,255,0.02)', 
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '16px'
              }}>
                <div className="team-event-name" style={{ 
                  fontSize: '1.2rem', 
                  color: 'var(--amber)',
                  borderBottom: '1px solid rgba(255,255,255,0.08)', 
                  paddingBottom: '0.6rem', 
                  marginBottom: '0.2rem',
                  letterSpacing: '1px'
                }}>{team.name}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {team.pocs.map((poc, pIdx) => (
                    <POCMember key={pIdx} name={poc.name} img={poc.img} linkedin={poc.linkedin} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
