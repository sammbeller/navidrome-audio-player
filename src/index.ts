import { HowlAudioPlayer } from "./players/howler";

export enum AudioPlayerState {
  LOADING = "LOADING",
  PAUSED = "PAUSED",
  PLAYING = "PLAYING",
  STOPPED = "STOPPED",
}

export interface AudioPlayer {
  error?: string;
  getDuration: () => Promise<number>;
  getIsMuted: () => Promise<boolean>;
  getIsSetToLoop: () => Promise<boolean>;
  getPlaybackRate: () => Promise<number>;
  getPosition: () => Promise<number>;
  getState: () => Promise<AudioPlayerState>;
  getVolume: () => Promise<number>;
  load: (src: string) => void;
  play: () => Promise<void>;
  pause: () => Promise<void>;
  setFade: (from: number, to: number, duration: number) => Promise<void>;
  setIsMuted: (isMuted: boolean) => Promise<void>;
  setIsSetToLoop: (isSetToLoop: boolean) => Promise<void>;
  setPosition: (position: number) => Promise<void>;
  setPlaybackRate: (playbackRate: number) => Promise<void>;
  setVolume: (volume: number) => Promise<void>;
  stop: () => Promise<void>;
  src?: string;
}

export enum SupportedPlayers {
  HOWLER = "howler",
}

type AudioPlayerRegistry<Keys extends SupportedPlayers> = {
  [key in Keys]: AudioPlayer;
};

export const audioPlayerRegistry: AudioPlayerRegistry<SupportedPlayers> = {
  [SupportedPlayers.HOWLER]: new HowlAudioPlayer(),
};
