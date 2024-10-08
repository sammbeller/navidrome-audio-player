import { SupportedPlayers, type audioPlayerRegistry } from "../src/registry";
import { type AudioPlayer } from "../src/players/AudioPlayer";

/**
 * These tests iterate over all supported audio players and run tests on each
 */
describe("Registry Tests", () => {
  let audioPlayerRegistryFromWindow: typeof audioPlayerRegistry;
  beforeAll(async () => {
    await page.goto('http://localhost:3000/test/registry.test.html');
    audioPlayerRegistryFromWindow = await page.evaluate(() => (window as typeof window & {
      audioPlayerRegistry: typeof audioPlayerRegistry
    }).audioPlayerRegistry);
    console.log(audioPlayerRegistryFromWindow);
  });
  Object.values(SupportedPlayers).forEach((key) => {
    let audioPlayer: AudioPlayer;
    beforeEach(() => {
      audioPlayer = audioPlayerRegistryFromWindow[key]();
    });
    describe(key, () => {
      describe("getDuration", () => {
        it("should return the duration of an audio file", async () => {
          await audioPlayer.load("../noise.wav");
          expect(await audioPlayer.getDuration()).toBe(10);
        });
      });
      describe("play", () => {
        it("should return an error when no sound is loaded", async () => {
          await audioPlayer.play();
          expect(audioPlayer.error).toBeDefined();
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
