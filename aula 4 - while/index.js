// function testes() {
//     // enquanto condiçao faca
//     //para de tanto ate tanto para
//     contador = 0
//     // while (contador < 3) {
//     //  alert(`que maneiro!!! FIZ ${contador+1} vezes`)
//     //  contador++
// }

// for (var i = 0; i < 3; i++) {
//     alert('QUE MANEIRO!!! FIZ ${i+1} VEZES')
// }
// //testes()

function carregarcatalogo() {
var livros = [
['images/livros/fundaçao.jpg','fundaçao']

]





    livros.foreach (cadalivro =>{
        document.getElementById(`catalogo`).innerHTML += `
<div class="livro">
    <img src="${cadalivro[0]}" alt="">
    <h4>${cadalivro[1]}</h4>
    
    <button>
        adicionar
        <img src="image/bag-plus.svg" alt="">
    </button>
</div>

`
    }
}

carregarcatalogo()
