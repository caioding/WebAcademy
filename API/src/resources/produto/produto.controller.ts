import { Request, Response } from "express"
import { ReasonPhrases, StatusCodes } from "http-status-codes"
import { createProdutoDto } from "./produto.types"
import { checkNomeIsAvaliable, createProduto, listProdutos } from "./produto.service"


const index = async (req: Request, res: Response) => {
    try{
        const produtos = await listProdutos();
        res.status(StatusCodes.OK).json(produtos)
    } catch(err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err)
    }
}
const create = async (req: Request, res: Response) => {
    const produto = req.body as createProdutoDto;
    try {
        if(await checkNomeIsAvaliable(produto.nome)){
        const novoProduto = await createProduto(produto)
        res.status(StatusCodes.CREATED).json(novoProduto)
        }else{
            res.status(StatusCodes.CONFLICT).json({ reason: ReasonPhrases.CONFLICT }) // Added a comma after the object key
        }
    } catch(err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err)
    }
}
const read = async (req: Request, res: Response) => {}
const update = async (req: Request, res: Response) => {}
const remove = async (req: Request, res: Response) => {}

export default { index, create, read, update, remove}