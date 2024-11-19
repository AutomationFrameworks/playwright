const {expect} = require("@playwright/test")

class homePage{

    constructor(page){
        this.page = page
        this.cartButton = "button.cartBtn"
        this.menu = "img[alt='menu']"
        this.logout = "//button[text() = 'Sign out']"
    }

    async verifyCartButton() {
        await expect(this.page.locator(this.cartButton)).toBeVisible();
    }

    async logOut(){
        await this.page.click(this.menu);
        await this.page.click(this.logout);
    }
}

module.exports = homePage;