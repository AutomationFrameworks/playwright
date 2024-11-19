const {expect} = require("@playwright/test")

class loginPage{

    constructor(page){
        this.page = page
        this.header = "//h2[text() = 'Sign In']"
        this.userName = '//*[@id="email1"]'
        this.password = '//*[@id="password1"]'
        this.signin = 'button[type=submit]'
    }

    async login(){
        await this.page.fill(this.userName, "admin@email.com")
        await this.page.fill(this.password, "admin@123")
        await this.page.click(this.signin)
    }

    async verifySigin(){
        await expect(this.page.locator(this.header)).toBeVisible();
    }

}

module.exports = loginPage;
