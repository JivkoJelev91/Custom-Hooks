import { useState, useEffect, useCallback } from 'react';

const useAudio = (url, isSoundOn) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const playAudio = useCallback(() => setPlaying(!playing), [playing]);

  useEffect(() => {
    if (!url || !isSoundOn) return;
    if (playing) {
      audio.play();
      setPlaying(false);
      audio.currentTime = 0;
    }
  }, [playing]);

  return playAudio;
};

export default useAudio;
