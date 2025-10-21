'use client';

import { DonationSection } from './components/DonationSection';
import { FaqSection } from './components/FaqSection.tsx';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ValuesSection } from './components/ValuesSection';
import { WayForPayStats } from './components/WayForPayStats';

export default function Home() {

  return (
    <>
      <Header />
      <main className="min-h-screen">
      <HeroSection />
      <GallerySection />
      <WayForPayStats />
      <DonationSection />
      <ValuesSection />
      <FaqSection />
      </main>
      <Footer />
   </>
  );
}
