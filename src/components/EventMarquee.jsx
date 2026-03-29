import React from 'react';

export default function EventMarquee() {
  const events = [
    " IGNITE", " CASE HUNT", " FOUNDERS' RUNWAY", 
    " AD MANIA", " BRANDWARS", " THE LISTING",
    " MOKSHAPATRAM", " FOUNDERS TALK"
  ];
  // Duplicate for seamless infinite scroll
  const items = [...events, ...events, ...events, ...events, ...events, ...events];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {items.map((event, i) => (
          <React.Fragment key={i}>
            <span className="marquee-item">{event}</span>
            <span className="marquee-dot">•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
