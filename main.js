function validarFormulario() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;


    if (nome.trim() === '' || email.trim() === '' || telefone.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }


    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return false;
    }

    alert('A mensagem foi enviada com sucesso!😀');

    document.getElementById('form').reset();

    return true;
}
