import React from 'react';

export default function About({ info }) {
  const about = info?.aboutUs || 'We believe every child is gifted. Our school provides a safe, joyful, and inspiring environment where curiosity leads to success.';
  const cards = [
    { icon:'📚', title:'Academic Excellence', desc:'CBSE curriculum with focus on conceptual learning, critical thinking and strong fundamentals.', color:'#2196F3' },
    { icon:'🎨', title:'Arts & Activities', desc:'Music, dance, painting, drama and sports — we celebrate every talent.', color:'#43A047' },
    { icon:'💻', title:'Smart Classrooms', desc:'Modern digital classrooms, computer labs and science labs for tomorrow\'s world.', color:'#7C4DFF' },
    { icon:'❤️', title:'Safe & Inclusive', desc:'A bully-free, inclusive environment where every child is valued and supported.', color:'#FF6B6B' },
  ];
  return (
    <section id="about" style={{ padding:'4rem 2rem', maxWidth:1100, margin:'0 auto' }}>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'3rem', alignItems:'center' }}>
        <div style={{ background:'linear-gradient(135deg,#E3F2FD,#BBDEFB)', borderRadius:20,
          padding:'2.5rem', textAlign:'center', position:'relative' }}>
          <div style={{ position:'absolute', top:14, right:14, background:'#FFD600',
            borderRadius:'50%', width:48, height:48, display:'flex', alignItems:'center',
            justifyContent:'center', fontSize:22 }}>🏆</div>
          <div style={{ fontSize:80 }}>🏫</div>
          <div style={{ fontFamily:"'Baloo 2',cursive", fontWeight:800, color:'#2196F3', fontSize:'1.05rem', marginTop:8 }}>
            {info?.schoolName || 'Sunshine ABC Model School'}
          </div>
          <div style={{ fontSize:'.8rem', color:'#666', marginTop:4 }}>Hyderabad, Telangana</div>
        </div>
        <div>
          <div style={{ display:'inline-flex', alignItems:'center', gap:6, background:'#FFD600',
            color:'#1A1A2E', fontWeight:800, fontSize:'.72rem', padding:'4px 14px',
            borderRadius:20, marginBottom:'.8rem', letterSpacing:'.5px', textTransform:'uppercase' }}>
            ⭐ About Us
          </div>
          <h2 style={{ fontFamily:"'Baloo 2',cursive", fontSize:'1.9rem', fontWeight:800, color:'#1A1A2E', marginBottom:'.5rem' }}>
            A School That Feels Like Home
          </h2>
          <p style={{ color:'#666', fontSize:'.92rem', lineHeight:1.7, marginBottom:'1.5rem' }}>{about}</p>
          <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
            {cards.map((c,i) => (
              <div key={i} style={{ background:'#fff', borderRadius:14, padding:'1rem 1.2rem',
                borderLeft:`5px solid ${c.color}`, boxShadow:'0 2px 10px rgba(0,0,0,.06)' }}>
                <h4 style={{ fontWeight:800, fontSize:'.92rem', marginBottom:3, color:'#1A1A2E' }}>{c.icon} {c.title}</h4>
                <p style={{ fontSize:'.83rem', color:'#666', lineHeight:1.5 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
