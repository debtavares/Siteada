
document.getElementById("botaoEnviar").addEventListener("click",validaForm)

/*função são blocos de códigos específicos feitos quando queremos que algo aconteça*/

function validaForm(){
if (document.getElementById("nomeUsuaria").value != "" && document.getElementById("emailUsuaria").value != "" && document.getElementById("telefoneUsuaria").value != ""){
  altert("Prontinho! Você receberá as novidades por e-mail")
}else{
  alert("Preencha os dados")
}
}

/*Ir no documento HTML e pegar o elemento por id*/