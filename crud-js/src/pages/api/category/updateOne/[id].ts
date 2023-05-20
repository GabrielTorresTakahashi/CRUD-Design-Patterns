// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import CategoryController from '@/controllers/CategoryController';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function update(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        if (req.method != 'PATCH') throw new Error("metodo não permitido para esta rota")

        const { id } = req.query;
        const updateCategory = req.body;
        const category = await CategoryController.update(<string>id, updateCategory);
        res.json(category);
    } catch (error: any) {
        res.json({ error:error.message });
    }
}