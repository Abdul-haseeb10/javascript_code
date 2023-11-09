const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');

Given(/^I am on the (\w+) page$/, async (page) => {
    const url = `https://the-internet.herokuapp.com/${page}`;
    
    // Navigate to the URL
    await browser.url(url);

    // Remove unnecessary delay (unless there's a specific reason for it)
    // const delayDuration = 5000;
    // await browser.pause(delayDuration);
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await $('#username').setValue(username);
    await $('#password').setValue(password);
    await $('button[type="submit"]').click();
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect($('#flash')).toBeExisting();
    await expect($('#flash')).toHaveTextContaining(message);
});
