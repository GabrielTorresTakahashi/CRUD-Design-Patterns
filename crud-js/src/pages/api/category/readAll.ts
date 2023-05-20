import CategoryController from '@/controllers/CategoryController';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function readAll(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        if (req.method != 'GET') throw new Error("metodo não permitido para esta rota")
        const category = await CategoryController.readAll()
        res.send(category);
    } catch (error: any) {

        res.json({ error: error.message });
    }
}