module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.(ts|tsx)?$": [
      "ts-jest",
      {
        babelConfig: true,
      },
    ],
  },
  moduleNameMapper: {
    "\\.(css|scss|less)$": "identity-obj-proxy",
  },
};
