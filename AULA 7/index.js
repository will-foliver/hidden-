
//promise e uma promessa
//resolve cumprimos a promessa
//reject rejeitamos a promessa ou nao cumpriu
// PROMISSESTATE estado de promessa 
// FULLFIELD PROMESSA COMPRIDA
//PROMISERESULT o motivo do status
//reject promessa quebrada
const promessa = new Promise((resolve,reject) => {
    let nome = 'victor'
    
     if (nome == 'victor'){
     resolve ('usuario e victor')
}else{
    reject('porque usuario nao e victor') 
    }
})

promessa.then((dadosdoresolve) =>{
    console.log(dadosdoresolve)
})

promessa.catch((infodoerro) => { 
console.log((infodeerro))
})

function sujeitodemorado(){
    return new Promise((resolve) => {
    setTimeout(() => {resolve()},2000)
    })
}

console.log('oi')
sujeitodemorado()
console.log('terminei')