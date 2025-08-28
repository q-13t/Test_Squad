import { expect, browser } from '@wdio/globals'
import assert from 'assert/strict';

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
    xit('Homework 2', async () => {
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
        console.log("Element: ",await element.getHTML());
        element.click();
        await browser.waitUntil(async ()=>{
                return await browser.$('//*[@id="webdriver-protocol"]').isDisplayed();
        },{
            timeout: 5000,
            timeoutMsg: "Element is not Visible"
        });
    });
    
    it.skip('Homework 3', async () => {
        await browser.url('https://dou.ua');
        await browser.maximizeWindow();

        await expect(await browser.$('/html/body/div/div[4]/div/div[2]/ul/li[1]/a')).toExist();
        await expect(await browser.$('//*[@id="fp-articles_recent"]/li[2]/a[1]')).toExist();
        await expect(await browser.$('/html/body/div/div[4]/div/aside/div[1]/a[22]/img')).toExist();
        
        await expect(await browser.$('[name="twitter:site"]')).toExist();
        await expect(await browser.$('[src="https://www.googletagmanager.com/gtag/js?id=G-N62L6SV4PV"]')).toExist();
        await expect(await browser.$('//*[contains(text(),"AI") and @class = "link" and @href="https://dou.ua/forums/tags/AI/?from=fpcommunity"]')).toExist();
        await expect(await browser.$('[class="b-community-widget b-community-widget_ai "]')).toExist();
    });
});

describe("Homework 3", async () => {
    it("View All Playlists", async () => {
        await browser.url('https://github.blog');
        await browser.maximizeWindow();
        const element_view_all_playlists = await browser.$('//*[@id="start-of-content"]/section/div[5]/div[2]/div/div[1]/div/div/a');
        await element_view_all_playlists.scrollIntoView();
        await expect(element_view_all_playlists).toBeDisplayedInViewport();
    });
    
    it("Text Displayed At The Bottom", async () => {
        await browser.url('https://github.blog');
        await browser.maximizeWindow();
        const element_github_banner = await browser.$('/html/body/div[2]/footer/div[1]/div/div/a');
        await element_github_banner.scrollIntoView();
        await expect(element_github_banner).toBeClickable();
    });
    it("Spotlight", async () => {
        await browser.url('https://github.blog');
        await browser.maximizeWindow();
        const element_spotlight_text = await browser.$('//*[@id="h-spotlight"]');
        await element_spotlight_text.scrollIntoView();
        await expect(element_spotlight_text).toHaveText("Spotlight");
    });
    it("DropDown Menu is displayed after click", async () => {
        await browser.url('https://github.blog');
        await browser.maximizeWindow();
        const element_engineering_button = await browser.$('//*[@id="menu-item-78825"]');
        element_engineering_button.click();
        await browser.waitUntil(async ()=>{
            return await browser.$('//*[@id="primary-78825-dropdown"]').isDisplayed();
        },{
            timeout: 5000,
            timeoutMsg: "Element is not Visible"
        });
    });
    it("Button Opens Shop", async () => {
        await browser.url('https://github.blog');
        await browser.maximizeWindow();
        await browser.$('/html/body/div[2]/footer/div[1]/div/nav[4]/ul/li[5]/a').click();
        await expect(browser).toHaveUrl('https://thegithubshop.com/');
    });
});