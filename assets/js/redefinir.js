//REDEFINIR SENHA
function validarEmail(form) {
    const email = form.redefinir.value;
    if (email == "") {
        alert("Não esqueça de Digitar seu Email")
    };
    emails = ["lucas@gmail.com", "ana@gmail.com", "allan@gmail.com"];
    if (emails.includes(email)) {
        alert("Link para redefinir para o e-mail inserido")
    }
    else {
        alert("Email não cadastrado")
    }
}