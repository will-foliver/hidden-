//var fruta1 = 'melancia'
//var fruta2 = 'maracaja'
//var fruta3 = 'uva'
//var fruta4 = 'morango'
//var fruta5 = 'melao'

fruta = ['melancia', 'melao','maracaja','uva','morango']


teste = Array()
teste[0] = 'olha'
teste[1] = 'que'
teste[2] = 'top'

console.log(fruta)
console.log(fruta[1])
//push'empurrar'- adicionar a lista
fruta.push('tangerina')
console.log(fruta)



//unshift-adicionar no começo da lista
fruta.unshift('abacate')
console.log(fruta)
//pop remove o ultimo
fruta.pop()
console.log(fruta)
//shift remove o primeiro
fruta.shift()
console.log(fruta)
//splice remove, adiciona, e atualiza
//se nenhum oque vou adicionar
fruta.splice(2,2)
console.log(fruta)


fruta,push('abacate')



for(var i = 0;i < fruta.lenght;i++){
document.getElementById('resposta').
innerHTML +=`
${fruta[i]}
`
}

fruta.forEach(cadafruta => {
