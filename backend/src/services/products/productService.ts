import prismaClient from "../../Prisma"

export interface IProductParams {
    nome: string
    descricao: string
    quantidade: number
    categoryId: string
    imageUrl: string
    valorProduto: number
    categoria: string
}

class ProductService {
    async execute({
        categoryId,
        descricao,
        nome,
        quantidade,
        categoria,
        imageUrl,
        valorProduto,
    }: IProductParams) {
        try {
            const product = await prismaClient.tbProduto.create({
                data: {
                    NoDescricao: descricao,
                    NoProduto: nome,
                    QtEstoque: quantidade,
                    imageUrl,
                    VaProduto: valorProduto,
                    categoria_id: categoryId,
                },
                select: {
                    categoria: true,
                    NoDescricao: true,
                    NoProduto: true,
                    QtEstoque: true,
                    CoProduto: true,
                    imageUrl: true,
                    VaProduto: true,
                },
            })

            return product
        } catch (error) {
            console.log(error)
        }
    }
}

export { ProductService }
