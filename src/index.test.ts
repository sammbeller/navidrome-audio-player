import { AudioPlayer, audioPlayerRegistry, SupportedPlayers } from ".";

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
    });
  });
});
