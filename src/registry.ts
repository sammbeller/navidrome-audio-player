import { type AudioPlayer } from "./players/AudioPlayer";
import { HowlAudioPlayer } from "./players/howler/HowlAudioPlayer";

export enum SupportedPlayers {
  HOWLER = "howler",
}

type AudioPlayerRegistry<Keys extends SupportedPlayers> = {
  [key in Keys]: AudioPlayer;
};

export const audioPlayerRegistry: AudioPlayerRegistry<SupportedPlayers> = {
  [SupportedPlayers.HOWLER]: new HowlAudioPlayer(),
};
