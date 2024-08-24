///<reference types ="cypress"/>
describe('Delete User',()=>{
    it('Succes delete user',()=>{
        cy.request('DELETE','https://reqres.in/api/users/2').then((Response) =>{
            expect(Response.status).equal(204)
            
        })

    })
})