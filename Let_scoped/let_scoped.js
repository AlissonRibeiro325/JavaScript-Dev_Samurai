
/*
Use let quando o valor vai mudar.

Use const quando o valor não deve mudar.

Evite var — é antigo e causa erros difíceis de perceber.
*/

let x = 10;
console.log("x = ", x);

{
    console.log("x", x);
    x = 20;

    let y = 30
}

console.log("x", x);
console.log("y", y);