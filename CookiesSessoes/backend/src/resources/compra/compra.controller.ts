import { Request, Response } from "express";
import { salvarCompra } from "./compra.service";

function getCarrinho(req: Request, res: Response) {
  if (!req.session.carrinhoCompra)
    return res.status(400).json({ msg: "Carrinho vazio" });
  if (!req.session.uid)
    return res.status(400).json({ msg: "Usuário não está logado" });
  res.status(200).json(req.session.carrinhoCompra);
}

function adiItemCarrinho(req: Request, res: Response) {
  const id = req.params.id;
  const quantidade = parseInt(req.params.quantidade);

  if (!req.session.carrinhoCompra) req.session.carrinhoCompra = [];
  req.session.carrinhoCompra.push({ id, quantidade });

  res.status(200).json({ msg: "Item adicionado ao carrinho" });
}

async function efetivarCompra(req: Request, res: Response) {
  if (!req.session.carrinhoCompra)
    return res.status(400).json({ msg: "Carrinho vazio" });
  if (!req.session.uid)
    return res.status(400).json({ msg: "Usuário não está logado" });
  try {
    await salvarCompra(req.session.carrinhoCompra, req.session.uid);
    req.session.carrinhoCompra = [];
    res.status(200).json({ msg: "Compra bem sucedida!" });
  } catch (error) {
    res.status(500).json(error);
  }
}

export default { getCarrinho, adiItemCarrinho, efetivarCompra };
