
import { useEffect, useState } from 'react';
import axios from 'axios';

interface DiscordStatus {
  avatar: string;
  status: 'online' | 'idle' | 'dnd' | 'offline';
}

const SocialCard = () => {
  const [discordStatus, setDiscordStatus] = useState<DiscordStatus | null>(null);
  const discordId = "524229083014365194";
  
  useEffect(() => {
    const fetchDiscordStatus = async () => {
      try {
        // This endpoint is a placeholder as the real Discord API requires authentication
        // In production, you'd need a backend service to fetch this data
        const response = await axios.get(`https://api.lanyard.rest/v1/users/${discordId}`);
        
        if (response.data?.data) {
          setDiscordStatus({
            avatar: `https://cdn.discordapp.com/avatars/${discordId}/${response.data.data.discord_user.avatar}.png?size=128`,
            status: response.data.data.discord_status
          });
        }
      } catch (error) {
        console.error('Failed to fetch Discord status:', error);
        // Fallback avatar if API fetch fails
        setDiscordStatus({
          avatar: `https://cdn.discordapp.com/embed/avatars/0.png`,
          status: 'offline'
        });
      }
    };

    fetchDiscordStatus();
    // Refresh status every minute
    const interval = setInterval(fetchDiscordStatus, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'idle': return 'bg-yellow-500';
      case 'dnd': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="social" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Connect With Me</h2>
        
        <div className="flex justify-center">
          <div className="social-container bg-[#18181b] flex flex-col md:flex-row max-w-4xl rounded-lg overflow-hidden shadow-2xl animate-fade-in">
            <div className="p-6 md:p-12 flex items-center justify-center">
              <div className="relative">
                {discordStatus && (
                  <>
                    <div 
                      id="avatar"
                      className="w-36 h-36 rounded-full bg-cover bg-center border-2 border-gray-700"
                      style={{ backgroundImage: `url(${discordStatus.avatar})` }}
                    />
                    <div 
                      className={`absolute bottom-2 right-2 w-5 h-5 rounded-full border-2 border-[#18181b] ${getStatusColor(discordStatus.status)}`}
                      title={discordStatus.status}
                    />
                  </>
                )}
              </div>
            </div>
            
            <div className="social-sep hidden md:block" />
            
            <div id="social-center" className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="social-item flex items-center">
                <img 
                  className="social-logo w-6 h-6 mr-3"
                  src="https://cdn-icons-png.flaticon.com/512/733/733579.png" 
                  alt="Twitter"
                />
                <a 
                  href="https://twitter.com/Luciousss01" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link text-white hover:animate-rgbthing transition-colors"
                >
                  @Luciousss01
                </a>
              </div>
              
              <div className="social-item flex items-center">
                <img 
                  className="social-logo w-6 h-6 mr-3"
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" 
                  alt="YouTube"
                />
                <a 
                  href="https://www.youtube.com/channel/UCfXG6v_2FtasXlGk_FftjkQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link text-white hover:animate-rgbthing transition-colors"
                >
                  Lucious
                </a>
              </div>
              
              <div className="social-item flex items-center">
                <img 
                  className="social-logo w-6 h-6 mr-3"
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968819.png" 
                  alt="Twitch"
                />
                <a 
                  href="https://www.twitch.tv/lucy_sweets" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link text-white hover:animate-rgbthing transition-colors"
                >
                  lucy_sweets
                </a>
              </div>
              
              <div className="social-item flex items-center">
                <img 
                  className="social-logo w-6 h-6 mr-3"
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png" 
                  alt="Discord"
                />
                <a 
                  href="https://discord.com/users/524229083014365194" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link text-white hover:animate-rgbthing transition-colors"
                >
                  Luciousdev
                </a>
              </div>
              
              <div className="social-item flex items-center">
                <img 
                  className="social-logo w-6 h-6 mr-3"
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png" 
                  alt="Discord"
                />
                <a 
                  href="https://discord.gg/ejGX2u36aW" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link text-white hover:animate-rgbthing transition-colors"
                >
                  Discord Server
                </a>
              </div>
              
              <div className="social-item flex items-center">
                <img 
                  className="social-logo w-6 h-6 mr-3"
                  src="https://cdn-icons-png.flaticon.com/512/3670/3670382.png" 
                  alt="Steam"
                />
                <a 
                  href="https://steamcommunity.com/id/lucious01/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link text-white hover:animate-rgbthing transition-colors"
                >
                  Steam Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialCard;
