describe('new user create',()=>{
    it('Berhasil buat user baru',()=>{
        var user ={
            "name":"Eduwork",
            "job": "QA test"
        }
        cy.request('POST','https://reqres.in/api/users', user).then((Response)=>{
            expect(Response.status).equal(201)
            expect(Response.body).to.have.be.an('object');
            expect(Response.body.name).to.equal(user.name);
            expect(Response.body.job).to.equal(user.job);
            expect(Response.body).to.have.property('id');
            expect(Response.body).to.have.property('job');
            expect(Response.body).to.have.property('name');
            expect(Response.body).to.have.property('createdAt');
       
        })
    })

})