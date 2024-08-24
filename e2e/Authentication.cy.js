///<reference types ="cypress"/>

describe('Basic Auth',()=>{
    it('Succes log by username and password ',()=>{
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('include.text','Congratulations! You must have the proper credentials.')
    });

    it('Succes log using header',()=>{
        cy.visit('https://the-internet.herokuapp.com/basic_auth',{
            headers:{
                authorization:'basic YWRtaW46YWRtaW4='
            },
            failOnStatusCode: false
        })
        cy.get('p').should('include.text','Congratulations! You must have the proper credentials.')
    })
})