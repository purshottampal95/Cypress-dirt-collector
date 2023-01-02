export class LoginPage{


   username_textbox = ':nth-child(3) > #email'
   password_textbox = '#password1'
   login_button = '.oxd-b#loginForm > .modal-body > .row > .col-md-12 > .btn > button'
   enterUsername(username){
       cy.get(this.username_textbox).type(username)
   }
   enterPassword(password){
       cy.get(this.password_textbox).type(password)
   }
   enterLogin(){
       cy.get(this.login_button).click()
   }
}