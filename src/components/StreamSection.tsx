
import { Twitch } from 'lucide-react';

const StreamSection = () => {
  return (
    <section id="stream" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Watch My Stream</h2>
        
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="w-full lg:w-2/3 animate-fade-in">
            <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://player.twitch.tv/?channel=lucy_sweets&parent=localhost&parent=luciousdev.nl"
                height="100%"
                width="100%"
                allowFullScreen
                title="Twitch Stream"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          
          <div className="w-full lg:w-1/3 space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold text-white">lucy_sweets</h3>
            <p className="text-white/90">
              Join me on my Twitch channel at any time when I am livestreaming!
              I play a variaty of games, but currently mainly Overwatch 2 and Beat Saber. 
            </p>
            <p className="text-white/90">
              I don't have a set schedule, I try to stream whenever I have time and feel like it.
            </p>
            <a 
              href="https://www.twitch.tv/lucy_sweets" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center py-3 px-6 bg-[#9146FF] hover:bg-[#7d3be0] transition-colors rounded-md text-white font-semibold"
            >
              <Twitch size={20} className="mr-2" />
              Follow on Twitch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StreamSection;
