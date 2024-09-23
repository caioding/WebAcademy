// index.ts

// Definindo uma interface para representar um 
interface Lembrete {
    titulo: string;
    dataHoraInsercao: Date;
    dataLimite: Date;
    descricao: string;
}

// Classe principal para gerenciar os 
class ToDoList {
    private lembretes: Lembrete[];

    constructor() {
        this.lembretes = [];
    }

    // Método para adicionar um novo lembrete
    adicionarLembrete(lembrete: Lembrete) {
        this.lembretes.push(lembrete);
    }

    // Método para editar um lembrete existente
    editarLembrete(index: number, lembrete: Lembrete) {
        if (index >= 0 && index < this.lembretes.length) {
            this.lembretes[index] = lembrete;
        } else {
            console.error("Índice de lembrete inválido.");
        }
    }

    // Método para excluir um lembrete
    excluirLembrete(index: number) {
        if (index >= 0 && index < this.lembretes.length) {
            this.lembretes.splice(index, 1);
        } else {
            console.error("Índice de lembrete inválido.");
        }
    }

    // Método para listar todos os lembretes
    listarLembretes() {
        this.lembretes.forEach((lembrete, index) => {
            console.log(`Lembrete ${index + 1}:`);
            console.log(`Título: ${lembrete.titulo}`);
            console.log(`Data e Hora de Inserção: ${lembrete.dataHoraInsercao}`);
            console.log(`Data Limite: ${lembrete.dataLimite}`);
            console.log(`Descrição: ${lembrete.descricao}`);
            console.log("--------------------------");
        });
    }
}

// Exemplo de uso
const toDoList = new ToDoList();

// Adicionando um lembrete
toDoList.adicionarLembrete({
    titulo: "Comprar mantimentos",
    dataHoraInsercao: new Date(),
    dataLimite: new Date('2024-04-05'),
    descricao: "Comprar leite, ovos, pão, etc."
});

// Listando os lembretes
toDoList.listarLembretes();

// Editando um lembrete existente
toDoList.editarLembrete(0, {
    titulo: "Comprar mantimentos",
    dataHoraInsercao: new Date(),
    dataLimite: new Date('2024-04-10'),
    descricao: "Comprar leite, ovos, pão, etc. (Atualizado)"
});

// Listando os lembretes após edição
toDoList.listarLembretes();

// Excluindo um lembrete
toDoList.excluirLembrete(0);

// Listando os lembretes após exclusão
toDoList.listarLembretes();
