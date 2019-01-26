import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getWelcomeText() {
    return element(by.css('app-root p.welcome')).getText();
  }

}
