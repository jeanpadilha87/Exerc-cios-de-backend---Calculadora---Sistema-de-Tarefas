// ==========================================
// comandos úteis no terminal:
// node tarefas.js adicionar "Comprar leite"
// node tarefas.js remover "Comprar leite"
// node tarefas.js listar
// ==========================================

const tarefas = [];

const comando = process.argv[2];
const descricao = process.argv[3];

function adicionarTarefa(tarefa) {
    tarefas.push(tarefa);
    console.log(`Tarefa "${tarefa}" adicionada.`);
}

function removerTarefa(tarefa) {
    const index = tarefas.indexOf(tarefa);

    if (index !== -1) {
        tarefas.splice(index, 1);
        console.log(`Tarefa "${tarefa}" removida.`);
    } else {
        console.log(`Tarefa "${tarefa}" não encontrada.`);
    }
}

function listarTarefas() {
    if (tarefas.length === 0) {
        console.log("Nenhuma tarefa cadastrada.");
        return;
    }

    console.log("Tarefas:");
    tarefas.forEach((tarefa, index) => {
        console.log(`${index + 1}. ${tarefa}`);
    });
}

switch (comando) {
    case "adicionar":
        adicionarTarefa(descricao);
        break;

    case "remover":
        removerTarefa(descricao);
        break;

    case "listar":
        listarTarefas();
        break;

    default:
        console.log("Comando inválido.");
        console.log("Use: adicionar | remover | listar");
}