import { Config } from "protractor";

export let config: Config = {
    seleniumaddress: 'http://localhost:4444/wd/hub',
    // directConnect:true,
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['testspec.js'],

    jasmineNodeOpts: {
        showColors: true,
    }
}