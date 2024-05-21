const { By } = require("selenium-webdriver/lib/by");
const { Key } = require("selenium-webdriver/lib/input");

class LoginPage {
  constructor(driver) {
    this.driver = driver;
  }
  async submitLogin() {
    await this.driver.findElement(By.id("username")).sendKeys("somramnani");
    await this.driver
      .findElement(By.id("PasswordInput"))
      .sendKeys("fakepassword");

    await this.driver
      .findElement(By.css(".btn.btn-lg.btn-success.w-100.mb-3"))
      .click();
  }
}

module.exports = LoginPage;
