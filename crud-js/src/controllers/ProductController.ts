import connectMongo from "@/db/connection";
import Product from "@/models/Product";

class ProductController {
    async saveEmpty(req: any, res: any) {
        await connectMongo()
        return await Product.create()
    }

    async readAll() {
        await connectMongo()
        return await Product.find()
    }

    async readById(productId: string)
    {
        await connectMongo();
        return await Product.findOne({_id:productId}); //busca um registro do produto
    }

    async create(product: any) {
        await connectMongo();
        return await Product.create(product)
    }

    async deleteOne(productId: string)
    {
        await connectMongo()
        return await Product.findOneAndDelete({_id:productId})
    }

    async updateProduct(productId: string, body: any)
    {
        await connectMongo();
        return await Product.findOneAndUpdate({_id:productId},{...body}, {new: true}); //função encontra e retorna o registro atualizado.
    }

}

export default new ProductController();