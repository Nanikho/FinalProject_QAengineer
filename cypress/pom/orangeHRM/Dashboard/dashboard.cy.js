export default class dashboardPage{
    static AccessDirectory(){
        return cy.get('a[href="/web/index.php/directory/viewDirectory"]');
    }
    static InputEmployeeName(value) {
        return cy.get('.oxd-autocomplete-text-input input')
            .type(value);  
            
    }
    static ResetEmployeeName()
    {
        return cy.get('.oxd-autocomplete-text-input input').should('have.text','');
    }
    static SelectOption(value){
        cy.get('.oxd-autocomplete-dropdown')
        .should('not.have.css', 'display', 'none').and('be.visible'); 

        cy.get('.oxd-autocomplete-dropdown') 
        .contains(value) 
        .click(); 
    }

    static buttonSearch(){
        return cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]');
    }
    static buttonReset(){
        return cy.get('[class="oxd-button oxd-button--medium oxd-button--ghost"]');
    }

    static DropdownFilter(index,value){
        cy.get('.oxd-select-wrapper').eq(index).click();
        cy.get('.oxd-select-dropdown')
        .should('not.have.css', 'display', 'none').and('be.visible'); 

        cy.get('.oxd-select-dropdown') 
        .contains(value) 
        .click(); 
    }
}
