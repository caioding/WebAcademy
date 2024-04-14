// index.ts
import { TV } from './classes/TV';
import { Celular } from './classes/Celular';
import { Bicicleta } from './classes/Bicicleta';
import { Carrinho, IProduto } from './classes/Carrinho';

const carrinho = new Carrinho<IProduto>();

const formProduto = document.getElementById('form-produto');
if (formProduto) {
    formProduto.addEventListener('submit', (event) => {
        event.preventDefault();

        const tipoProduto = (document.getElementById('tipo-produto') as HTMLSelectElement).value;
        const modelo = (document.getElementById('modelo') as HTMLInputElement).value;
        const fabricante = (document.getElementById('fabricante') as HTMLInputElement).value;
        const valor = Number((document.getElementById('valor') as HTMLInputElement).value);

        let produto: IProduto | null = null;

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

        if (produto) {
            carrinho.adicionar(produto);

            const carrinhoElement = document.getElementById('carrinho') as HTMLTableSectionElement;
            carrinhoElement.innerHTML = carrinho.produtos.map(produto => `
                <tr>
                    <td>${produto.tipo}</td>
                    <td>${produto.modelo}</td>
                    <td>${produto.fabricante}</td>
                    <td>${produto.valor}</td>
                </tr>
            `).join('');

            (document.getElementById('total') as HTMLSpanElement).innerText = carrinho.valorTotal().toString();
        } else {
            console.error('Produto não reconhecido');
        }
    });
} else {
    console.error('Elemento form-produto não encontrado');
}