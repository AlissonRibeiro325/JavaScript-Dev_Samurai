const dados = `{
    "nome": "Alisson",
    "idade": 35,
    "estuda": true,
    "linguagens": ["Python", "JavaScript"],
    "endereco": {"cidade": "Fortaleza", "estado": "CE"},
    "rotina": {"manha": 4, "tarde": 16}
}`;

// Transformando de string JSON em objeto
const objeto = JSON.parse(dados);

// Acessando as informações dentro do JavaScript
console.log(objeto.nome)
