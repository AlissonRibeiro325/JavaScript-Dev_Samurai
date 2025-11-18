const pessoa = {
    nome: "Alisson",
    idade: 34,
    estuda: true
}

const car = {
    marca: "wolkswagen",
    modelo: "gol",
    cor: "vermelho"
}

const json_car = JSON.stringify(car);
const json = JSON.stringify(pessoa);

console.log(json_car);
console.log(json);