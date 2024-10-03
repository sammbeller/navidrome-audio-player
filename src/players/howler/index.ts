import { Howl } from "howler";
import { type AudioPlayer, AudioPlayerState } from "../..";

export class HowlAudioPlayer implements AudioPlayer {
  public error?: string = undefined;
  howlInstance?: Howl = undefined;
  /**
   * Howler doesn't expose its internal `_loop` variable so this needs to be tracked separately
   */
  private isLooping: boolean = false;
  /**
   * Howler doesn't expose its internal `_muted` variable so this needs to be tracked separately
   */
  private isMuted: boolean = false;
  /**
   * Howler doesn't expose its internal `_paused` variable so this needs to be tracked separately
   */
  private isPaused: boolean = false;
  constructor() {}

  async getDuration(): Promise<number> {
    return this.howlInstance?.duration() ?? 0;
  }

  async getIsMuted(): Promise<boolean> {
    return this.isMuted;
  }

  async getIsLooping(): Promise<boolean> {
    return this.isLooping;
  }
  async getPlaybackRate(): Promise<number> {
    return this.howlInstance?.rate() ?? 0;
  }

  async getPosition(): Promise<number> {
    return this.howlInstance?.seek() ?? 0;
  }

  async getState(): Promise<AudioPlayerState> {
    if (this.howlInstance === undefined) {
      return AudioPlayerState.STOPPED;
    } else if (this.howlInstance.playing()) {
      return AudioPlayerState.PLAYING;
    } else if (this.isPaused) {
      return AudioPlayerState.PAUSED;
    } else {
      return AudioPlayerState.STOPPED;
    }
  }

  async getVolume(): Promise<number> {
    return this.howlInstance?.volume() ?? 0;
  }

  async load(src: string): Promise<void> {
    if (this.howlInstance) {
      this.howlInstance.stop();
      this.howlInstance.unload();
    }
    this.howlInstance = new Howl({
      onloaderror: (soundId, error) => {
        console.error(
          `Encountered error loading sound at ${src} on sound ID ${soundId}: ${error}`
        );
        if (typeof error === "string") {
          this.error = error;
        } else if (typeof error === "number") {
          // See [this link](https://github.com/goldfire/howler.js?tab=readme-ov-file#onloaderror-function)
          switch (error) {
            case 1:
              this.error =
                "The fetching process for the media resource was aborted by the user agent at the user's request.";
            case 2:
              this.error =
                "A network error of some description caused the user agent to stop fetching the media resource, after the resource was established to be usable.";
            case 3:
              this.error =
                "An error of some description occurred while decoding the media resource, after the resource was established to be usable.";
            case 4:
              this.error =
                "An error of some description occurred while decoding the media resource, after the resource was established to be usable.";
            case 0:
            default:
              this.error = "Unkown error (error code 0)";
          }
        }
      },
      src,
    });
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

  async setIsMuted(isMuted: boolean): Promise<void> {
    if (this.howlInstance) {
      this.howlInstance.mute(isMuted);
      this.isMuted = isMuted;
    }
  }

  async setIsLooping(isLooping: boolean): Promise<void> {
    if (this.howlInstance) {
      this.howlInstance.loop(isLooping);
      this.isLooping = isLooping;
    }
  }

  async setPosition(position: number): Promise<void> {
    this.howlInstance?.seek(position);
  }

  async setPlaybackRate(playbackRate: number): Promise<void> {
    this.howlInstance?.rate(playbackRate);
  }

  async setVolume(volume: number): Promise<void> {
    this.howlInstance?.volume(volume);
  }

  async stop(): Promise<void> {
    this.howlInstance?.stop();
  }
}
