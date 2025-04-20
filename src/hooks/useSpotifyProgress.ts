import { useState, useEffect } from 'react';
import { msToMinSeconds } from '../utils/timeFormat.ts';

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

export const useSpotifyProgress = (spotify: SpotifyData | undefined) => {
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');

  useEffect(() => {
    if (!spotify) return;

    const updateProgress = () => {
      const now = new Date().getTime();
      const songLength = spotify.timestamps.end - spotify.timestamps.start;
      const timeElapsed = now - spotify.timestamps.start;
      const progressPercentage = Math.min((timeElapsed / songLength) * 100, 100);

      setProgress(progressPercentage);
      setCurrentTime(msToMinSeconds(timeElapsed));
      setDuration(msToMinSeconds(songLength));
    };

    updateProgress();
    const interval = setInterval(updateProgress, 1000);

    return () => clearInterval(interval);
  }, [spotify]);

  return { progress, currentTime, duration };
};