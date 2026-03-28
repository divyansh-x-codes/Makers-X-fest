import { Link } from 'react-router-dom';
import Reveal from '../../components/Reveal';

export default function CaseHunt() {
  return (
    <div id="page-casehunt" className="page active" style={{ paddingTop: 0 }}>
      <div className="event-detail-hero" style={{'--ev-glow':'rgba(0,255,209,0.07)'}}>
        <span className="event-big-icon">🧩</span>
        <h1 className="event-detail-title" style={{color:'var(--teal)', textShadow:'var(--glow-teal)'}}>CASE HUNT</h1>
        <div className="event-detail-meta">
          <span className="ev-meta-chip" style={{borderColor:'var(--teal)', color:'var(--teal)', background:'rgba(0,255,209,0.08)'}}></span>
        
          <span className="ev-meta-chip">👥 Teams of 3–4</span>
        </div>
      </div>
      <div className="event-body">
        <Reveal>
          <div className="event-section-h" style={{color:'var(--teal)'}}>OVERVIEW</div>
          <p>Case Hunt is the ultimate test of business acumen, analytical thinking, and storytelling under pressure. Teams receive a real-world business case — drawn from industries like FMCG, tech, finance, or social enterprise — and must decode the problem, build a strategy, and present actionable recommendations to a panel of judges, all within a tight time window.</p>
          <p>It's not just about getting the right answer. It's about clarity of thought, depth of analysis, and the confidence to defend your strategy when the judges push back hard.</p>
        </Reveal>
        <Reveal>
          <div className="event-section-h" style={{color:'var(--teal)'}}>ROUNDS</div>
          <div className="phase-card" style={{borderColor:'rgba(0,255,209,0.15)'}}>
            <div className="phase-num" style={{background:'var(--teal)'}}>ROUND 01</div>
            <div className="phase-title">Case Analysis</div>
            <p>Teams receive the case document and have a fixed preparation window to analyze the problem, develop their framework, and build their recommendation deck. No internet access — pure thinking only.</p>
          </div>
          <div className="phase-card" style={{borderColor:'rgba(0,255,209,0.15)'}}>
            <div className="phase-num" style={{background:'var(--teal)'}}>ROUND 02</div>
            <div className="phase-title">Presentation & Q&A</div>
            <p>Each team presents their findings in 8–10 minutes followed by a live Q&A grilling. Judges evaluate structure, insight quality, financial logic, and delivery under pressure.</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="event-section-h" style={{color:'var(--teal)'}}>PARTICIPATION</div>
          <p><strong style={{color:'var(--teal)'}}>Team Size:</strong> 3–4 members &nbsp;|&nbsp; <strong style={{color:'var(--teal)'}}>Audience:</strong> Inter-college / Open</p>
        </Reveal>
        <Reveal style={{textAlign:'center'}}>
          <Link className="event-register-btn" to="/register" style={{background:'var(--teal)', boxShadow:'var(--glow-teal)'}}>Register for Case Hunt →</Link>
        </Reveal>
      </div>
    </div>
  );
}
