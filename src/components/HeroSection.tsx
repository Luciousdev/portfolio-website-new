
import { useRef, useEffect } from 'react';

interface HeroSectionProps {
  soundEnabled: boolean;
}

const HeroSection = ({ soundEnabled }: HeroSectionProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = !soundEnabled;
    }
  }, [soundEnabled]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source 
          src="/hero.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center animate-fade-in">
          <span className="text-primary">Luciousdev</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl text-center mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Software Engineer, Gamer, Manga Reader & Anime Enthusiast
        </p>
        <div className="flex space-x-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors"
          >
            About Me
          </button>
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-secondary text-white rounded-md hover:bg-secondary/80 transition-colors"
          >
            View Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
