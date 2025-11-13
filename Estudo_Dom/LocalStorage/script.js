function salvarnome() {
    const nome = document.getElementById('nome'); // Pega o input
    localStorage.setItem("nomeUsuario", nome.value);
    document.getElementById("resultado").innerText = `✅ Nome "${nome.value}" salvo no LocalStorage!`;
    nome.value = "";
    nome.focus();
}

function mostrarnome() {
    const nomeSalvo = localStorage.getItem("nomeUsuario");
    if (nomeSalvo) {
        document.getElementById("resultado").innerText = `📦 Nome salvo: ${nomeSalvo}`;
    } else {
        document.getElementById("resultado").innerText = "⚠️ Nenhum nome foi salvo ainda.";
    }
}

function apagarnome() {
    localStorage.removeItem("nomeUsuario");
    document.getElementById("resultado").innerText = "🗑️ Nome removido do LocalStorage!";
}

