// jest.config.js
module.exports = {
    rootDir: "./",
    globals: {
        'ts-jest': {
            useESM: true,
        },
        __DEV__: true,
        __PROD__: false
    },
    testEnvironment: "node",
    testTimeout: 30000,
    preset: "ts-jest",
    verbose: true, // report individual test
    bail: false, // enable to stop test when an error occur,
    detectOpenHandles: false,
    moduleDirectories: ["node_modules", "src", "test"],
    testMatch: ["**/src/**/*.test.ts?(x)"],
    testPathIgnorePatterns: ["node_modules/", "dist/", ".json", "create-tradingview-alerts-home"],
    coverageReporters: ["html", "text", "text-summary", "cobertura"],
    collectCoverageFrom: [
        "src/**/*.ts",
        "!**/node_modules/**",
        "!src/cli.ts"
    ],
    setupFiles: ["dotenv/config"],
    transform: {
        "common-service\\.ts": "babel-jest",
    },
    extensionsToTreatAsEsm: [".ts"],
    // moduleNameMapper: {
    //     '^(\\.{1,2}/.*)\\.js$': '$1',
    // },
    coverageThreshold: {
        // coverage strategy
        global: {
            branches: 20,
            functions: 20,
            lines: 21,
            statements: 22
        }
    }
}
