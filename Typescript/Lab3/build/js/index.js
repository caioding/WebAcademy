// index.ts
import { TV } from './classes/TV.js';
import { Celular } from './classes/Celular.js';
import { Bicicleta } from './classes/Bicicleta.js';
import { Carrinho } from './classes/Carrinho.js';
const carrinho = new Carrinho();
const formProduto = document.getElementById('form-produto');
if (formProduto) {
    formProduto.addEventListener('submit', (event) => {
        event.preventDefault();
        const tipoProduto = document.getElementById('tipo-produto').value;
        const modelo = document.getElementById('modelo').value;
        const fabricante = document.getElementById('fabricante').value;
        const valor = Number(document.getElementById('valor').value);
        let produto = null;
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
            const carrinhoElement = document.getElementById('carrinho');
            carrinhoElement.innerHTML = carrinho.produtos.map(produto => `
                <tr>
                    <td>${produto.tipo}</td>
                    <td>${produto.modelo}</td>
                    <td>${produto.fabricante}</td>
                    <td>${produto.valor}</td>
                </tr>
            `).join('');
            document.getElementById('total').innerText = carrinho.valorTotal().toString();
        }
        else {
            console.error('Produto não reconhecido');
        }
    });
}
else {
    console.error('Elemento form-produto não encontrado');
}
