const { Builder, Browser, By, until } = require("selenium-webdriver");
const assert = require("assert");
const LoginPage = require("../pages/login_page");

describe("Login Page Test", function () {
  let driver;
  let formPage;

  this.timeout(30000);

  before(async function () {
    driver = await new Builder().forBrowser(Browser.FIREFOX).build();
    formPage = new LoginPage(driver);
  });

  it("should handle invalid credentials", async function () {
    await formPage.navigate();
    await formPage.submitLogin(driver);

    const bodyElement = await driver.wait(
      until.elementLocated(By.css("body")),
      30000
    );

    // Get the body text
    const bodyText = await bodyElement.getText();
    assert(
      bodyText.includes("Invalid username or password"),
      "The expected text is not on the page"
    );
  });
  after(async function () {
    await driver.quit();
  });
});
