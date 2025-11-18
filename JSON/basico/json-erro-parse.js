function ehJSON(texto) {
    try {
        JSON.parse(texto);
        return true;
    } catch {
        return false;
    }
}

console.log(ehJSON('{"nome": "Daiane"}'))
console.log(ehJSON('Texto inválido.'))