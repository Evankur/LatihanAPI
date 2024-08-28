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
            expect(response.body.abilities[0].ability).to.have.property('name','limber')
            expect(response.body.abilities[0].ability.name).to.eq('limber')
            expect(response.body.abilities[0].ability.url).to.eq('https://pokeapi.co/api/v2/ability/7/')
            expect(response.body.abilities[0]).to.have.property('slot', 1 )
            expect(response.body.abilities[0]).to.have.property('is_hidden', false)
            expect(response.body.game_indices[0].version.name).to.eq('red')
            expect(response.body.game_indices[11].version.name).to.eq('diamond')
            expect(response.body.abilities[1].ability.name).to.eq('imposter')
            expect(response.body.abilities[1].ability.url).to.eq('https://pokeapi.co/api/v2/ability/150/')
        });
        
        });
        it('Succesfull validate status code with param',()=>{
            cy.request({
                method: 'GET',
                url: 'https://reqres.in/api/users?page=2&per-pages=1&delay=3'
            }).as('users')
            cy.get('@users').its('status').should('equal',200)
        })
        it('Succesfull validate content',()=>{
            cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('bulbasaur')
            cy.get('@bulbasaur').its('body').should('include',{name:"bulbasaur"})
    })
    it('Succesfull validate negative response',()=>{
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/eduwork',
            failOnStatusCode: false
        }).as('eduwork')
        cy.get('@eduwork').its('status').should('equal',404)
    })
})