"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    framework: 'mocha',
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['specs/kayakHomePageSpec.ts'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    noGlobals: true,
    allScriptsTimeout: 120000,
    getPageTimeout: 120000,
    defaultTimeoutInterval: 1000000,
};
//# sourceMappingURL=conf.js.map