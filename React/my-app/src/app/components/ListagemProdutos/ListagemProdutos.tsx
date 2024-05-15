import CardProduto from "../CardProduto/CardProduto";
import { useListaProdutos } from "@/app/hooks/useListaProdutos";

interface ListagemProdutosProps {
  produtos: Produto[];
  adicionarAoCarrinho: (produto: Produto) => void;
}

export default function ListagemProdutos({
  adicionarAoCarrinho,
}: ListagemProdutosProps) {
  const { produtos, isPending, isError } = useListaProdutos();

  if (isPending) return <p>Carregando...</p>;
  if (isError) return <p>Erro ao carregar detalhes do produto</p>;
  if (!produtos) return <p>Nenhum detalhe disponível para este produto</p>;

  return (
    <>
      <h5 className="mb-3">Produto disponíveis:</h5>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        {produtos.map((produto: Produto) => (
          <CardProduto
            key={produto.id}
            produto={produto}
            adicionarAoCarrinho={adicionarAoCarrinho}
          />
        ))}
      </div>
    </>
  );
}
