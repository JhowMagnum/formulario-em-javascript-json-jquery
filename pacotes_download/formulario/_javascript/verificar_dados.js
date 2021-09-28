
function verificar_dados(){


	var nome = document.getElementById("nome");
	if(nome.value =="") 
	{
		alert("Digite o nome");
		return false;
	}
	


	var apelido = document.getElementById("nickname");
	if(apelido.value =="") 
	{
		alert("Digite o Apelido");
		return false;
	}
	
	var cpf = document.getElementById("cpf");
	if(cpf.value =="") 
	{
		alert("Digite o CPF");
		return false;
	}

	
	
	if(validarEsporte()==true )
	{	alert("Ok.Verificação de Dados completa!");
	
    arquivo_JSON();
	}
	else
		alert("Dados icorretos, favor preencher novamente!");
}
