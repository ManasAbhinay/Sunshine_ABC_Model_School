import React from 'react';

export default function Footer({ info }) {
  const name = info?.schoolName || 'Sunshine ABC Model School';
  const year = info?.establishedYear || '2005';
  return (
    <footer style={{ background:'#1A1A2E', color:'#fff', padding:'2.5rem 2rem', textAlign:'center' }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:10, marginBottom:'.8rem' }}>
        <span style={{ fontSize:28 }}>🌟</span>
        <span style={{ fontFamily:"'Baloo 2',cursive", fontSize:'1.2rem', fontWeight:800 }}>{name}</span>
      </div>
      <p style={{ fontSize:'.82rem', color:'rgba(255,255,255,.55)', lineHeight:1.7 }}>
        Hyderabad, Telangana · Nurturing Young Minds Since {year}
      </p>
      <div style={{ display:'flex', gap:'1.5rem', justifyContent:'center', marginTop:'1rem', flexWrap:'wrap' }}>
        {['About','News','Gallery','Contact'].map(l => (
          <a key={l} href={`#${l.toLowerCase()}`}
            style={{ fontSize:'.82rem', color:'rgba(255,255,255,.6)', fontWeight:700 }}>{l}</a>
        ))}
      </div>
      <p style={{ marginTop:'1.2rem', fontSize:'.75rem', color:'rgba(255,255,255,.35)' }}>
        © {new Date().getFullYear()} {name}. All rights reserved.
      </p>
    </footer>
  );
}
