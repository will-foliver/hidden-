fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?f=a`).then((response) =>{
    console.log(response)
}).them((data) => {
console.log(data)
document.querySelector('#resultados').innerHTML += `
<img src= "${drink.strDrinkthumb}">
<h3>${data.strDrink}</h3> `
})