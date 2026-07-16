import React from 'react';

const CATEGORY_COLORS = {
  ACHIEVEMENT: '#2196F3', EVENT: '#43A047', ADMISSION: '#FF6B6B',
  GENERAL: '#7C4DFF', HOLIDAY: '#FF9800'
};

export default function NewsSection({ news }) {
  const fmt = (d) => new Date(d).toLocaleDateString('en-IN', { day:'numeric', month:'long', year:'numeric' });

  return (
    <div id="news" style={{ background:'linear-gradient(135deg,#FFF8E1,#FFF3CD)', padding:'4rem 2rem' }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <div style={{ display:'inline-flex', alignItems:'center', gap:6, background:'#FFD600',
          color:'#1A1A2E', fontWeight:800, fontSize:'.72rem', padding:'4px 14px',
          borderRadius:20, marginBottom:'.8rem', textTransform:'uppercase' }}>
          📢 Latest Updates
        </div>
        <h2 style={{ fontFamily:"'Baloo 2',cursive", fontSize:'1.9rem', fontWeight:800, color:'#1A1A2E', marginBottom:'.4rem' }}>
          News & Announcements
        </h2>
        <p style={{ color:'#666', fontSize:'.92rem', marginBottom:'2rem' }}>Stay up to date with everything happening at our school.</p>
        {news.length === 0 ? (
          <p style={{ color:'#999', textAlign:'center', padding:'2rem' }}>No announcements yet. Check back soon!</p>
        ) : (
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(290px,1fr))', gap:20 }}>
            {news.map(n => (
              <div key={n.id} style={{ background:'#fff', borderRadius:18, overflow:'hidden',
                boxShadow:'0 4px 16px rgba(0,0,0,.07)', transition:'.25s transform' }}
                onMouseOver={e=>e.currentTarget.style.transform='translateY(-4px)'}
                onMouseOut={e=>e.currentTarget.style.transform='none'}>
                <div style={{ background: CATEGORY_COLORS[n.category] || '#2196F3',
                  padding:'.9rem 1.2rem', color:'#fff', fontWeight:800, fontSize:'.78rem', letterSpacing:'.4px' }}>
                  {n.category}
                </div>
                <div style={{ padding:'1rem 1.2rem 1.4rem' }}>
                  <div style={{ fontSize:'.75rem', color:'#999', fontWeight:700, marginBottom:'.3rem' }}>{fmt(n.createdAt)}</div>
                  <h4 style={{ fontFamily:"'Baloo 2',cursive", fontWeight:700, fontSize:'1.02rem',
                    color:'#1A1A2E', marginBottom:'.4rem', lineHeight:1.3 }}>{n.title}</h4>
                  <p style={{ fontSize:'.84rem', color:'#666', lineHeight:1.55 }}>{n.content}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
