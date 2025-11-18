function ehJSON(texto) {
    try {
        JSON.parse(texto);
        return true;
    } catch {
        return false;
    }
}

console.log(ehJSON('{"a": 1}'))
console.log(ehJSON('JSON inválido'))
