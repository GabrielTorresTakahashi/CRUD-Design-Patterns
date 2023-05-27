import connectMongo from "@/db/connection";
import Member from "@/models/Member";

class MemberController {
    async readAll() {
        await connectMongo()
        return await Member.find()
    }

    async readById(id: string) {
        await connectMongo();
        return await Member.findOne({ _id: id });
    }

    async create(object: any) {
        await connectMongo();
        return await Member.create(object)
    }

    async deleteOne(id: string) {
        await connectMongo()
        return await Member.findOneAndDelete({ _id: id })
    }

    async update(id: string, body: any) {
        await connectMongo();
        return await Member.findOneAndUpdate({ _id: id }, body, { new: true });
    }
}

export default new MemberController();