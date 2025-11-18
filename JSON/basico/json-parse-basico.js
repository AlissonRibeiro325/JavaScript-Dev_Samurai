const dados = '{"nome": "Alisson", "idade": 34}';
const car = '{"marca": "wolkswagen", "modelo": "gol", "cor": "vermelho"}';

// Passando JSON pra objeto javascript
const car_obj = JSON.parse(car);
const obj = JSON.parse(dados);

console.log(car_obj);
console.log(car_obj.marca)
console.log(obj);
console.log(obj.nome);
console.log(obj.idade);