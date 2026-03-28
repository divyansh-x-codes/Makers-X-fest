import { Link } from 'react-router-dom';
import Reveal from '../../components/Reveal';

export default function AdMania() {
  return (
    <div id="page-ad-mania" className="page active" style={{ paddingTop: 0 }}>
      <div className="event-detail-hero" style={{'--ev-glow':'rgba(255,69,96,0.07)'}}>
        <span className="event-big-icon">📣</span>
        <h1 className="event-detail-title" style={{color:'var(--red)', textShadow:'0 0 20px rgba(255,69,96,0.4)'}}>AD MANIA</h1>
        <div className="event-detail-meta">
          <span className="ev-meta-chip" style={{borderColor:'var(--red)', color:'var(--red)', background:'rgba(255,69,96,0.08)'}}>Day 1</span>
          <span className="ev-meta-chip">🌐 Inter-College / Open</span>
          <span className="ev-meta-chip">👥 Teams of 2–4</span>
        </div>
      </div>
      <div className="event-body">
        <Reveal>
          <div className="event-section-h" style={{color:'var(--red)'}}>OVERVIEW</div>
          <p>Ad Mania is where marketing strategy meets creative execution. Teams receive a real brand brief with a challenge, a budget, and a target audience. Their mission: develop a complete, campaign-ready advertising strategy that cuts through the noise and actually moves the needle.</p>
          <p>From consumer insight to campaign concept to media plan — every element is judged. The most creatively brave and strategically sound campaign wins.</p>
        </Reveal>
        <Reveal>
          <div className="event-section-h" style={{color:'var(--red)'}}>ROUNDS</div>
          <div className="phase-card" style={{borderColor:'rgba(255,69,96,0.15)'}}>
            <div className="phase-num" style={{background:'var(--red)'}}>ROUND 01</div>
            <div className="phase-title">Brief Breakdown</div>
            <p>Teams receive the brand brief and have a set preparation window to develop their strategy, big idea, creative concepts, and media plan.</p>
          </div>
          <div className="phase-card" style={{borderColor:'rgba(255,69,96,0.15)'}}>
            <div className="phase-num" style={{background:'var(--red)'}}>ROUND 02</div>
            <div className="phase-title">Campaign Pitch</div>
            <p>Teams pitch their complete campaign — insight, idea, execution, and impact metrics — to a panel of marketing professionals. Judged on insight quality, creative boldness, and strategic rigor.</p>
          </div>
        </Reveal>
        <Reveal style={{textAlign:'center'}}>
          <Link className="event-register-btn" to="/register" style={{background:'var(--red)', boxShadow:'0 0 20px rgba(255,69,96,0.4)'}}>Register for Ad Mania →</Link>
        </Reveal>
      </div>
    </div>
  );
}
