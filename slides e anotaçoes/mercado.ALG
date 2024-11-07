Algoritmo "atividade vetores 1"

Var
mercadoria : vetor [1..3] de caractere
i : inteiro
total, media : real
valor : vetor[1..3] de real

Inicio


para i de 1 ate 3 faca
escreval("digite o nome da mercadoria: ")
leia(mercadoria[i])

escreval("digite o valor: ")
leia(valor[i])

total:= total + valor[i]

fimpara
media:= total /3
escreval("a media das mercadorias é: ", media)
 escreval("valor total das mercadorias é: ", total)


Fimalgoritmo