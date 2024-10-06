import { useCallback, useRef, useState } from "react";
import { audioPlayerRegistry, SupportedPlayers } from "./registry";

export const useAudioPlayer = (registryKey: SupportedPlayers) => {
  const audioPlayer = useRef(audioPlayerRegistry[registryKey]);
  const error = useState(audioPlayer.current.error);

  const getDuration = useCallback(audioPlayer.current.getDuration, [
    audioPlayer,
  ]);

  const getIsMuted = useCallback(audioPlayer.current.getIsMuted, [audioPlayer]);

  const getIsLooping = useCallback(audioPlayer.current.getIsLooping, [
    audioPlayer,
  ]);

  const getPlaybackRate = useCallback(audioPlayer.current.getPlaybackRate, [
    audioPlayer,
  ]);

  const getPosition = useCallback(audioPlayer.current.getPosition, [
    audioPlayer,
  ]);

  const getState = useCallback(audioPlayer.current.getState, [audioPlayer]);

  const getVolume = useCallback(audioPlayer.current.getVolume, [audioPlayer]);

  const load = useCallback(audioPlayer.current.load, [audioPlayer]);

  const pause = useCallback(audioPlayer.current.pause, [audioPlayer]);

  const play = useCallback(audioPlayer.current.play, [audioPlayer]);

  const setFade = useCallback(audioPlayer.current.setFade, [audioPlayer]);

  const setIsMuted = useCallback(audioPlayer.current.setIsMuted, [audioPlayer]);

  const setIsLooping = useCallback(audioPlayer.current.setIsLooping, [
    audioPlayer,
  ]);

  const setPosition = useCallback(audioPlayer.current.setPosition, [
    audioPlayer,
  ]);

  const setPlaybackRate = useCallback(audioPlayer.current.setPlaybackRate, [
    audioPlayer,
  ]);

  const setVolume = useCallback(audioPlayer.current.setVolume, [audioPlayer]);

  const stop = useCallback(audioPlayer.current.stop, [audioPlayer]);

  return {
    error,
    getDuration,
    getIsMuted,
    getIsLooping,
    getPlaybackRate,
    getPosition,
    getState,
    getVolume,
    load,
    pause,
    play,
    setFade,
    setIsMuted,
    setIsLooping,
    setPosition,
    setPlaybackRate,
    setVolume,
    stop,
  };
};
