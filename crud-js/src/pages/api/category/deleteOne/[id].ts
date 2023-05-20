// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import CategoryController from '@/controllers/CategoryController';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function deleteOne(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        if (req.method != "DELETE") throw new Error("metodo não permitido para esta rota");
        const { id } = req.query
        if (!id) throw new Error()
        const category = await CategoryController.deleteOne(<string>id);
        res.json({status:true, message:"Categoria Excluida com sucesso"});
    } catch (error:any) {
        res.json({error:error.message});
    }
}