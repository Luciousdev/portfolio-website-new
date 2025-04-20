
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import StreamSection from '@/components/StreamSection';
import SocialCard from '@/components/SocialCard';
import GamingRanksSection from '@/components/GamingRanksSection';

const Index = () => {
  const [soundEnabled, setSoundEnabled] = useState(false);

  const toggleSound = () => {
    setSoundEnabled(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden dark:bg-background">
      <Navbar soundEnabled={soundEnabled} toggleSound={toggleSound} />
      <HeroSection soundEnabled={soundEnabled} />
      <AboutSection />
      <ProjectsSection />
      <GamingRanksSection />
      <StreamSection />
      <SocialCard />
      
      <footer className="bg-secondary py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80">Made with love by Lucy, <a href='https://github.com/Luciousdev/portfolio-website-new' target='_blank'>source code</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
