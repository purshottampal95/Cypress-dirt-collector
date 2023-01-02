describe('Registration', function () {
   
    before(() => {
        cy.viewport(1366, 768)
        cy.fixture('register').then(function (data) {
            this.data = data
        })

    })
    it('registration', function () {

        cy.visit(this.data.url)
    //     //cy.contains('#registerForm > .modal-body > .row > .col-md-12 > .btn').click()
    //     cy.get('[data-toggle="modal"] > .nav-menuitems-link > .nav-menu-items-label')
    //     cy.get('.nav-menuitems-user').click()
    //     cy.get('.sign-up').click().wait(1000)
    //     //cy.contains('Register').should("be.active")
    //     cy.wait(1000)
    //     cy.get('#first_name').type(this.data.FirstName)
    //     cy.get('#last_name').type(this.data.LastName)
    //     cy.get(':nth-child(3) > #email').type(this.data.Email)
    //     //cy.get('#password1').type('Pal@123')
    //     cy.get('#password1').type(this.data.Password)
    //     //.should('have.value', '123456').and('.not have.value','12345')
    //     cy.get(':nth-child(5) > .form-control').type(this.data.Repassword)
    //     cy.contains('Register').click()
    //     cy.get('.dropdown-toggle').click()
    //     cy.get('.user-header-dropdown > [href="https://dirt.c247.website/logout"]').click()

    //     cy.visit(this.data.url)
    //     cy.get('[data-toggle="modal"] > .nav-menuitems-link > .nav-menu-items-label')
    //     cy.get('.nav-menuitems-user').click()
    //     cy.wait(1000)
    //     cy.get(':nth-child(2) > #email').type(this.data.Email)
    //     cy.get('#password').type(this.data.Password)
    //     cy.get('#loginForm > .modal-body > .row > .col-md-12 > .btn > b').click()
    // });

    // it('login', function () {
    //     //cy.visit(this.data.url)
    //     cy.get('[data-toggle="modal"] > .nav-menuitems-link > .nav-menu-items-label')
    //     cy.get('.nav-menuitems-user').click()
    //     cy.wait(1000)
    //     cy.get(':nth-child(2) > #email').type(this.data.Email)
    //     cy.get('#password').type(this.data.Password)
    //     cy.get('#loginForm > .modal-body > .row > .col-md-12 > .btn > b').click()

    })
   
    // // import { Loginpage } from "./page./loginwithclass.cy"

    // // const loginpage= new Loginpage()
    // // it('login', function () {
    // // cy.visit("https://dirt.c247.website/")
    // // cy.get('[data-toggle="modal"] > .nav-menuitems-link > .nav-menu-items-label')
    // // cy.get('.nav-menuitems-user').click()
    // // cy.wait(1000)
    // // cy.contains('Sign In')

    // // cy.get(':nth-child(2) > #email').type(this.data.Email)
    // // cy.get('#password').type(this.data.Password)
    // // cy.get('#loginForm > .modal-body > .row > .col-md-12 > .btn > b').click()

    // // //loginpage.enterusername()

    // // })


    // // it('login', function (data) {
    // //     cy.visit("https://dirt.c247.website/")
    // //     cy.get('[data-toggle="modal"] > .nav-menuitems-link > .nav-menu-items-label')
    // //     cy.get('.nav-menuitems-user').click()
    // //     cy.wait(1000)
    // //     cy.get(':nth-child(2) > #email').type(this.data.Email)
    // //     cy.get('#password').type(this.data.Password)
    // //     cy.get('#loginForm > .modal-body > .row > .col-md-12 > .btn > b').click()

    // // })
})