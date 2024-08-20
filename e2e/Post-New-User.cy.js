describe('new user create',()=>{
    it('Berhasil buat user baru',()=>{
        var user ={
            "name":"Eduwork",
            "job": "QA test"
        }
        cy.request('POST','https://reqres.in/api/users', user).then((Response)=>{
            expect(Response.status).equal(201)
            expect(Response.body.name).to.equal(user.name)
            expect(Response.body.job).to.equal(user.job)
        })
    })

})