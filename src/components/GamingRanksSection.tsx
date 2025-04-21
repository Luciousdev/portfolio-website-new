import { useEffect, useState } from 'react';
import { Shield, Award, Medal } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface BeatSaberStats {
  name: string;
  rank: number;
  countryRank: number;
  country: string;
  avatar: string;
  pp: number;
}

interface OWRank {
  division: string;
  tier: number;
  role_icon: string;
  rank_icon: string;
  tier_icon: string;
}

interface OWStats {
  username: string;
  avatar: string;
  namecard: string;
  title: string;
  endorsement: {
    level: number;
    frame: string;
  };
  competitive: {
    pc: {
      season: number;
      tank: OWRank;
      damage: OWRank;
      support: OWRank;
      open: OWRank;
    };
    console: null;
  };
  last_updated_at: number;
}


const GamingRanksSection = () => {
  const [beatSaberStats, setBeatSaberStats] = useState<BeatSaberStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [owStats, setOwStats] = useState<OWStats | null>(null);
  const [owStatsAlt, setOwStatsAlt] = useState<OWStats | null>(null);

  useEffect(() => {
    const fetchBeatSaberStats = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://corsproxy.io/?https://api.beatleader.xyz/player/lucy_sweets?stats=true&keepOriginalId=false&leaderboardContext=510');
        
        if (!response.ok) {
          throw new Error('Failed to fetch Beat Saber stats');
        }
        
        const data = await response.json();
        setBeatSaberStats({
          name: data.name,
          rank: data.rank,
          countryRank: data.countryRank,
          country: data.country,
          avatar: data.avatar,
          pp: Math.round(data.pp * 100) / 100
        });
      } catch (err) {
        console.error('Error fetching Beat Saber stats:', err);
        setError('Failed to load Beat Saber stats. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    const fetchOWStats = async () => {
      try {
        const res = await fetch('https://overfast-api.tekrop.fr/players/%C5%81%C3%BC%C3%A7%C3%BD%C3%9Fw%C3%AA%C3%AB%C5%A3%C5%A1-2419/summary');
        if (!res.ok) throw new Error('Failed to fetch Overwatch stats');
        const data = await res.json();
        setOwStats(data);
      } catch (err) {
        console.error('Overwatch stats fetch error:', err);
      }
    };

    const fetchOWStatsAlt = async () => {
      try {
        const res = await fetch('https://overfast-api.tekrop.fr/players/Karmg-2779/summary');
        if (!res.ok) throw new Error('Failed to fetch Overwatch stats');
        const data = await res.json();
        setOwStatsAlt(data);
      } catch (err) {
        console.error('Overwatch stats fetch error:', err);
      }
    };

    fetchOWStats();
    fetchOWStatsAlt();
    fetchBeatSaberStats();
  }, []);

  return (
    <section id="gaming-ranks" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Gaming Ranks
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 bg-gradient-to-br from-background/70 to-muted/30 border border-primary/20 backdrop-blur-sm">
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-75 blur"></div>
                <Avatar className="h-20 w-20 border-2 border-primary/50 relative">
                  {isLoading ? (
                    <AvatarFallback className="bg-muted text-muted-foreground">
                      BS
                    </AvatarFallback>
                  ) : beatSaberStats?.avatar ? (
                    <AvatarImage src={beatSaberStats.avatar} alt="Beat Saber Profile" />
                  ) : (
                    <AvatarFallback className="bg-muted text-muted-foreground">
                      BS
                    </AvatarFallback>
                  )}
                </Avatar>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Beat Saber</h3>
              
              {isLoading ? (
                <div className="w-full flex justify-center items-center h-32">
                  <div className="animate-pulse flex space-x-4">
                    <div className="flex-1 space-y-4 py-1">
                      <div className="h-4 bg-primary/20 rounded w-3/4 mx-auto"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-primary/20 rounded"></div>
                        <div className="h-4 bg-primary/20 rounded w-5/6 mx-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : error ? (
                <div className="text-destructive text-center">{error}</div>
              ) : beatSaberStats && (
                <div className="flex flex-col gap-4 w-full">
                  <div className="text-center mb-3">
                    <span className="text-muted-foreground">Playing as </span>
                    <span className="font-semibold text-white">{beatSaberStats.name}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center p-3 bg-background/40 rounded-lg border border-primary/10">
                      <Shield className="h-6 w-6 text-primary mb-2" />
                      <span className="text-sm text-muted-foreground">Global Rank</span>
                      <span className="text-2xl font-bold">{beatSaberStats.rank.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex flex-col items-center p-3 bg-background/40 rounded-lg border border-primary/10">
                      <Award className="h-6 w-6 text-primary mb-2" />
                      <span className="text-sm text-muted-foreground">
                        {beatSaberStats.country} Rank
                      </span>
                      <span className="text-2xl font-bold">{beatSaberStats.countryRank}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <Medal className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Performance Points:</span>
                    <span className="font-bold">{beatSaberStats.pp.toLocaleString()}</span>
                  </div>
                  
                  <Button variant="outline" className="mt-2 hover:bg-primary/20" asChild>
                    <a href="https://beatleader.xyz/u/lucy_sweets" target="_blank" rel="noopener noreferrer">
                      View Profile
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-background/70 to-muted/30 border border-accent/20 backdrop-blur-sm">
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-full opacity-75 blur"></div>
                <Avatar className="h-20 w-20 border-2 border-accent/50 relative">
                  <AvatarFallback className="bg-muted text-muted-foreground">OW</AvatarFallback>
                  <AvatarImage src={owStats?.avatar ?? "/owicon.png"} alt="Overwatch Avatar" />
                </Avatar>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Overwatch</h3>
              {owStats?.title && (
                <p className="text-sm text-muted-foreground -mt-1 mb-2">{owStats.title}</p>
              )}
              
              {owStats ? (
              <div className="flex flex-col gap-4 w-full">
                <div className="text-center mb-3">
                  <span className="text-muted-foreground">Playing as </span>
                  <span className="font-semibold text-white">Łüçýßwêëţš</span>
                  <p className="text-sm text-muted-foreground mt-1">(Peak Ranks)</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center p-3 bg-background/40 rounded-lg border border-accent/10">
                    <div className="h-10 w-10 mb-2 flex items-center justify-center">
                      <img 
                        src={owStats.competitive.pc.tank.role_icon} 
                        alt="Tank Role"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm text-muted-foreground">Tank</span>
                    <span className="text-xl font-bold">Platinum 5</span>
                    <span className="text-sm text-muted-foreground">Current rank: {owStats.competitive.pc.tank.division} {owStats.competitive.pc.tank.tier}</span>
                  </div>
                  
                  <div className="flex flex-col items-center p-3 bg-background/40 rounded-lg border border-accent/10">
                    <div className="h-10 w-10 mb-2 flex items-center justify-center">
                      <img 
                        src={owStats.competitive.pc.damage.role_icon} 
                        alt="DPS Role"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm text-muted-foreground">Damage</span>
                    <span className="text-xl font-bold">Gold 4</span>
                    <span className="text-sm text-muted-foreground">Current rank: {owStats.competitive.pc.damage.division} {owStats.competitive.pc.damage.tier}</span>
                  </div>
                  
                  <div className="flex flex-col items-center p-3 bg-background/40 rounded-lg border border-accent/10">
                    <div className="h-10 w-10 mb-2 flex items-center justify-center">
                      <img 
                        src={owStats.competitive.pc.support.role_icon}
                        alt="Support Role"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm text-muted-foreground">Support</span>
                    <span className="text-xl font-bold">Diamond 5</span>
                    <span className="text-sm text-muted-foreground">Current rank: {owStats.competitive.pc.support.division} {owStats.competitive.pc.support.tier}</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-background/40 rounded-lg border border-accent/10">
                    <div className="h-10 w-10 mb-2 flex items-center justify-center">
                      <img 
                        src={owStats.competitive.pc.open.role_icon}
                        alt="Support Role"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm text-muted-foreground">Open Queue</span>
                    <span className="text-xl font-bold">Diamond 4</span>
                    <span className="text-sm text-muted-foreground">Current rank: {owStatsAlt.competitive.pc.open.division} {owStatsAlt.competitive.pc.open.tier}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Shield className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">Main Heroes:</span>
                  <span className="font-bold">Junker Queen, Genji, Juno/Kiriko</span>
                </div>
              </div>
              ) : (
              <div className="text-sm text-muted-foreground mt-2">Loading Overwatch stats...</div>
            )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GamingRanksSection;
