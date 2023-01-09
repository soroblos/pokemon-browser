console.log('hello world')

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '166cbd93c7msh9d02adccba5930bp14461bjsn3f1a4b384288',
//         'X-RapidAPI-Host': 'mcu-comics-and-characters.p.rapidapi.com'
//     }
// };

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));