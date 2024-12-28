export default class dashboardPage{
    static AccessDirectory(){
        return cy.get('a[href="/web/index.php/directory/viewDirectory"]');
    }
    static InputEmployeeName(value) {
        return cy.get('.oxd-autocomplete-text-input input')
            .type(value);  // Isi input dengan nilai yang diberikan
            
    }
    static ResetEmployeeName()
    {
        return cy.get('.oxd-autocomplete-text-input input').should('have.text','');
    }
    static SelectOption(value){
        cy.get('.oxd-autocomplete-dropdown')
        .should('not.have.css', 'display', 'none').and('be.visible'); // Pastikan dropdown terlihat di halaman

        // Step 3: Cari item yang berisi teks yang sesuai dengan nilai yang diketik
        cy.get('.oxd-autocomplete-dropdown') // Targetkan dropdown
        .contains(value) // Cari item yang mengandung teks yang diketik
        .click(); // Klik item tersebut
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
        .should('not.have.css', 'display', 'none').and('be.visible'); // Pastikan dropdown terlihat di halaman

        // Step 3: Cari item yang berisi teks yang sesuai dengan nilai yang diketik
        cy.get('.oxd-select-dropdown') // Targetkan dropdown
        .contains(value) // Cari item yang mengandung teks yang diketik
        .click(); // Klik item tersebut
    }
}