
//{
  //  "abilities": [
    //    {
      //      "ability": {
        //        "name": "limber",
          //      "url": "https://pokeapi.co/api/v2/ability/7/"
            //},
        //}
    //},
//}

//Cara memanggil untuk validasi  dari nama
expect(response.body.abilities[0].ability.name).to.eq('limber')
//Cara memanggil untuk validasi dari url
expect(response.body.abilities[0].ability.url).to.eq('https://pokeapi.co/api/v2/ability/7/')