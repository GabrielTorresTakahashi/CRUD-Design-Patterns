// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import CategoryController from '@/controllers/CategoryController';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function readById(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        if (req.method != 'GET') throw new Error("metodo não permitido para esta rota")
        const { id } = req.query;
        const category = await CategoryController.readById(<string>id);
        res.json(category);
    } catch (error: any) {
        res.json({ error:error.message });
    }
}