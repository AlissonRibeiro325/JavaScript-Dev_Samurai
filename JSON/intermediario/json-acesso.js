const json = '{"nome": "Alisson", "cidade": "Fortaleza", "linguagens": ["JavaScript", "Python"]}';

const obj = JSON.parse(json);

console.log(obj);
console.log(obj.nome);
console.log(obj.linguagens[1]); // Python