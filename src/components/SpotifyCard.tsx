import { Progress } from "@/components/ui/progress";
import { Music } from "lucide-react";
import { useSpotifyProgress } from "../hooks/useSpotifyProgress";

interface SpotifyData {
    timestamps: {
        start: number;
        end: number;
    };
    album: string;
    album_art_url: string;
    artist: string;
    song: string;
}

interface SpotifyCardProps {
    spotify: SpotifyData | undefined;
}

const SpotifyCard = ({ spotify }: SpotifyCardProps) => {
    const { progress, currentTime, duration } = useSpotifyProgress(spotify);

    if (!spotify) return null;

    return (
        <div className="bg-[#18181b] p-6 rounded-lg shadow-2xl max-w-sm w-full">
            <div className="flex items-start space-x-4">
                <img
                src={spotify.album_art_url}
                alt="Album Art"
                className="w-16 h-16 rounded-md"
                />
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold truncate">{spotify.song}</h3>
          <p className="text-gray-400 text-sm truncate">by {spotify.artist}</p>
          <p className="text-gray-500 text-xs truncate">{spotify.album}</p>
        </div>
        <Music className="text-[#1DB954] w-6 h-6" />
      </div>
      
      <div className="mt-4 space-y-2">
        <Progress value={progress} className="h-1" />
        <div className="flex justify-between text-xs text-gray-400">
          <span>{currentTime}</span>
          <span>{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default SpotifyCard;