function explicaçao1(){
 escolha = confirm("deseja rodar true or false")
if (escolha){
alert("vc escolheu true")
}else{
    alert("voce escolheu senao")
}
}

function explicaçao2(){
escolha = prompt(" a) bolo no pote: R$10, b) açai R$15 c) torta R$15")  
switch(escolha){
case 'a':
alert('voce escolheu o bolo no pote')
break

case 'b':
alert('voce escolheu o açai')
break
case 'c':
alert('voce escolheu o bolo no pote')
break
} 
}

function explicaçao3(){
idade = Number(prompt('digite sua idade'))
if(idade >= 18){ 
alert('seja bem vindo')
document.querySelector = ("body").innerhtml = "vivaaaaaa"
}else{
alert('idade invalida')
window.location = 'https://www.google.com'
}
}