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

    xit("Should have attribute",async ()=>{
        await browser.url("https://dou.ua");
        const search = await browser.$("#txtGlobalSearch");

        await expect(search).toHaveAttribute("placeholder","пошук");
        await expect(search).toHaveAttribute("type","text");
        console.log("Placeholder: ",await search.getAttribute("placeholder"));
        
        await search.setValue("test");
        await expect(search).toHaveValue("test");
    });

    xit("Should getLocation",async()=>{
        await browser.url("https://dou.ua");
        const fresh_label = await browser.$("body > div > div.l-content.m-content > div > div.col70.m-cola > div.b-most-interesting > div.l-content.m-db > div.l-content-wrap.m-db > div:nth-child(3) > div > ul.b-articles-switch > li.current > a");
        console.log("Current label: ",await fresh_label.getLocation());
        console.log("Current label X: ",await fresh_label.getLocation("x"));
        console.log("Current label y: ",await fresh_label.getLocation("y"));
    });

    xit("Should have text",async()=>{
        await browser.url("https://dou.ua");
        const fresh_label = await browser.$("body > div > div.l-content.m-content > div > div.col70.m-cola > div.b-most-interesting > div.l-content.m-db > div.l-content-wrap.m-db > div:nth-child(3) > div > ul.b-articles-switch > li.current > a");

        await expect(fresh_label).toHaveText("Свіже");
    });
    xit("Should be displayed",async()=>{
        await browser.url('https://webdriver.io/');
        const git_button = await browser.$('//*[@id="__docusaurus_skipToContent_fallback"]/header/div/div[1]/a[3]');
        await expect(git_button).toBeDisplayed();
    });

    xit("Should be visible",async()=>{
        await browser.url('https://webdriver.io/');
        const git_button = await browser.$('//*[@id="__docusaurus_skipToContent_fallback"]/header/div/div[1]/a[3]');
        await expect(git_button).toBeDisplayedInViewport();
    });

    xit("Should not be visible",async()=>{
        await browser.url('https://webdriver.io/');
        const help_button = await browser.$('//*[@id="__docusaurus"]/footer/div/div[1]/div[1]/ul/li[4]/a');
        await expect(help_button).not.toBeDisplayedInViewport();
    });

    xit("Should be clickable",async()=>{
        await browser.url('https://webdriver.io/');
        const git_button = await browser.$('//*[@id="__docusaurus_skipToContent_fallback"]/header/div/div[1]/a[3]');
        await expect(git_button).toBeClickable();
    });

    xit("Should be enabled",async()=>{
        await browser.url('https://webdriver.io/');
        await expect(await browser.$('//*[@id="__docusaurus_skipToContent_fallback"]/header/div/div[1]/a[3]')).toBeEnabled();
    });
    xit("To be focused",async()=>{
        await browser.url('https://webdriver.io/');
        const git_button = await browser.$('//*[@id="__docusaurus_skipToContent_fallback"]/header/div/div[1]/a[3]');
        await expect(git_button).not.toBeFocused();
        await git_button.click();
        await expect(git_button).toBeFocused();
    });

    xit("Should scrolled into",async()=>{
        await browser.url('https://webdriver.io/');
        const help_button = await browser.$('//*[@id="__docusaurus"]/footer/div/div[1]/div[1]/ul/li[4]/a');
        await expect(help_button).not.toBeDisplayedInViewport();
        await help_button.scrollIntoView();
        await expect(help_button).toBeDisplayedInViewport();
    });

    xit("Should take screenshot",async()=>{
        await browser.url('https://webdriver.io/');
        const help_button = await browser.$('//*[@id="__docusaurus"]/footer/div/div[1]/div[1]/ul/li[4]/a');
        await help_button.scrollIntoView();
        await browser.pause(1000);
        await help_button.saveScreenshot("screenshot.png");
    });


    xit("Should switch to new window",async()=>{
        await browser.url('https://webdriver.io/');
        await expect(browser).toHaveTitle("WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO");
        await browser.newWindow("https://webdriver.io/docs/api");
        await expect(browser).toHaveTitle("Introduction | WebdriverIO");
        await browser.switchWindow("https://webdriver.io/");
        await expect(browser).toHaveTitle("WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO");
    });
    it("Should wait until",async()=>{
        await browser.url('https://webdriver.io/');

        await browser.waitUntil(
            async () => {
                return await browser.$('//*[@id="__docusaurus"]/footer/div/div[1]/div[1]/ul/li[4]/a').isDisplayed();
            },
            {
                timeout: 5000,
                timeoutMsg: "Help button is not displayed in viewport"
            }
        )
    });
    it("Should have some html",async()=>{
        await browser.url('https://webdriver.io/');
        const element = browser.$('//*[@id="__docusaurus"]/nav/div[1]/div[2]/div[1]');
        console.log("Outer HTML: ",await element.getHTML());
        console.log("Inner HTML: ",await element.getHTML(false));
        
    });
    // it("",async()=>{});
})

