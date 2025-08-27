import { expect, browser } from '@wdio/globals'

describe('WebdriverIO main page', () => {
    xit('should have correct title', async () => {
        await browser.url('https://webdriver.io/');
        const title = await browser.getTitle();

        console.log(title);

        await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');
    });

    xit ("should show addValue command", async () => {
        await browser.url('https://the-internet.herokuapp.com/login');  

        const input = await browser.$('#username');
        await input.addValue('tomsmith');
        await browser.pause(1000);

        await input.addValue(123);
        await browser.pause(1000);

        await expect(input).toHaveValue('tomsmith123');
    });

    xit("should show setValue command", async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        const input = await browser.$('#username');
        await input.setValue('tomsmith');
        await browser.pause(1000);

        console.log(await input.getValue());
        
        await expect(input).toHaveValue('tomsmith');
    });
    
    xit("Should click", async ()=>{
        await browser.url('https://the-internet.herokuapp.com/login');
    
        const username = await browser.$('#username');
        await username.setValue('tomsmith');
        const password = await browser.$('#password');
        await password.setValue('SuperSecretPassword!');
        const button = await browser.$('.radius');
        await button.click();
    
        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/secure');
    });

    it("Should have attribute",async ()=>{
        await browser.url("https://dou.ua");
        const search = await browser.$("#txtGlobalSearch");

        await expect(search).toHaveAttribute("placeholder","пошук");
        await expect(search).toHaveAttribute("type","text");
        console.log("Placeholder: ",await search.getAttribute("placeholder"));
        
        await search.setValue("test");
        await expect(search).toHaveValue("test");
    });
})

