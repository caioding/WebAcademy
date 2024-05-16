import { useContext } from "react";
import CardProduto from "../CardProduto/CardProduto";
import ResumoFavoritos from "../ResumoFavoritos/ResumoFavoritos";
import { FavoritosContext } from "@/app/page";

interface IListagemProdutos {
  produtos: Produto[];
  // favoritos: Produto[];
  // setFavoritos: React.Dispatch<React.SetStateAction<Produto[]>>;
}

export default function ListagemProdutos({ produtos }: IListagemProdutos) {
  const { favoritos, setFavoritos } = useContext(FavoritosContext);
  return (
    <>
      <h5 className="mb-3">Produtos disponíveis:</h5>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        {produtos.map((produto) => (
          <CardProduto
            key={produto.id}
            produto={produto}
            setFavoritos={setFavoritos}
            favoritos={favoritos}
          />
        ))}
      </div>

      <ResumoFavoritos favoritos={favoritos} setFavoritos={setFavoritos} />
    </>
  );
}
