class SignupPage {
    go() {
        cy.visit('/')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    fillForm(courier) {
        cy.get('input[name="fullName"]').type(courier.name)
        cy.get('input[name="cpf"]').type(courier.document)
        cy.get('input[name="email"]').type(courier.email)
        cy.get('input[name="whatsapp"]').type(courier.whatsapp)

        cy.get('input[name="postalcode"]').type(courier.address.postal_code)
        cy.get('input[type="button"][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(courier.address.number)
        cy.get('input[name="address-details"]').type(courier.address.extra_information)

        cy.get('input[name="address"]').should('have.value', courier.address.street)
        cy.get('input[name="district"]').should('have.value', courier.address.neighborhood)
        cy.get('input[name="city-uf"]').should('have.value', courier.address.city_uf)

        cy.get('.delivery-method li').contains('Moto').click()
        cy.get('input[accept^="image"]').selectFile(`cypress/fixtures/images/${courier.cnh}`, { force: true })
    }

    submit() {
        cy.get('form button[type="submit"]').click()
    }

    modalContentShouldbe(expectedMessage) {

        cy.get('div[class=swal2-html-container]').should('have.text', expectedMessage)
    }

    alertMessageShoulBe(expectedMessage) {
        cy.get('.alert-error').contains(expectedMessage).should('be.visible')
    }
}

export default SignupPage