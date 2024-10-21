import { type AudioPlayer } from "./players/AudioPlayer";
import { HowlAudioPlayer } from "./players/HowlAudioPlayer";
import { createContext } from "react";

export const AudioPlayerContext= createContext<AudioPlayer>(
  new HowlAudioPlayer()
);
