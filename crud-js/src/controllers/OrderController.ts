import connectMongo from "@/db/connection";
import Order from "@/models/Order";

class OrderController {
    async readAll() {
        await connectMongo();
        return Order.find();
    }

    async readById(id: string) {
        await connectMongo();
        return Order.findOne({ _id: id });
    }

    async create(order: any) {
        await connectMongo();
        return Order.create(order);
    }

    async update(id: string, order: any) {
        await connectMongo();
        return Order.findOneAndUpdate({ _id: id }, order, { new: true })
    }

    async deleteOne(id: string) {
        await connectMongo();
        return Order.findOneAndDelete({ _id: id });
    }
}

export default new OrderController();