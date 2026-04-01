import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Reveal from '../components/Reveal';

import makersLogo from '../assets/XSD.png';
import GalleryMarquee from '../components/GalleryMarquee';
import Firecrackers from '../components/Firecrackers';

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
        <Firecrackers duration={8000} />




        <div className="hero-content">
          <Reveal className="delay-100">
            <h1 className="hero-title">
              <img
                src={makersLogo}
                alt="Makers X"
                className="hero-logo-main"
              />
              <div className="hero-fest-text"><span className="accent2">FEST</span> 2026</div>
            </h1>
          </Reveal>

          <Reveal className="delay-300">
            <p className="hero-sub">Where Ideas Ignite. Markets Move. Brands Win.</p>
          </Reveal>

          <Reveal className="delay-500">
            <div className="hero-btns">
              <Link className="btn-primary" to="/events">Explore Events</Link>
              <a href="https://unstop.com/college-fests/makersx-fest-rishihood-university-454805" target="_blank" rel="noopener noreferrer" className="btn-outline">Register Now</a>
            </div>
          </Reveal>

          <Reveal className="delay-700">
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
          </Reveal>
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
          <div className="event-card flagship flagship-glow">
            <div className="flagship-label">Flagship Event</div>
            <div className="event-card-img ignite-bg">
              <img src="https://i.pinimg.com/736x/5c/b2/ef/5cb2efafa2bbbb702a01d3b1c92690b4.jpg" alt="IGNITE" />
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
              <div className="event-card-btns">
                <Link to="/events/ignite" className="view-btn">VIEW DETAILS</Link>
                <a href="https://unstop.com/college-fests/makersx-fest-rishihood-university-454805" target="_blank" rel="noopener noreferrer" className="view-btn register-btn reg-orange">REGISTER</a>
              </div>
            </div>
            <div className="status-badge closed">REGISTRATION OPEN</div>
          </div>

          {/* THE LISTING */}
          <div className="event-card">
            <div className="event-card-img listing-bg">
              <img src="https://i.pinimg.com/736x/c2/28/d5/c228d56188c99bb379a441d35ae2b00d.jpg" alt="THE LISTING" />
              <div className="reg-badge">
                <span>REG</span>
                <span>OPEN</span>
              </div>
            </div>
            <div className="event-card-body">
              <div className="event-card-title">THE LISTING</div>
              <div className="event-card-meta">
                <div className="meta-row prize"><span className="icon">🏆</span>Virtual stock market where you trade Ignite's startups. High-stakes financial strategy.</div>
              </div>
              <div className="event-card-btns">
                <Link to="/events/the-listing" className="view-btn">VIEW DETAILS</Link>
                <a href="https://unstop.com/competitions/the-listing-virtual-stock-market-simulation-makersx-fest-rishihood-university-1667053" target="_blank" rel="noopener noreferrer" className="view-btn register-btn reg-green">REGISTER</a>
              </div>
            </div>
            <div className="status-badge closed">REGISTRATION OPEN</div>
          </div>

          {/* CASE HUNT */}
          <div className="event-card">
            <div className="event-card-img casehunt-bg">
              <img src="https://i.pinimg.com/736x/a0/dd/1e/a0dd1ef16735a305b418d84340aacb00.jpg" alt="CASE HUNT" />
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
              <div className="event-card-btns">
                <Link to="/events/casehunt" className="view-btn">VIEW DETAILS</Link>
                <a href="https://unstop.com/competitions/case-hunt-makersx-fest-rishihood-university-1666962" target="_blank" rel="noopener noreferrer" className="view-btn register-btn reg-teal">REGISTER</a>
              </div>
            </div>
            <div className="status-badge closed">REGISTRATION OPEN</div>
          </div>

          {/* FOUNDERS' RUNWAY */}
          <div className="event-card">
            <div className="event-card-img founders-bg">
              <img src="https://i.pinimg.com/736x/83/73/16/837316b3c36d98e8eb6b6d9b9d173969.jpg" alt="FOUNDERS' RUNWAY" />
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
              <div className="event-card-btns">
                <Link to="/events/founders-runway" className="view-btn">VIEW DETAILS</Link>
                <a href="https://unstop.com/competitions/founder-runway-makersx-fest-rishihood-university-1666970" target="_blank" rel="noopener noreferrer" className="view-btn register-btn reg-purple">REGISTER</a>
              </div>
            </div>
            <div className="status-badge closed">REGISTRATION OPEN</div>
          </div>

          {/* AD MANIA */}
          <div className="event-card">
            <div className="event-card-img admania-bg">
              <img src="https://i.pinimg.com/736x/0d/6c/4f/0d6c4fdcd14b73293fc320d3c6e4bb42.jpg" alt="AD MANIA" />
              <div className="reg-badge">
                <span>REG</span>
                <span>OPEN</span>
              </div>
            </div>
            <div className="event-card-body">
              <div className="event-card-title">AD MANIA</div>
              <div className="event-card-meta">
                <div className="meta-row prize"><span className="icon">🏆</span>Craft campaigns that cut through noise. Creative strategy, consumer insight, and big ideas</div>
              </div>
              <div className="event-card-btns">
                <Link to="/events/ad-mania" className="view-btn">VIEW DETAILS</Link>
                <a href="https://unstop.com/competitions/ad-mania-makersx-fest-rishihood-university-1666974" target="_blank" rel="noopener noreferrer" className="view-btn register-btn reg-red">REGISTER</a>
              </div>
            </div>
            <div className="status-badge closed">REGISTRATION OPEN</div>
          </div>

          {/* BRANDWARS */}
          <div className="event-card">
            <div className="event-card-img brandwars-bg">
              <img src="https://i.pinimg.com/736x/63/00/b3/6300b3b95db7dd71079b062674f54028.jpg" alt="BRANDWARS" />
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
              <div className="event-card-btns">
                <Link to="/events/brand-wars" className="view-btn">VIEW DETAILS</Link>
                <a href="https://unstop.com/competitions/brand-wars-rishihood-university-1666907" target="_blank" rel="noopener noreferrer" className="view-btn register-btn reg-amber">REGISTER</a>
              </div>
            </div>
            <div className="status-badge closed">REGISTRATION OPEN</div>
          </div>




          {/* MOKSHAPATRAM */}
          <div className="event-card">
            <div className="event-card-img moksha-bg">
              <img src="https://i.pinimg.com/736x/ec/9c/2b/ec9c2bb65f82c30c654f4b30ea5859bc.jpg" alt="MOKSHAPATRAM" />
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
              <div className="event-card-btns">
                <Link to="/events/mokshapatram" className="view-btn">VIEW DETAILS</Link>
                <a href="https://unstop.com/competitions/mokshapataram-makersx-fest-rishihood-university-1666986" target="_blank" rel="noopener noreferrer" className="view-btn register-btn reg-green">REGISTER</a>
              </div>
            </div>
            <div className="status-badge closed">REGISTRATION OPEN</div>
          </div>

          {/* FOUNDERS TALK */}
          <div className="event-card">
            <div className="event-card-img founders-talk-bg">
              <img src="https://i.pinimg.com/736x/ad/54/ef/ad54ef609a8498b4475905749abc386f.jpg" alt="FOUNDERS TALK" />
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
              <div className="event-card-btns">
                <Link to="/events/founders-talk" className="view-btn">VIEW DETAILS</Link>
                <a href="https://unstop.com/competitions/founders-talk-real-stories-raw-insights-real-impact-makersx-fest-rishihood-university-1666994" target="_blank" rel="noopener noreferrer" className="view-btn register-btn reg-orange">REGISTER</a>
              </div>
            </div>
            <div className="status-badge closed">REGISTRATION OPEN</div>
          </div>
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
