///<reference types ="cypress"/>
describe('Get User List',()=>{

    it('verify the list user display',()=>{
        cy.request({
            method:'GET',
            url:'https://reqres.in/api/users?page=2&per-pages=1&delay=3',
        }).as('users')
        cy.get('@users').its('status').should('equal',200)  
    })
})