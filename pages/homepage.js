const {expect} = require("@playwright/test")

class homePage{

    constructor(page){
        this.page = page
        this.cartButton = "button.cartBtn"
    }

    async verifyCartButton() {
        await expect(this.page.locator(this.cartButton)).toBeVisible();
    }
}

module.exports = homePage;