import { expect, browser } from '@wdio/globals'

describe('WebdriverIO main page', () => {
    it('should have correct title', async () => {
        await browser.url('https://webdriver.io/');
        const title = await browser.getTitle();

        console.log(title);

        await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');
    });

    it ("should show addValue command", async () => {
        await browser.url('https://the-internet.herokuapp.com/login');  

        const input = await browser.$('#username');
        await input.addValue('tomsmith');
        await browser.pause(1000);

        await input.addValue(123);
        await browser.pause(1000);

        await expect(input).toHaveValue('tomsmith123');
        
    });
})

