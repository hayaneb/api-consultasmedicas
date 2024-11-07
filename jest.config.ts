export default {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: "src",
  testRegex: ".*\\.spec\\.ts$",
  transform: { "^.+\\.(t|j)s$": "ts-jest" },
  coverageDirectory: "../coverage",
  collectCoverageFrom: [
    "**/*.{js,ts}",
    "!<rootDir>/src/**/*.dto.{js,jsx,ts,tsx}",
    "!<rootDir>/src/**/*.interface.{js,jsx,ts,tsx}",
    "!<rootDir>/src/**/index.{js,jsx,ts,tsx}",
  ],
};
