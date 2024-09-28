import { Howl } from "howler";
import { type AudioPlayerState } from "../..";

export class HowlAudioPlayer {
  howlInstance?: Howl;
  constructor() {}

  getDuration(): Promise<number> {
    throw new Error("Not implemented");
  }

  getIsMuted(): Promise<boolean> {
    throw new Error("Not implemented");
  }

  getIsSetToLoop(): Promise<boolean> {
    throw new Error("Not implemented");
  }
  getPlaybackRate(): Promise<number> {
    throw new Error("Not implemented");
  }

  getPosition(): Promise<number> {
    throw new Error("Not implemented");
  }

  getState(): Promise<AudioPlayerState> {
    throw new Error("Not implemented");
  }

  getVolume(): Promise<number> {
    throw new Error("Not implemented");
  }

  load(src: string): Promise<void> {
    throw new Error("Not implemented");
  }

  play(): Promise<void> {
    throw new Error("Not implemented");
  }

  pause(): Promise<void> {
    throw new Error("Not implemented");
  }

  setFade(from: number, to: number, duration: number): Promise<void> {
    throw new Error("Not implemented");
  }

  setIsMuted(isMuted: boolean): Promise<void> {
    throw new Error("Not implemented");
  }

  setIsSetToLoop(isSetToLoop: boolean): Promise<void> {
    throw new Error("Not implemented");
  }

  setPosition(position: number): Promise<void> {
    throw new Error("Not implemented");
  }

  setPlaybackRate(playbackRate: number): Promise<void> {
    throw new Error("Not implemented");
  }
  setVolume(volume: number): Promise<void> {
    throw new Error("Not implemented");
  }
  stop(): Promise<void> {
    throw new Error("Not implemented");
  }
}
