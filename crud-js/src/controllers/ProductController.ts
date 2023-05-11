import Product from "@/models/Product";

class ProductController {
    async saveEmpty(req: any, res: any) {
        return await Product.create()
    }
}

export default new ProductController();