import { createDefaultEsmPreset, type JestConfigWithTsJest } from "ts-jest";
const defaultPreset = createDefaultEsmPreset();
const jestConfig: JestConfigWithTsJest = {
  ...defaultPreset,
};

export default jestConfig;
