import React, { useState } from 'react';

export default function Gallery({ items }) {
  const [filter, setFilter] = useState('ALL');
  const [lightbox, setLightbox] = useState(null);

  const filtered = items.filter(i => filter === 'ALL' || i.mediaType === filter);

  return (
    <section id="gallery" style={{ padding:'4rem 2rem', maxWidth:1100, margin:'0 auto' }}>
      <div style={{ display:'inline-flex', alignItems:'center', gap:6, background:'#FFD600',
        color:'#1A1A2E', fontWeight:800, fontSize:'.72rem', padding:'4px 14px',
        borderRadius:20, marginBottom:'.8rem', textTransform:'uppercase' }}>
        📸 Our School Life
      </div>
      <h2 style={{ fontFamily:"'Baloo 2',cursive", fontSize:'1.9rem', fontWeight:800, color:'#1A1A2E', marginBottom:'.4rem' }}>
        Photo & Video Gallery
      </h2>
      <p style={{ color:'#666', fontSize:'.92rem', marginBottom:'1.5rem' }}>Glimpses of wonderful moments at our school.</p>

      <div style={{ display:'flex', gap:10, marginBottom:'1.5rem' }}>
        {['ALL','PHOTO','VIDEO'].map(f => (
          <button key={f} onClick={() => setFilter(f)}
            style={{ padding:'8px 20px', borderRadius:20, border:'2px solid #2196F3',
              background: filter===f ? '#2196F3' : '#fff', color: filter===f ? '#fff' : '#2196F3',
              fontWeight:700, fontSize:'.82rem', cursor:'pointer', transition:'.2s' }}>
            {f === 'ALL' ? '🌐 All' : f === 'PHOTO' ? '📷 Photos' : '🎬 Videos'}
          </button>
        ))}
      </div>

      {items.length === 0 ? (
        <p style={{ color:'#999', textAlign:'center', padding:'3rem' }}>Gallery coming soon!</p>
      ) : (
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:14 }}>
          {filtered.map(item => (
            <div key={item.id} onClick={() => setLightbox(item)}
              style={{ borderRadius:16, overflow:'hidden', aspectRatio:'4/3', cursor:'pointer',
                position:'relative', background:'#E3F2FD', transition:'.25s transform' }}
              onMouseOver={e=>e.currentTarget.style.transform='scale(1.04)'}
              onMouseOut={e=>e.currentTarget.style.transform='none'}>
              {item.mediaType === 'PHOTO' ? (
                <img src={item.fileUrl} alt={item.title}
                  style={{ width:'100%', height:'100%', objectFit:'cover' }} />
              ) : (
                <div style={{ width:'100%', height:'100%', background:'linear-gradient(135deg,#1565C0,#1E88E5)',
                  display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:8 }}>
                  <div style={{ width:52, height:52, background:'rgba(255,255,255,.9)', borderRadius:'50%',
                    display:'flex', alignItems:'center', justifyContent:'center', fontSize:22 }}>▶</div>
                  <span style={{ color:'#fff', fontSize:'.8rem', fontWeight:700 }}>{item.title}</span>
                </div>
              )}
              <div style={{ position:'absolute', bottom:0, left:0, right:0,
                background:'rgba(0,0,0,.5)', color:'#fff', fontSize:'.75rem',
                fontWeight:700, padding:'8px 10px', opacity:0, transition:'.2s' }}
                className="gal-label">{item.title}</div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLightbox(null)}
          style={{ position:'fixed', inset:0, background:'rgba(0,0,0,.85)', zIndex:2000,
            display:'flex', alignItems:'center', justifyContent:'center', padding:'2rem' }}>
          <div onClick={e=>e.stopPropagation()} style={{ maxWidth:800, width:'100%' }}>
            {lightbox.mediaType === 'PHOTO' ? (
              <img src={lightbox.fileUrl} alt={lightbox.title}
                style={{ width:'100%', borderRadius:12, maxHeight:'80vh', objectFit:'contain' }} />
            ) : (
              <video src={lightbox.fileUrl} controls autoPlay
                style={{ width:'100%', borderRadius:12 }} />
            )}
            <p style={{ color:'#fff', textAlign:'center', marginTop:12, fontWeight:700 }}>{lightbox.title}</p>
            <button onClick={() => setLightbox(null)}
              style={{ display:'block', margin:'12px auto 0', background:'#fff', border:'none',
                borderRadius:20, padding:'8px 24px', fontWeight:800, cursor:'pointer' }}>Close ✕</button>
          </div>
        </div>
      )}
    </section>
  );
}
