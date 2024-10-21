import { useCallback, useRef } from "react";
import { type AudioPlayer } from "./players/AudioPlayer";

export const useAudioPlayer = (audioPlayer: AudioPlayer) => {
  const audioPlayerRef = useRef(audioPlayer);

  const getDuration = useCallback(audioPlayerRef.current.getDuration, [
    audioPlayer,
  ]);

  const getIsMuted = useCallback(audioPlayerRef.current.getIsMuted, [audioPlayer]);

  const getIsLooping = useCallback(audioPlayerRef.current.getIsLooping, [
    audioPlayer,
  ]);

  const getPlaybackRate = useCallback(audioPlayerRef.current.getPlaybackRate, [
    audioPlayer,
  ]);

  const getPosition = useCallback(audioPlayerRef.current.getPosition, [
    audioPlayer,
  ]);

  const getState = useCallback(audioPlayerRef.current.getState, [audioPlayer]);

  const getVolume = useCallback(audioPlayerRef.current.getVolume, [audioPlayer]);

  const load = useCallback(audioPlayerRef.current.load, [audioPlayer]);

  const pause = useCallback(audioPlayerRef.current.pause, [audioPlayer]);

  const play = useCallback(audioPlayerRef.current.play, [audioPlayer]);

  const setFade = useCallback(audioPlayerRef.current.setFade, [audioPlayer]);

  const setIsMuted = useCallback(audioPlayerRef.current.setIsMuted, [audioPlayer]);

  const setIsLooping = useCallback(audioPlayerRef.current.setIsLooping, [
    audioPlayer,
  ]);

  const setPosition = useCallback(audioPlayerRef.current.setPosition, [
    audioPlayer,
  ]);

  const setPlaybackRate = useCallback(audioPlayerRef.current.setPlaybackRate, [
    audioPlayer,
  ]);

  const setVolume = useCallback(audioPlayerRef.current.setVolume, [audioPlayer]);

  const stop = useCallback(audioPlayerRef.current.stop, [audioPlayer]);

  return {
    error: audioPlayerRef.current.error,
    getDuration,
    getIsLooping,
    getIsMuted,
    getPlaybackRate,
    getPosition,
    getState,
    getVolume,
    load,
    pause,
    play,
    setFade,
    setIsLooping,
    setIsMuted,
    setPlaybackRate,
    setPosition,
    setVolume,
    stop,
  };
};
