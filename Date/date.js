// Data e hota atual
const agora = new Date();
console.log(agora);

// Criando uma data específica
const natal = new Date(2025, 11, 25); // Ano, mês, dia

// Atenção: os meses em JavaScript começam com zero
// Ou seja: janeiro = 0, Fevereiro = 1 etc..

// Obtendo partes da data
const data = new Date();

console.log(data.getFullYear()); // Ano
console.log(data.getMonth());    // Mês (0 a 11)
console.log(data.getDate());     // Dia do mês
console.log(data.getDay());      // Dia da semana (0 = domingo)
console.log(data.getHours());    // Hora
console.log(data.getMinutes());  // Minutos
console.log(data.getSeconds());  // Segundos

// Formatando data manualmente
const dia = data.getDate();
console.log(dia);

// 🌍 5. Formatando com toLocaleDateString
//JavaScript tem funções prontas para mostrar a data no formato de diferentes países
console.log(data.toLocaleDateString("pt-BR")); // 10/11/2025
console.log(data.toLocaleString("pt-BR"));     // 10/11/2025 14:35:10

//⏳ 6. Calculando diferença entre datas
//Você pode comparar duas datas e ver quantos dias se passaram:
const inicio = new Date(2025, 0, 1); // 1º janeiro
const hoje = new Date();

const diffMs = hoje - inicio; // diferença em milissegundos
const diffDias = diffMs / (1000 * 60 * 60 * 24);

console.log(`Já se passaram ${Math.floor(diffDias)} dias desde o início do ano.`);
