// @ts-check
const {test} = require("@playwright/test")
const LoginPage = require("../pages/login")
const HomePage = require("../pages/homepage")

test("Test login and logout the application", async({ page }) => {

    await page.goto('https://freelance-learn-automation.vercel.app/login')
    const loginPage = new LoginPage(page)

    await loginPage.login()

    const homePage = new HomePage(page)

    await homePage.verifyCartButton()

    await homePage.logOut()

    await loginPage.verifySigin()

});