describe("Login Page", function () {
    beforeEach(() => {

        cy.viewport(1366, 768)
        //const url= register.config("baseurl")
        cy.fixture('register').then(function (data) {
            this.data = data
        cy.visit(this.data.url)
        })
    });
    it("should displayed the login page", () => {
        cy.url().should("include", "/contact-us")
        cy.get("h2").contains("Contact Us");
    });

    it("should verify lable", () => {
        cy.get(':nth-child(1) > .form-group > label').contains('Name')
        cy.get(':nth-child(2) > .form-group > label').contains('Email Address')
        cy.get(':nth-child(3) > .form-group > label').contains("Message")
        cy.get('span > b').contains('send')
    });
    it("should verify lable", () => {
        cy.get('#save-contact').click()
        cy.get(':nth-child(1) > .form-group > label').contains('Name')
        cy.get(':nth-child(2) > .form-group > label').contains('Email Address')
        cy.get(':nth-child(3) > .form-group > label').contains("Message")

    });
    it("should verify lable", () => {
    cy.get('#name').focus().clear().type("purshottam")
    cy.get('.form-group > #email').focus().clear().type("check@yop")
    cy.get(':nth-child(3) > .form-group > .form-control').focus().clear().type("check mail type")
    cy.get('#save-contact').click()
    //cy.get(':nth-child(1) > .form-group > label').contains('Name')
    cy.get(':nth-child(2) > .form-group > label').contains('The email must be a valid email address.')
    //cy.get(':nth-child(3) > .form-group > label').contains("Message")
    });


})