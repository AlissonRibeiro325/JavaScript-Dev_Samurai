const x = 10;
console.log("x:", x);

{
    console.log("x", x);

    const y = 20;
}

console.log("x", x);
console.log("y", y); // Não acessível fora do seu contexto