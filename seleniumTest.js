
const assert = require('assert');
let webdriver = require("selenium-webdriver");
let chrome = require("selenium-webdriver/chrome");
let fs = require('fs');
const {Key,
    By
} = require("selenium-webdriver");
const {Action,
    Actions
} = require("selenium-webdriver/lib/input");



// eslint-disable-next-line no-undef
describe('Verify setup with Google Search',function() {
    // eslint-disable-next-line no-undef
    it('browser should open', async function () {
        const options = new chrome.Options()
            .addArguments('--user-data-dir=/Users/nehakotcherlakota/Desktop');


        const driver = new webdriver.Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();

        driver.get('http://google.com');
        const searchBox = driver.findElement(webdriver.By.name('q'));
        searchBox.sendKeys('abc', Key.RETURN);

        searchBox.getAttribute('value').then(function(value) {
            assert.equal(value, 'abc');
        });
        driver.close();
        driver.quit();
    });
});

// eslint-disable-next-line no-undef
describe('Check simply clip functionality',function() {
    // eslint-disable-next-line no-undef,no-empty-function
    it('text should be copied', async function () {
        const options = new chrome.Options()
            .addArguments('--user-data-dir=/Users/nehakotcherlakota/Desktop');


        const driver = new webdriver.Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();

        driver.get('http://google.com');
        const searchBox = driver.findElement(webdriver.By.name('q'));
        searchBox.sendKeys('hello', Key.RETURN);
        let results = driver.findElement(By.xpath("html/body/div[1]/div[5]/div[4]/div[5]/div[1]/div[1]/div/div/div"));
        results.getAttribute('value').then(function(value) {
            console.log(value);
            assert.equal(value, results.getText());
        });

        driver.close();
        driver.quit();
    }).timeout(10000);
});

// eslint-disable-next-line no-undef,no-empty-function
describe('Check simply clip functionality',function() {
    // eslint-disable-next-line no-undef,no-empty-function
    it('copied text should exist in SimplyClip', async function () {
        const options = new chrome.Options()
            .addArguments('--user-data-dir=/Users/nehakotcherlakota/Desktop');


        const driver = new webdriver.Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();

        driver.get('http://google.com');
        const searchBox = driver.findElement(webdriver.By.name('q'));
        searchBox.sendKeys('hello', Key.RETURN);
        let results = driver.findElement(By.className("clipboard_list"));
        results.getAttribute('value').then(function(value) {
            console.log(value);
            assert.equal(value, results.getText());
        });

        driver.close();
        driver.quit();
    }).timeout(10000);
});
