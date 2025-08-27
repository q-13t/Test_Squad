import { expect, browser } from '@wdio/globals'

describe('WebdriverIO Homework', () => {
    xit('Homework 1', async () => {
        // Navigate to webdriverio  
        await browser.url('https://webdriver.io/');
        await browser.maximizeWindow();
        // click API
        const API = await browser.$('//*[@id="__docusaurus"]/nav/div[1]/div[1]/a[3]');
        await expect(API).toExist();
        await API.click();
        await expect(browser).toHaveUrl('https://webdriver.io/docs/api');
  
        // Check if hero "Introduction" is present
        await expect(await browser.$('//*[@id="__docusaurus_skipToContent_fallback"]/div/div/main/div/div/div[1]/div/article/div[2]/header/h1')).toExist();
        // Check if breadcrumb "Introduction" is present
        await expect(await browser.$('//*[@id="__docusaurus_skipToContent_fallback"]/div/div/main/div/div/div[1]/div/article/nav/ul/li[2]/span')).toExist();
        // Check if href "Introduction" has href attribute
        await expect(await browser.$('//*[@id="__docusaurus_skipToContent_fallback"]/div/div/main/div/div/div[1]/div/article/div[2]/p[1]/a[1]')).toHaveAttribute("href","/docs/api/webdriver");
        // Click search -> type in "All is done" -> click cross
        const search = await browser.$('//*[@id="__docusaurus"]/nav/div[1]/div[2]/div[4]/button/span[1]/span');
        await expect(search).toExist();
        await search.click();
        const input = await browser.$('//*[@id="docsearch-input"]');
        await expect(input).toExist();
        await input.setValue('All is done');
        await browser.pause(1000);
        const cross = await browser.$('/html/body/div[1]/div/div/header/form/button');
        await expect(cross).toExist();
        await cross.click();
        await browser.pause(1000);
    });
    it('Homework 2', async () => {
        // Navigate to webdriverio  
        await browser.url('https://webdriver.io/');
        await browser.maximizeWindow();
        // click API
        const API = await browser.$('//*[@id="__docusaurus"]/nav/div[1]/div[1]/a[3]');
        await expect(API).toExist();
        await API.click();
        await expect(browser).toHaveUrl('https://webdriver.io/docs/api');
  
        let element = await browser.$('//*[@id="__docusaurus"]/footer/div/div[1]/div[1]/ul/li[2]/a');
        await expect(element).toExist();
        await element.scrollIntoView();
        await expect(element).toBeDisplayedInViewport();

        element = await browser.$('//*[@id="__docusaurus_skipToContent_fallback"]/div/div/main/div/div/div[1]/div/nav/a');
        await expect(element).toExist();
        await element.scrollIntoView();
        await expect(element).toBeDisplayedInViewport();
        await expect(element).toBeEnabled();
        await expect(element).toBeClickable();
        console.log("Element: ",await element.getHTML(false));
        element.click();
        await browser.waitUntil(async ()=>{
                return await browser.$('//*[@id="webdriver-protocol"]').isDisplayed();
        },{
            timeout: 5000,
            timeoutMsg: "Element is not Visible"
        });
        
    });
})