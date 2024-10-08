export enum AudioPlayerState {
  PAUSED = "PAUSED",
  PLAYING = "PLAYING",
  STOPPED = "STOPPED",
}

export interface AudioPlayer {
  error?: string;
  getDuration: () => Promise<number>;
  getIsMuted: () => Promise<boolean>;
  getIsLooping: () => Promise<boolean>;
  getPlaybackRate: () => Promise<number>;
  getPosition: () => Promise<number>;
  getState: () => Promise<AudioPlayerState>;
  getVolume: () => Promise<number>;
  load: (src: string) => void;
  pause: () => Promise<void>;
  play: () => Promise<void>;
  setFade: (from: number, to: number, duration: number) => Promise<void>;
  setIsMuted: (isMuted: boolean) => Promise<void>;
  setIsLooping: (isLooping: boolean) => Promise<void>;
  setPosition: (position: number) => Promise<void>;
  setPlaybackRate: (playbackRate: number) => Promise<void>;
  setVolume: (volume: number) => Promise<void>;
  stop: () => Promise<void>;
}
