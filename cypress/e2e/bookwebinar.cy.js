describe("booking webinar", function () {
    before(() => {
        cy.viewport(1366, 768)
        cy.fixture('register').then(function (data) {
            this.data = data
        })

    })
    // it("loading and redirect on logo click", () => {
    //     cy.visit("https://dirt.c247.website/")
    //     cy.get('.nav-home-logo > img').click()
    // });

    it("booking webinar", function () {
        cy.visit("https://dirt.c247.website/")
        cy.get('[data-toggle="modal"] > .nav-menuitems-link > .nav-menu-items-label')
        cy.get('.nav-menuitems-user').click()
        cy.wait(1000)
        cy.get(':nth-child(2) > #email').type(this.data.Email)
        cy.get('#password').type(this.data.Password)
        cy.get('#loginForm > .modal-body > .row > .col-md-12 > .btn > b').click().log('Login successful')
        cy.get('[href="https://dirt.c247.website/webinar"] > .nav-menu-items-label').click()
        //cy.get("input[name ='category[]']").click({multiple:true}) 
        //click all check box in one time
        cy.get(':nth-child(1) > .custom-control-label').click()
        cy.get(':nth-child(2) > .custom-control-label').first().click()
        cy.get(':nth-child(3) > .custom-control-label').click()
        cy.get(':nth-child(4) > .custom-control-label').click()
        cy.get("select[name='type']").select("Available Webinar")//.should("have.value", "Upcoming Webinar")
        cy.get("select[name='sort_by']").select("Oldest Webinar")
        cy.get('[href="https://dirt.c247.website/webinar/massive-12-acre-wooded-property-in-appleton-wisconsin-webinar-mockup"] > .webinarcard-root').click()
        // cy.get('.buttons > .btn').click()
        // cy.wait(2000)
        // cy.get(':nth-child(2) > #email').type(this.data.Email)
        // //cy.wait(1000)
        // cy.get('#password').type(this.data.Password)
        // cy.get('#loginForm > .modal-body > .row > .col-md-12 > .btn > b').click()
        //cy.visit('https://dirt.c247.website/webinar/Neighboring-Parcels-totaling-over-1-acre-in-N.-Central-Arkansas-Lake-Resort-Community').click()
        cy.get('.buttons > .btn').click()
        //cy.get('.seats-seatsgrid').trigger('mouseup', { eventConstructor: 'MouseEvent' })//.trigger('click')
        cy.get(':nth-child(3) > .page-bottom-wrapper > .page-buttons > .next-button').should('be.enabled')
        // cy.get(':nth-child(3) > .page-bottom-wrapper > .page-buttons > .next-button')
        //     // we can use "enabled" assertion
        //     .should('be.enabled')
        //     // or negate the "disabled" assertion
        //     .and('not.be.disabled')
        cy.wait(1000)
        //cy.get('.seats-seatsgrid').should('be.disabled')
        //document.getElementById("select-seat-2").disabled
        //cy.wait(1000)
        cy.get('#select-seat-11').should('be.enabled').click()
        cy.wait(1000)
        //cy.get('#select-seat-4').should('be.disabled').and('not.be.disabled')
        // cy.get('#select-seat-4').should('be.visible')
        // cy.get('#select-seat-4').should('not.be.visible')
        cy.get('#select-seat-12').should('be.enabled').click()
        // cy.get('.seats-seatsgrid').trigger('mouseup')
        //cy.get("button[id='select-seat-1']").click()
        cy.get('.info-html-11 > :nth-child(2) > .form-control').type('kiran')
        cy.get('.info-html-11 > :nth-child(3) > .form-control').type('verma')
        cy.get('.info-html-12 > :nth-child(2) > .form-control').type('kiya')
        cy.get('.info-html-12 > :nth-child(3) > .form-control').type('verma')
        cy.get(':nth-child(3) > .page-bottom-wrapper > .page-buttons > .next-button').click()
        cy.get('#shipping_address1').type("1882 new city")
        cy.get('#shipping_address2').type("testing 123")
        cy.get('#shipping_country').type("india")
        cy.get('#shipping_state').type("mp")
        cy.get('#shipping_city').type("jabalpur")
        cy.get('#shipping_zip_code').type("482001")
        cy.get('#address_type').click()
        cy.get('.checkoutpage-wrapper > .page-bottom-wrapper > .page-buttons > .next-button').click()



    });
})