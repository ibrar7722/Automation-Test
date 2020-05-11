const  KayakHomePage = require("../pages/kayakHomePage");


describe('Assignment test', function() {
    // @ts-ignore
    it('Navigate to goodfirms page', function(){
        let homePage = new KayakHomePage.firmHomePage();
        homePage.testPage();
    });
});