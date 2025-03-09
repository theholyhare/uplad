import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import styled from "@emotion/styled";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);

  useEffect(() => {
    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#8B5E3B",
      progressColor: "#6D4C41",
      barWidth: 3,
    });

    wavesurfer.current.load("/music/sample-track.mp3");
  }, []);

  const togglePlay = () => {
    wavesurfer.current.playPause();
    setIsPlaying(!isPlaying);
  };

  return (
    <PlayerContainer>
      <Waveform ref={waveformRef} />
      <PlayButton onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</PlayButton>
    </PlayerContainer>
  );
}

const PlayerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;

const Waveform = styled.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 10px;
`;

const PlayButton = styled.button`
  background: #8B5E3B;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    opacity: 0.8;
  }
`;
