///<reference types ="cypress"/>
describe('Validate Header',()=>{
    it('Succesfull validate content-type',()=>{
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
        .should('include','application/json; charset=utf-8')
        cy.request('GET','https://pokeapi.co/api/v2/pokemon/ditto').then((response)=>{
            expect(response.status).equal(200)
            expect(response.body).to.have.be.an('object');
            expect(response.body).to.have.property('name');
            expect(response.body.name).to.be.a('string').and.have.length.greaterThan(0);
            expect(response.body.name).to.not.be.empty; 
        })
    })
})