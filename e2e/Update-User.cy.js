describe('update user', ()=>{
    it('sucess update user', ()=>{
        var user ={
            "name":"Vann",
            "job":"QAtest"
        }
        cy.request('PUT','https://reqres.in/api/users/2', user).then((Response)=>{
            expect(Response.status).equal(200)
        })
    })
})