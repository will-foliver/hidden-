class usuario { 
    constructor(idp, apwlido , nome , email, bio , genero ){
this.id
this.apelido = apelido
this.nome = nome 
this.email = email
this.bio = bio 
this.genero = genero
this.postar = function(pensamento){
 document.querySelector("#resposta").innerHTML = 
 `
 <div class = "post">
 <h3>${this.apelido}</h3>
 <p>${pensamento}
 </div>
 
 `
  }
 }
}
 



var user1 = new usuario(1,'william')


function postarfeed(){
alert("postado com sucessor!")
pensamentos = document.querySelector("#pensamentos").value 
user1.postar(pensamento)

}