
//comment
describe('login', function () {

    before(function () {
        cy.viewport(1366, 768)
        cy.fixture('register').then(function (data) {
            this.data = data
        })
    })
    it('login', function () {
        cy.visit(this.data.url)
        cy.get('[data-toggle="modal"] > .nav-menuitems-link > .nav-menu-items-label')
        cy.get('.nav-menuitems-user').click()
        cy.wait(1000)
        cy.get(':nth-child(2) > #email').type(this.data.Email)
        cy.get('#password').type(this.data.Password)
        cy.get('#loginForm > .modal-body > .row > .col-md-12 > .btn > b').click()

    })
   
})

