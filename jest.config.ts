import { type JestConfigWithTsJest, createDefaultEsmPreset } from "ts-jest";

const defaultPreset = createDefaultEsmPreset();
const jestConfig: JestConfigWithTsJest = {
  ...defaultPreset,
  ...{
    globalSetup: "jest-environment-puppeteer/setup",
    globalTeardown: "jest-environment-puppeteer/teardown",
    testEnvironment: "jest-environment-puppeteer",
  }
};

export default jestConfig;
