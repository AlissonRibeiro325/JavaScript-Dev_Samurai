const input = document.getElementById('nome');
const resultado = document.getElementById('resultado')

function salvarnome() {
    const nome = input.value.trim();
    if (nome === '') {
        alert('Preencha seu nome corretamente.')
        input.focus();
        return
    }

    localStorage.setItem('nomeUsuario', nome);
    resultado.innerText = `Nome "${nome}" salvo no localStorage!`

    input.value = "";
    input.focus();
}

function mostrarnome() {
    const nomeSalvo = localStorage.getItem('nomeUsuario')
    if (nomeSalvo) {
        resultado.innerText = `Nome salvo ${nomeSalvo}.`
    } else {
        resultado.innerText = 'Nenhum nome foi salvo ainda.'
    }
}

function apagarnome() {
    if (localStorage.removeItem("nomeUsuario")) {
        return;
    }
    resultado.innerText = 'Item removido do localStorage.'
}