//crud
// CREATE CRIAR
//READ LER
//UPTADE
//DELETE
document.querySelector('#logar').addEventListener('click',logar) 
function logar(){
let nome_digitado = document.querySelector('#nome').value
let nome_salvo = ''
let senha_digitada = document.querySelector('#senha').value
let senha_salva = ''
let login = false
}

fetch('dados.json').then((response) => {
    console.log(response)
}).then((dados) => {
 dados.usuarios.map((informacoes) => {
 nome_salvo = informacoes.nome
 senha_salva = informacoes.senha
  
if(nome_digitado == nomesalvo & senha_digitada == senha_salva){
    login = true
if(login){
    alert('login efetuado')
    localStorage.setItem('nome',nome_salvo)
    window.location = '/home.html'
}else{
 document.querySelector("")
}
   }
  })
})
