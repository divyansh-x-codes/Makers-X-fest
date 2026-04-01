import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

export default function Events() {
  return (
    <div id="page-events" className="page active scanlines" style={{ paddingTop: 0 }}>
      <div className="page-hero">
        <h1>ALL <span style={{ color: 'var(--amber)' }}>EVENTS</span></h1>
        <p>Eight high-stakes competitions. Two epic days.</p>
      </div>
      <div className="section grid-sparkle-bg">
        <Reveal className="events-grid">
          {/* IGNITE */}
          <div className="event-card">
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
    </div>
  );
}
