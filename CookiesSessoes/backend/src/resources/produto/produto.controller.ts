import { Request, Response } from "express"
import { ReasonPhrases, StatusCodes } from "http-status-codes"
import { UpdateProdutoDto, CreateProdutoDto } from "./produto.types"
import { checkNomeIsAvaliable, createProduto, listProdutos, readProduto, updateProduto, deleteProduto } from "./produto.service"

const index = async (req: Request, res: Response) => {
    const skip = req.query.skip ? parseInt(req.query.skip?.toString()) : undefined;
    const take = req.query.take ? parseInt(req.query.take?.toString()) : undefined;
    try {
        const produtos = await listProdutos(skip, take);
        res.status(StatusCodes.OK).json(produtos)
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err)
    }
}
const create = async (req: Request, res: Response) => {
    /*
#swagger.summary = 'Adiciona um novo produto na base.'
#swagger.parameters['body'] = {
in: 'body',
schema: { $ref: '#/definitions/CreateProduto' }
} 
#swagger.responses[200] = {
schema: { $ref: '#/definitions/Produto' }
} 
*/
    const produto = req.body as CreateProdutoDto;
    try {
        if (await checkNomeIsAvaliable(produto.nome)) {
            const novoProduto = await createProduto(produto)
            res.status(StatusCodes.CREATED).json(novoProduto)
        } else {
            res.status(StatusCodes.CONFLICT).json({ reason: ReasonPhrases.CONFLICT }) // Added a comma after the object key
        }
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err)
    }
}
const read = async (req: Request, res: Response) => {
    /*
 #swagger.summary = 'Adiciona um novo produto na base.'
 #swagger.parameters['body'] = {
 in: 'body',
 schema: { $ref: '#/definitions/CreateProduto' }
 } 
 #swa
 */
    const { id } = req.params;
    try {
        const produto = await readProduto(id)
        if (produto) {
            res.status(StatusCodes.OK).json(produto)
        } else {
            res.status(StatusCodes.NOT_FOUND).json({ reason: ReasonPhrases.NOT_FOUND })
        }
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err)
    }
}

const update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const produto = req.body as UpdateProdutoDto;
    try {
        if (await checkNomeIsAvaliable(produto.nome, id)) {
            const updatedProduto = await updateProduto(id, produto)
            res.status(StatusCodes.NO_CONTENT).json()
        } else {
            res.status(StatusCodes.CONFLICT).json({ reason: ReasonPhrases.CONFLICT })
        }
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err)
    }
}
const remove = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedProduto = await deleteProduto(id)
        res.status(StatusCodes.NO_CONTENT).json(deletedProduto)
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err)
    }
}

export default { index, create, read, update, remove }