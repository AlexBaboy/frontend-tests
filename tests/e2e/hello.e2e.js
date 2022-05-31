const HelloPage = require('../pages/hello.page');

describe('My Hello world application', () => {
    it('test hello world page', async () => {
        await HelloPage.open();
        await HelloPage.toggleTitleWithInput('hello')
        await expect(HelloPage.helloTitle).toBeExisting();
        await HelloPage.toggleBtn.click()
        await expect(HelloPage.helloTitle).not.toBeExisting()
    });

    it('should not toggle', async () => {
        await HelloPage.open();
        await HelloPage.toggleTitleWithInput('sadsad')
        await expect(HelloPage.helloTitle).not.toBeExisting();
    });
});


