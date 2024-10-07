import { SupportedPlayers, audioPlayerRegistry } from "./registry";
import { type AudioPlayer } from "./players/AudioPlayer";

/**
 * These tests iterate over all supported audio players and run tests on each
 */
describe("Registry Tests", () => {
  Object.values(SupportedPlayers).forEach((key) => {
    let audioPlayer: AudioPlayer;
    beforeAll(() => {
      audioPlayer = audioPlayerRegistry[key];
    });
    describe(key, () => {
      describe("getDuration", () => {
        it("should return the duration of an audio file", async () => {
          expect(await audioPlayer.getDuration()).toBe(10);
        });
      });
      // describe("getVolume", () => {
      //   it("should return 0 when there is no sound playing", async () => {
      //     expect(await audioPlayer.getVolume()).toBe(0);
      //   });
      // });
    });
  });
});
