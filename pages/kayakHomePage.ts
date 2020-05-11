
import {browser, element, by} from 'protractor';
// import {chai} from 'chai';
// import chaiAsPromised from 'chai-as-promised';
let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
let expect = chai.expect;

export class firmHomePage {
    constructor() {
    }
    readMoreLink = element(by.xpath('//a[text()="read more"]'));
    pricing = element(by.xpath('//div[@class="firm-pricing"]'));
    employees = element(by.xpath('//div[@class="firm-employees"]'));
    founded = element(by.xpath('//div[@class="firm-founded"]'));

    async testPage() {
        browser.manage().window().maximize();
        browser.get('https://www.goodfirms.co/company/openxcell/reviews');
        browser.actions().mouseMove(this.readMoreLink).perform();
        this.readMoreLink.click();
        browser.actions().mouseMove(this.pricing).perform();
        expect(await this.pricing.isDisplayed()).to.equal(true);
        expect(await this.employees.isDisplayed()).to.be.equal(true);
        expect(await this.founded.isDisplayed()).to.be.equal(true);
    }
}