import connectMongo from "@/db/connection";
import Category from "@/models/Category";

class CategoryController {
    async readAll() {
        await connectMongo()
        return await Category.find()
    }

    async readById(id: string) {
        await connectMongo();
        return await Category.findOne({ _id: id }); //busca um registro do produto
    }

    async create(object: any) {
        await connectMongo();
        return await Category.create(object)
    }

    async deleteOne(id: string) {
        await connectMongo()
        return await Category.findOneAndDelete({ _id: id })
    }

    async update(id: string, body: any) {
        await connectMongo();
        return await Category.findOneAndUpdate({ _id: id }, { ...body }, { new: true });
    }

}

export default new CategoryController();