//inisialisasi custom login 
Cypress.Commands.add('LoginViaApi',(
//variable untuk login ada email dan password
    email = Cypress.env('useremail'),
    password = Cypress.env('userPassword')
)=>{
    //Permintaan untuk ke API URL 
    cy.request('POST', `${Cypress.env('apiurl')}/users/login`,{
        //isi body yang ada di API
        username: email,
        password,
    }).then((response)=>{
        //untuk mengecek jika ID dan username sama maka akan langsung dapat ditampilkan
        cy.setCookie('SessionId', response.body.SessionId)
        cy.setCookie('UserId', response.body.UserId)
        cy.setCookie('UserName', response.body.UserName)
        //Perintah untuk mengunjungi URL dan akan berinteraksi dengan element
        cy.visit('/#!/main')
    })
})