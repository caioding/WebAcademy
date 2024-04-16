// Importando as classes necessárias
import { TV } from './classes/TV';
import { Celular } from './classes/Celular';
import { Bicicleta } from './classes/Bicicleta';
import { Carrinho, IProduto } from './classes/Carrinho';

// Criando uma nova instância de Carrinho
const carrinho = new Carrinho<IProduto>();

// Obtendo o elemento do formulário
const formProduto = document.getElementById('form-produto');
if (formProduto) {
    // Adicionando um ouvinte de evento para o envio do formulário
    formProduto.addEventListener('submit', (event) => {
        // Prevenindo o comportamento padrão do formulário
        event.preventDefault();

        // Obtendo os valores dos campos do formulário
        const tipoProduto = (document.getElementById('tipo-produto') as HTMLSelectElement).value;
        const modelo = (document.getElementById('modelo') as HTMLInputElement).value;
        const fabricante = (document.getElementById('fabricante') as HTMLInputElement).value;
        const valor = Number((document.getElementById('valor') as HTMLInputElement).value);

        // Inicializando a variável produto
        let produto: IProduto | null = null;

        // Criando um novo produto com base no tipo selecionado
        switch (tipoProduto) {
            case 'tv':
                produto = new TV(modelo, '1080p', 32, fabricante, valor);
                break;
            case 'celular':
                produto = new Celular(modelo, '64GB', fabricante, valor);
                break;
            case 'bicicleta':
                produto = new Bicicleta(modelo, 26, fabricante, valor);
                break;
        }

        // Se um produto foi criado
        if (produto) {
            // Adicionando o produto ao carrinho
            carrinho.adicionar(produto);

            // Atualizando a tabela do carrinho na página
            const carrinhoElement = document.getElementById('carrinho') as HTMLTableSectionElement;
            carrinhoElement.innerHTML = carrinho.produtos.map(produto => `
                <tr>
                    <td>${produto.tipo}</td>
                    <td>${produto.modelo}</td>
                    <td>${produto.fabricante}</td>
                    <td>${produto.valor}</td>
                </tr>
            `).join('');

            // Atualizando o total do carrinho na página
            (document.getElementById('total') as HTMLSpanElement).innerText = carrinho.valorTotal().toString();
        } else {
            // Se nenhum produto foi criado, mostrando um erro
            console.error('Produto não reconhecido');
        }
    });
} else {
    // Se o elemento do formulário não foi encontrado, mostrando um erro
    console.error('Elemento form-produto não encontrado');
}