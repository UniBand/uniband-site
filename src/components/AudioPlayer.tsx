import { UniBandAudioFiles } from "@/config";
import { MusicNote } from "@mui/icons-material";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

export interface AudioFile {
  name: string;
  path: string;
}

const audioFiles: AudioFile[] = Object.entries(UniBandAudioFiles).flatMap(
  ([name, paths]) => paths.map((path) => ({ name, path }))
);

const Container = styled.div`
  position: relative;
  text-align: center;
  width: max-content;
`;

interface PlayButtonProps {
  currentAudio: AudioFile | null;
  isFadingOut: boolean;
}

const PlayButton = styled.button<PlayButtonProps>`
  background-color: ${({ currentAudio, isFadingOut }) =>
    currentAudio && !isFadingOut
      ? "rgba(var(--dark-blue-rgb), 0.7)"
      : "var(--background)"};
  border-radius: 50%;
  border: 2px solid var(--dark-blue);
  color: ${({ currentAudio, isFadingOut }) =>
    currentAudio && !isFadingOut ? "var(--background)" : "var(--dark-blue)"};
  cursor: pointer;
  height: 4rem;
  padding: 0.5rem;
  transition: all 0.3s ease;
  width: 4rem;

  &:hover {
    background-color: var(--dark-blue);
    color: var(--background);
  }

  svg {
    font-size: 2rem;
  }
`;

const PlayIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

interface CurrentlyPlayingProps {
  currentAudio: AudioFile | null;
  isFadingOut: boolean;
}

const CurrentlyPlaying = styled.p<CurrentlyPlayingProps>`
  font-size: 1.5rem !important;
  font-style: italic;
  opacity: ${({ currentAudio, isFadingOut }) =>
    currentAudio && !isFadingOut ? "0.9" : "0"};
  position: absolute;
  right: calc(100% + 1rem);
  text-align: right;
  top: 50%;
  transform: translateY(-50%);
  transition: opacity 0.5s ease;
  width: max-content;
  max-width: 75vw;
`;

interface AudioPlayerProps {
  currentAudio: AudioFile | null;
  setCurrentAudio: (audio: AudioFile | null) => void;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  currentAudio,
  setCurrentAudio,
}) => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playRandomAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    const selectedAudio =
      audioFiles[Math.floor(Math.random() * audioFiles.length)];
    const audio = new Audio(selectedAudio.path);
    audioRef.current = audio;
    setCurrentAudio(selectedAudio);
    setIsFadingOut(false);
    audio.addEventListener("ended", () => setIsFadingOut(true));
    audio.play();
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: no ty
  useEffect(() => {
    if (isFadingOut) {
      const fadeOutTimeout = setTimeout(() => {
        setCurrentAudio(null);
        setIsFadingOut(false);
      }, 500);
      return () => clearTimeout(fadeOutTimeout);
    }
  }, [isFadingOut]);

  return (
    <Container>
      <PlayButton
        onClick={playRandomAudio}
        currentAudio={currentAudio}
        isFadingOut={isFadingOut}
      >
        <PlayIconContainer>
          <MusicNote />
        </PlayIconContainer>
      </PlayButton>
      <CurrentlyPlaying currentAudio={currentAudio} isFadingOut={isFadingOut}>
        {currentAudio?.name}
      </CurrentlyPlaying>
    </Container>
  );
};
