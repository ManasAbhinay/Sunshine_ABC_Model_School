import React from 'react';
import Navbar from '../../components/public/Navbar';
import Hero from '../../components/public/Hero';
import NewsTicker from '../../components/public/NewsTicker';
import About from '../../components/public/About';
import NewsSection from '../../components/public/NewsSection';
import Gallery from '../../components/public/Gallery';
import Contact from '../../components/public/Contact';
import Footer from '../../components/public/Footer';
import { schoolInfo, news, gallery } from '../../data/schoolData';

export default function HomePage() {
  return (
    <>
      <Navbar schoolName={schoolInfo.schoolName} />
      <NewsTicker news={news} />
      <Hero info={schoolInfo} />
      <div style={{ height:6, background:'linear-gradient(90deg,#2196F3,#FFD600,#FF6B6B,#43A047,#7C4DFF)' }} />
      <About info={schoolInfo} />
      <div style={{ height:6, background:'linear-gradient(90deg,#7C4DFF,#43A047,#FF6B6B,#FFD600,#2196F3)' }} />
      <NewsSection news={news} />
      <div style={{ height:6, background:'linear-gradient(90deg,#2196F3,#FFD600,#FF6B6B,#43A047,#7C4DFF)' }} />
      <Gallery items={gallery} />
      <div style={{ height:6, background:'linear-gradient(90deg,#7C4DFF,#43A047,#FF6B6B,#FFD600,#2196F3)' }} />
      <Contact info={schoolInfo} />
      <Footer info={schoolInfo} />
    </>
  );
}
