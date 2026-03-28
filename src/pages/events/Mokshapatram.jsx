import { Link } from 'react-router-dom';
import Reveal from '../../components/Reveal';

export default function Mokshapatram() {
  return (
    <div id="page-mokshapatram" className="page active" style={{ paddingTop: 0 }}>
      {/* Event Hero */}
      <div className="event-detail-hero" style={{'--ev-glow':'rgba(57,255,20,0.08)'}}>
        <span className="event-big-icon">🎲</span>
        <h1 className="event-detail-title" style={{color:'var(--green)', textShadow:'0 0 15px rgba(57,255,20,0.4)'}}>MOKSHAPATRAM</h1>
        <div className="event-detail-meta">
      
          <span className="ev-meta-chip">💡 No Prior Knowledge Required</span>
        </div>
      </div>

      <div className="event-body">
        <Reveal>
          <div className="event-section-h" style={{color:'var(--green)'}}>OVERVIEW</div>
          <p>Mokshapatram transforms the classic game of Snakes and Ladders into a life-sized, high-energy business learning experience. Set on a human-sized board in an open outdoor space, participants become the game pieces—rolling a giant dice and physically moving across the board as they navigate real-world entrepreneurial challenges.</p>
          <p>Each step on the board presents a scenario—from startup decisions and financial questions to ethical dilemmas and market strategy. Land on a ladder and demonstrate sharp thinking to climb ahead; land on a snake and a wrong decision could send you sliding back. The game blends competition with learning, making business concepts interactive, engaging, and unforgettable.</p>
        </Reveal>
        
        <Reveal>
          <div className="event-section-h" style={{color:'var(--green)'}}>KEY HIGHLIGHTS</div>
          <div className="phase-card" style={{borderLeft:'4px solid var(--green)'}}>
            <div className="phase-title">Life-Size Simulation</div>
            <p>Step onto a massive physical board where every move represents a strategic business choice. You are the piece. Your decisions are the dice.</p>
          </div>
          <div className="phase-card" style={{borderLeft:'4px solid var(--green)'}}>
            <div className="phase-title">Entrepreneurial Scenarios</div>
            <p>From funding rounds (Ladders) to market crashes (Snakes), experience the volatility of the startup world in a fun, competitive environment.</p>
          </div>
          <div className="phase-card" style={{borderLeft:'4px solid var(--green)'}}>
            <div className="phase-title">The Spectacle</div>
            <p>A live centerpiece event that brings everyone together. Whether you're playing or watching, the energy is infectious.</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="event-section-h" style={{color:'var(--green)'}}>TAKEAWAYS</div>
          <ul style={{listStyleType:'square', paddingLeft:'20px', color:'rgba(255,255,255,0.7)'}}>
            <li>Quick strategic decision-making under pressure.</li>
            <li>Practical understanding of risk vs. reward.</li>
            <li>Enhanced clarity on business ethics and market dynamics.</li>
            <li>Incredible networking with fellow "players" and spectators.</li>
          </ul>
        </Reveal>

        <Reveal style={{textAlign:'center', marginTop:'4rem'}}>
          <Link className="event-register-btn" to="/register" style={{background:'var(--green)', color:'#000', boxShadow:'0 0 20px rgba(57,255,20,0.3)'}}>Register Now — Make Your Move →</Link>
        </Reveal>
      </div>
    </div>
  );
}
