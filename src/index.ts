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
  // load: (src: string, options: LoadOptions) => void;
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
  TEST = "test",
}

type AudioPlayerRegistry<Keys extends SupportedPlayers> = {
  [key in Keys]: AudioPlayer;
};

const testAudioPlayer: AudioPlayer = {
  getDuration: () => {
    throw new Error("Not implemented");
  },
  getIsMuted: () => {
    throw new Error("Not implemented");
  },
  getIsSetToLoop: () => {
    throw new Error("Not implemented");
  },
  getPlaybackRate: () => {
    throw new Error("Not implemented");
  },
  getPosition: () => {
    throw new Error("Not implemented");
  },
  getState: () => {
    throw new Error("Not implemented");
  },
  getVolume: () => {
    throw new Error("Not implemented");
  },
  play: () => {
    throw new Error("Not implemented");
  },
  pause: () => {
    throw new Error("Not implemented");
  },
  setFade: () => {
    throw new Error("Not implemented");
  },
  setIsMuted: () => {
    throw new Error("Not implemented");
  },
  setIsSetToLoop: () => {
    throw new Error("Not implemented");
  },
  setPosition: () => {
    throw new Error("Not implemented");
  },
  setPlaybackRate: () => {
    throw new Error("Not implemented");
  },
  setVolume: () => {
    throw new Error("Not implemented");
  },
  stop: () => {
    throw new Error("Not implemented");
  },
};

export const audioPlayerRegistry: AudioPlayerRegistry<SupportedPlayers> = {
  [SupportedPlayers.TEST]: testAudioPlayer,
};
