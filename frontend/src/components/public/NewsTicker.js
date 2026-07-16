import React from 'react';

export default function NewsTicker({ news }) {
  const items = news.length > 0
    ? news.slice(0,8).map(n => n.title)
    : ['Welcome to Sunshine ABC Model School!', 'Admissions Open 2025–26', 'Contact us: +916300208950'];

  const repeated = [...items, ...items];
  return (
    <div style={{ background:'#FF6B6B', padding:'10px 0', overflow:'hidden', whiteSpace:'nowrap' }}>
      <div style={{ display:'inline-block', animation:'ticker 30s linear infinite' }}>
        {repeated.map((t,i) => (
          <span key={i} style={{ color:'#fff', fontWeight:700, fontSize:'.88rem', padding:'0 2.5rem' }}>
            ★&nbsp;&nbsp;{t}
          </span>
        ))}
      </div>
      <style>{`@keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }`}</style>
    </div>
  );
}
