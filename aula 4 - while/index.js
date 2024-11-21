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
    for (let i = 0; i < 5; i++) {
        document.getElementById(`catalogo`).innerHTML += `
<div class="livro">
    <img src="image/fundaçao.jpg" alt="">
    <h4>fundação</h4>
    
    <button>
        adicionar
        <img src="image/bag-plus.svg" alt="">
    </button>
</div>

`
    }
}

carregarcatalogo()
