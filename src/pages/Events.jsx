import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

export default function Events() {
  return (
    <div id="page-events" className="page active scanlines" style={{ paddingTop: 0 }}>
      <div className="page-hero">
        <h1>ALL <span style={{color:'var(--amber)'}}>EVENTS</span></h1>
        <p>Eight high-stakes competitions. Two epic days.</p>
      </div>
      <div className="section grid-sparkle-bg">
        <Reveal className="events-grid">
          {/* IGNITE */}
          <Link to="/events/ignite" className="event-card">
            <div className="event-card-img ignite-bg">
              <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&auto=format&fit=crop" alt="IGNITE" />
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
              <img src="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=800&auto=format&fit=crop" alt="CASE HUNT" />
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
                <div className="meta-row prize"><span className="icon">🏆</span>Craft campaigns that cut through noise. Creative strategy, consumer insight, and big ideas</div>
              </div>
              <button className="view-btn">VIEW DETAILS</button>
            </div>
            <div className="status-badge closed">REGISTRATION OPEN</div>
          </Link>

          {/* BRANDWARS */}
          <Link to="/events/brand-wars" className="event-card">
            <div className="event-card-img brandwars-bg">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop" alt="BRANDWARS" />
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
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" alt="THE FORGE" />
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
    </div>
  );
}
