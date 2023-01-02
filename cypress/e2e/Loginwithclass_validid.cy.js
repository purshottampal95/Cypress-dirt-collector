import { LoginPage } from "./loginwithclass.cy"
const loginPage = new LoginPage()

beforeEach(function () {
  cy.viewport(1366, 768)
  cy.visit("https://dirt.c247.website/")
  cy.get('[data-toggle="modal"] > .nav-menuitems-link > .nav-menu-items-label')
  cy.get('.nav-menuitems-user').click()
  cy.wait(1000)
})
describe('Login function', () => {

  it('login with valid username and password', function () {

    loginPage.enterUsername('ppal@yopmail.com')
    loginPage.enterPassword('Pal@123456')
    loginPage.enterLogin()
    cy.get('.oxd-b#loginForm > .modal-body > .row > .col-md-12 > .btn > button').click()
  })
  it('login with invalid user name with valid password', function () {

    loginPage.enterUsername('Admin122')
    loginPage.enterPassword('admin123')
    loginPage.enterLogin()
    cy.get('.oxd-b#loginForm > .modal-body > .row > .col-md-12 > .btn > button').click()
  })
  it('login with valid user name with invalid password', function () {

    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin27483')
    loginPage.enterLogin()
    cy.get('.oxd-b#loginForm > .modal-body > .row > .col-md-12 > .btn > button').click()
  })
  it('login with invalid user name with invalid password', function () {

    loginPage.enterUsername('Admin122')
    loginPage.enterPassword('admin564')
    loginPage.enterLogin()
    cy.get('.oxd-b#loginForm > .modal-body > .row > .col-md-12 > .btn > button').click()
  })
})