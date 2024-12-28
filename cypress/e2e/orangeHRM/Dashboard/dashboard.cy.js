/// <reference types="cypress"/>
import loginPage from "../../../pom/orangeHRM/Login/login.cy";
import dashboardPage from "../../../pom/orangeHRM/Dashboard/dashboard.cy";
describe('Dashboard Directory Feature',() => {
    it('User Access Dashboard Directory',() => {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            loginPage.textLogin().should('have.text', 'Login');
            loginPage.inputUsername().type('Admin');
            loginPage.inputPassword().type('admin123');

            cy.intercept("GET","**/web/index.php/api/v2/directory/employees?limit=14&offset=0").as("actionemployee");
            loginPage.buttonLogin().click();

            
            loginPage.menuDashboard().should('have.text','Dashboard')
            dashboardPage.AccessDirectory().should('have.attr', 'href', '/web/index.php/directory/viewDirectory').click();
            cy.wait("@actionemployee").then((intercept) => {
                expect(intercept.response.statusCode).to.equal(200);
            });
        //cy.url().should('include','/dashboard/index');
        });

    it('User Access Directory Filter by Employee Name',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        loginPage.textLogin().should('have.text', 'Login');
        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('admin123');

        cy.intercept("GET","**/web/index.php/api/v2/directory/employees?limit=14&offset=0&empNumber=7").as("actionesearchemployee");

        loginPage.buttonLogin().click();
        loginPage.menuDashboard().should('have.text','Dashboard')
        dashboardPage.AccessDirectory().should('have.attr', 'href', '/web/index.php/directory/viewDirectory').click();
        dashboardPage.InputEmployeeName('manda');
        dashboardPage.SelectOption('manda akhil user');
        dashboardPage.buttonSearch().click();
        cy.wait("@actionesearchemployee").then((intercept) => {
            expect(intercept.response.statusCode).to.equal(200);
        });

        });
    
        it('User Access Directory Filter by Job Title',() => {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            loginPage.textLogin().should('have.text', 'Login');
            loginPage.inputUsername().type('Admin');
            loginPage.inputPassword().type('admin123');

            cy.intercept("GET","**/web/index.php/api/v2/directory/employees?limit=14&offset=0&jobTitleId=23").as("actionjobtitle");

            loginPage.buttonLogin().click();
            loginPage.menuDashboard().should('have.text','Dashboard')
            dashboardPage.AccessDirectory().should('have.attr', 'href', '/web/index.php/directory/viewDirectory').click();
            dashboardPage.DropdownFilter(0,'HR Manager');
            dashboardPage.buttonSearch().click();
            cy.wait("@actionjobtitle").then((intercept) => {
            expect(intercept.response.statusCode).to.equal(200);
            });
        });

        it('User Access Directory Filter by Location',() => {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            loginPage.textLogin().should('have.text', 'Login');
            loginPage.inputUsername().type('Admin');
            loginPage.inputPassword().type('admin123');

            cy.intercept("GET","**/web/index.php/api/v2/directory/employees?limit=14&offset=0&locationId=5").as("actionlocation");

            loginPage.buttonLogin().click();
            loginPage.menuDashboard().should('have.text','Dashboard')
            dashboardPage.AccessDirectory().should('have.attr', 'href', '/web/index.php/directory/viewDirectory').click();
            dashboardPage.DropdownFilter(1,'Texas R&D');
            dashboardPage.buttonSearch().click();
            cy.wait("@actionlocation").then((intercept) => {
                expect(intercept.response.statusCode).to.equal(200);
            });

        });
        it('User Access Button Reset',()=>{
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            loginPage.textLogin().should('have.text', 'Login');
            loginPage.inputUsername().type('Admin');
            loginPage.inputPassword().type('admin123');

            cy.intercept("GET","**/web/index.php/api/v2/directory/employees?limit=14&offset=0").as("actionreset");

            loginPage.buttonLogin().click();
            loginPage.menuDashboard().should('have.text','Dashboard')
            dashboardPage.AccessDirectory().should('have.attr', 'href', '/web/index.php/directory/viewDirectory').click();
            dashboardPage.InputEmployeeName('manda');
            dashboardPage.SelectOption('manda akhil user');
            dashboardPage.DropdownFilter(0,'HR Manager');
            dashboardPage.DropdownFilter(1,'Texas R&D');
            dashboardPage.buttonSearch().click();
            dashboardPage.buttonReset().click();
            cy.wait("@actionreset").then((intercept) => {
                expect(intercept.response.statusCode).to.equal(200);
            });

            dashboardPage.ResetEmployeeName();
        });
        

})
