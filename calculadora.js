// ==========================================
// Comandos úteis no terminal:
//
// node calculadora.js soma 1 2
// node calculadora.js subtracao 10 5
// node calculadora.js multiplicacao 3 4
// node calculadora.js divisao 20 2
// ==========================================

const operacao = process.argv[2];
const num1 = parseFloat(process.argv[3]);
const num2 = parseFloat(process.argv[4]);

console.log("Operação:", operacao);
console.log("Número 1:", num1);
console.log("Número 2:", num2);

if (!operacao || isNaN(num1) || isNaN(num2)) {
    console.log("Uso correto: node calculadora.js operacao num1 num2");
    process.exit(1);
}

function soma(a, b) { return a + b; }
function subtracao(a, b) { return a - b; }
function multiplicacao(a, b) { return a * b; }
function divisao(a, b) { return b === 0 ? "Erro: divisão por zero!" : a / b; }

let resultado;

switch (operacao.toLowerCase()) {
    case "soma": resultado = soma(num1, num2); break;
    case "subtracao": resultado = subtracao(num1, num2); break;
    case "multiplicacao": resultado = multiplicacao(num1, num2); break;
    case "divisao": resultado = divisao(num1, num2); break;
    default:
        console.log("Operação inválida!");
        process.exit(1);
}

console.log("Resultado:", resultado);