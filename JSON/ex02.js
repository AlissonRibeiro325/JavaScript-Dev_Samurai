// JSON.parse() - Transforma texto JSON -> objeto JavaScript
const dados = `{
    "nome": "Alisson",
    "idade": 35,
    "estuda": true,
    "linguagens": ["JavaScript", "Python"],
    "endereco": {"cidade": "Fortaleza", "estado": "CE"},
    "rotina": {"manha": 4, "tarde": 16}
}`;
const objeto = JSON.parse(dados);
console.log(objeto)

// Transformando objeto js em texto JSON

const car = {
    "marca": "WolksWagen",
    "modelo": "Gol",
    "cor": "Vermelho",
    "Ano": 2025
}

const carTexto = JSON.stringify(car);
console.log(carTexto)
