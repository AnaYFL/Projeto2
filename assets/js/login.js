// VALIDAR USUARIO
var pessoas =[
	{
		nome:"Lucas",
		usuario: "lucasALt@gmail.com",
		senha: "lucaschefe837"
	},
	{
		nome:"Ana",
		usuario: "ana@gmail.com",
		senha: "1234"
	}
]

function validar(form){
	const cpf = form.cpf.value;
	const senha = form.senha.value;
	for(i= 0 ;i<pessoas.length; i++){
		if(cpf == pessoas[i].usuario && senha == pessoas[i].senha){
            window.open("home.html");
		}break
	}
	for(i= 0 ;i<pessoas.length; i++){
		if(cpf != pessoas[i].usuario ){
			alert("Usuario Incorreto")
		}break
	}
	for(i= 0 ;i<pessoas.length; i++){
		if(senha != pessoas[i].senha ){
			alert("Senha Incorreta")
		}break	
	}	
}