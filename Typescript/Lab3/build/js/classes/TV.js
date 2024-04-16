// Define a classe TV que implementa a interface IProduto
export class TV {
    // Define o construtor da classe
    // O construtor é um método especial que é chamado quando um novo objeto é criado
    constructor(modelo, // Modelo da TV
    resolucao, // Resolução da TV
    tamanho, // Tamanho da TV
    fabricante, // Fabricante da TV
    valor // Valor da TV
    ) {
        this.modelo = modelo;
        this.resolucao = resolucao;
        this.tamanho = tamanho;
        this.fabricante = fabricante;
        this.valor = valor;
        this.tipo = 'tv'; // Define o tipo do produto como 'tv'
    }
}
