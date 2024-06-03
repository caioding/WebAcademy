import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ItemFavorito from "../ItemFavorito";
import { mockProdutos } from "@/app/mocks/produtos";
import {
  FavoritosProvider,
  useProdutoFavorito,
} from "../../../State/FavoritosProvider";
import { calculaValorComPorcentagemDeDesconto } from "@/app/helpers";

jest.mock("../../../State/FavoritosProvider", () => ({
  ...jest.requireActual("../../../State/FavoritosProvider"),
  useProdutoFavorito: jest.fn(),
}));

describe("ItemFavorito", () => {
  it("deve renderizar as informações do produto corretamente", () => {
    const useProdutoFavoritoMock = useProdutoFavorito as jest.Mock;
    useProdutoFavoritoMock.mockReturnValue(false);

    const produtoMockado = mockProdutos[0];
    const { nome, descricao, preco, fotos, desconto } = produtoMockado;

    const precoComDesconto = calculaValorComPorcentagemDeDesconto(
      Number(produtoMockado.preco),
      produtoMockado.desconto
    );

    render(
      <FavoritosProvider>
        <ItemFavorito itemFavorito={produtoMockado} setFavoritos={() => {}} />
      </FavoritosProvider>
    );

    expect(screen.getByText(nome)).toBeInTheDocument();
    expect(screen.getByText(descricao)).toBeInTheDocument();
    expect(
      screen.getByText(`R$ ${precoComDesconto.toFixed(2)}`)
    ).toBeInTheDocument();
    expect(screen.getByText(`${desconto}%`)).toBeInTheDocument();
    expect(screen.getByAltText(fotos[0].titulo)).toBeInTheDocument();
  });

  it("deve ser possível clicar no botão de remover", async () => {
    const setFavoritos = jest.fn();
    const useProdutoFavoritoMock = useProdutoFavorito as jest.Mock;
    useProdutoFavoritoMock.mockReturnValue(false);

    const produtoMockado = mockProdutos[0];

    render(
      <FavoritosProvider>
        <ItemFavorito
          itemFavorito={produtoMockado}
          setFavoritos={setFavoritos}
        />
      </FavoritosProvider>
    );

    const botao = screen.getByRole("button", {
      name: /Remover/i,
    });

    await userEvent.click(botao);

    expect(setFavoritos).toHaveBeenCalledTimes(1);
  });
});
