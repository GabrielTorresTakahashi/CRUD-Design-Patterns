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
}

export default new ProductController();