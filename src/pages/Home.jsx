import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Reveal from '../components/Reveal';

import makersLogo from '../assets/makers-logo.png';
import GalleryMarquee from '../components/GalleryMarquee';

export default function Home() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({ d: '00', h: '00', m: '00', s: '00' });

  useEffect(() => {
    // Event Date: April 17, 2026
    const target = new Date('2026-04-17T09:00:00');

    const updateCountdown = () => {
      const now = new Date();
      const diff = target - now;
      if (diff <= 0) {
        setTimeLeft({ d: '00', h: '00', m: '00', s: '00' });
        return;
      }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);

      setTimeLeft({
        d: String(d).padStart(2, '0'),
        h: String(h).padStart(2, '0'),
        m: String(m).padStart(2, '0'),
        s: String(s).padStart(2, '0')
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="page-home" className="page active scanlines" style={{ paddingTop: 0 }}>
      {/* Hero Section */}
      <section id="hero" className="grid-sparkle-bg">





        <div className="hero-content">
          <div className="hero-badge">🎓 School of Entrepreneurship</div>
          <h1 className="hero-title" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <img
              src={makersLogo}
              alt="Makers X"
              style={{
                width: '100%',
                maxWidth: '500px',
                height: 'auto',
                filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))',
                marginTop: '-2rem',
                borderRadius: '4px',
              }}
            />
            <div style={{ marginTop: '1rem' }}><span className="accent2">FEST</span> 2026</div>
          </h1 >

          <p className="hero-sub">Where Ideas Ignite. Markets Move. Brands Win.</p>
          <div className="hero-btns">
            <Link className="btn-primary" to="/events">Explore Events</Link>
            <Link className="btn-outline" to="/register">Register Now</Link>
          </div>
          <div id="countdown-wrap">
            <div className="countdown-label">Event Countdown</div>
            <div className="countdown-timer">
              <div className="cd-unit"><span className="cd-num">{timeLeft.d}</span><span className="cd-label">Days</span></div>
              <div className="cd-sep">:</div>
              <div className="cd-unit"><span className="cd-num">{timeLeft.h}</span><span className="cd-label">Hours</span></div>
              <div className="cd-sep">:</div>
              <div className="cd-unit"><span className="cd-num">{timeLeft.m}</span><span className="cd-label">Minutes</span></div>
              <div className="cd-sep">:</div>
              <div className="cd-unit"><span className="cd-num">{timeLeft.s}</span><span className="cd-label">Seconds</span></div>
            </div>
          </div>
        </div>
      </section>


      <div className="stats-bar">
        <div className="stat-item"><span className="stat-num">5</span><span className="stat-label">Epic<br />Events</span></div>
        <div className="stat-item"><span className="stat-num">3</span><span className="stat-label">Epic<br />Activity</span></div>
        <div className="stat-item"><span className="stat-num">500+</span><span className="stat-label">Expected<br />Participants</span></div>
        <div className="stat-item"><span className="stat-num">₹50k +</span><span className="stat-label">Total<br />Prize Pool</span></div>
        <div className="stat-item"><span className="stat-num">2</span><span className="stat-label">Epic<br />Day</span></div>
      </div>

      <div className="section grid-sparkle-bg">
        <Reveal>
          <div className="section-label">What to Expect</div>
          <div className="section-title">TWO DAYS.<br /><span className="hi">Eight BATTLES.</span></div>
          <div className="divider"></div>
        </Reveal>

        <Reveal className="events-grid">
          {/* IGNITE */}
          <Link to="/events/ignite" className="event-card flagship flagship-glow">
            <div className="flagship-label">Flagship Event</div>
            <div className="event-card-img ignite-bg">
              <img src="https://i.pinimg.com/736x/14/be/10/14be1075d3106e4e8c6187c2f8c192af.jpg" alt="IGNITE" />
              <div className="reg-badge">
                <span>REG</span>
                <span>OPEN</span>
              </div>
            </div>
            <div className="event-card-body">
              <div className="event-card-title">IGNITE</div>
              <div className="event-card-meta">
                <div className="meta-row prize"><span className="icon">🏆</span>From startup pitch to virtual IPO - simulate the full journey from idea to stock market listing.</div>
              </div>
              <button className="view-btn">VIEW DETAILS</button>
            </div>
            <div className="status-badge closed">REGISTRATION OPEN</div>
          </Link>

          {/* CASE HUNT */}
          <Link to="/events/casehunt" className="event-card">
            <div className="event-card-img casehunt-bg">
              <img src="https://i.pinimg.com/736x/be/b0/b8/beb0b894ab667569d2f9bd9376b0f422.jpg" alt="CASE HUNT" />
              <div className="reg-badge">
                <span>REG</span>
                <span>OPEN</span>
              </div>
            </div>
            <div className="event-card-body">
              <div className="event-card-title">CASE HUNT</div>
              <div className="event-card-meta">
                <div className="meta-row prize"><span className="icon">🏆</span> Crack real-world business cases under pressure. Strategy, data, and storytelling collide.</div>
              </div>
              <button className="view-btn">VIEW DETAILS</button>
            </div>
            <div className="status-badge closed">REGISTRATION OPEN</div>
          </Link>

          {/* FOUNDERS' RUNWAY */}
          <Link to="/events/founders-runway" className="event-card">
            <div className="event-card-img founders-bg">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop" alt="FOUNDERS' RUNWAY" />
              <div className="reg-badge">
                <span>REG</span>
                <span>OPEN</span>
              </div>
            </div>
            <div className="event-card-body">
              <div className="event-card-title">FOUNDERS' RUNWAY</div>
              <div className="event-card-meta">

                <div className="meta-row prize"><span className="icon">🏆</span>Pitch your startup to a live panel of investors. Turn your vision into fundable reality</div>
              </div>
              <button className="view-btn">VIEW DETAILS</button>
            </div>
            <div className="status-badge closed">REGISTRATION OPEN</div>
          </Link>

          {/* AD MANIA */}
          <Link to="/events/ad-mania" className="event-card">
            <div className="event-card-img admania-bg">
              <img src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800&auto=format&fit=crop" alt="AD MANIA" />
              <div className="reg-badge">
                <span>REG</span>
                <span>OPEN</span>
              </div>
            </div>
            <div className="event-card-body">
              <div className="event-card-title">AD MANIA</div>
              <div className="event-card-meta">
                <div className="meta-row prize"><span className="icon">🏆</span>Craft campaigns that cut through noise.
                  Creative strategy, consumer insight, and big ideas</div>
              </div>
              <button className="view-btn">VIEW DETAILS</button>
            </div>
            <div className="status-badge closed">REGISTRATION OPEN</div>
          </Link>

          {/* BRANDWARS */}
          <Link to="/events/brand-wars" className="event-card">
            <div className="event-card-img brandwars-bg">
              <img src="https://i.pinimg.com/736x/e9/d8/d4/e9d8d4f0da4f39a6be8903f57b72017a.jpg" alt="BRANDWARS" />
              <div className="reg-badge">
                <span>REG</span>
                <span>OPEN</span>
              </div>
            </div>
            <div className="event-card-body">
              <div className="event-card-title">BRANDWARS</div>
              <div className="event-card-meta">
                <div className="meta-row prize"><span className="icon">🏆</span> Build, defend, or destroy a brand under pressure. A head-to-head battle of positioning and wit.</div>
              </div>
              <button className="view-btn">VIEW DETAILS</button>
            </div>
            <div className="status-badge closed">REGISTRATION OPEN</div>
          </Link>

          {/* THE FORGE */}
          <Link to="/events/the-forge" className="event-card">
            <div className="event-card-img forge-bg">
              <img src="https://i.pinimg.com/736x/58/a7/c3/58a7c34ba59c61ba5da0f90f58160b8b.jpg" alt="THE FORGE" />
              <div className="reg-badge">
                <span>REG</span>
                <span>OPEN</span>
              </div>
            </div>
            <div className="event-card-body">
              <div className="event-card-title">THE FORGE</div>
              <div className="event-card-meta">
                <div className="meta-row prize"><span className="icon">🏆</span>Build a working product prototype from scratch in hours. Innovation under a ticking clock.</div>
              </div>
              <button className="view-btn">VIEW DETAILS</button>
            </div>
            <div className="status-badge closed">REGISTRATION OPEN</div>
          </Link>

          {/* MOKSHAPATRAM */}
          <Link to="/events/mokshapatram" className="event-card">
            <div className="event-card-img moksha-bg">
              <img src="https://i.pinimg.com/736x/91/fd/51/91fd51c7e3544547dd05c0b5cb177b14.jpg" alt="MOKSHAPATRAM" />
              <div className="reg-badge">
                <span>REG</span>
                <span>OPEN</span>
              </div>
            </div>
            <div className="event-card-body">
              <div className="event-card-title">MOKSHAPATRAM</div>
              <div className="event-card-meta">
                <div className="meta-row prize"><span className="icon">🏆</span>Life-sized business Snakes & Ladders. Becoming a piece in a physical strategic simulation.</div>
              </div>
              <button className="view-btn">VIEW DETAILS</button>
            </div>
            <div className="status-badge closed">REGISTRATION OPEN</div>
          </Link>

          {/* FOUNDERS TALK */}
          <Link to="/events/founders-talk" className="event-card">
            <div className="event-card-img founders-talk-bg">
              <img src="https://i.pinimg.com/736x/82/b4/2e/82b42e66787734f97860ca0fffdb10c5.jpg" alt="FOUNDERS TALK" />
              <div className="reg-badge">
                <span>REG</span>
                <span>OPEN</span>
              </div>
            </div>
            <div className="event-card-body">
              <div className="event-card-title">FOUNDERS TALK</div>
              <div className="event-card-meta">
                <div className="meta-row prize"><span className="icon">🏆</span>Intimate café-style networking with real-world founders. Stories, coffee, and clarity.</div>
              </div>
              <button className="view-btn">VIEW DETAILS</button>
            </div>
            <div className="status-badge closed">REGISTRATION OPEN</div>
          </Link>
        </Reveal>
      </div>

      {/* Gallery Section - Title centered, marquee full width */}
      <div className="section grid-sparkle-bg" style={{ paddingTop: '3rem', paddingBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <Reveal>
          <div className="section-label" style={{ color: 'var(--purple)' }}>CAPTURED MOMENTS</div>
          <div className="section-title">MAKERS <span className="hi" style={{ color: 'var(--teal)' }}>GALLERY</span></div>
          <p style={{
            color: 'var(--grey)',
            maxWidth: '600px',
            margin: '1.5rem auto 2rem',
            fontSize: '1.05rem',
            lineHeight: '1.6',
            fontFamily: 'var(--font-head)',
          }}>
            Relive the moments that defined our events. The clutch plays, the roaring victories, the pressure, and the pride that followed.
          </p>
        </Reveal>
      </div>

      {/* Full-width gallery marquee — outside any padding container */}
      <div style={{ width: '100%', overflow: 'hidden', background: 'transparent' }}>
        <GalleryMarquee />
      </div>

      <div style={{
        paddingBottom: '5rem',
        paddingTop: '3rem',
        textAlign: 'center',
        color: 'rgba(246, 240, 240, 0.91)',
        fontSize: '1rem',
        fontFamily: 'var(--font-head)',
        letterSpacing: '1px'
      }}>
        DEVELOPED BY ❤️ Digvijay Shahi And Divyansh Chaudhary
      </div>

    </div>
  );
}
