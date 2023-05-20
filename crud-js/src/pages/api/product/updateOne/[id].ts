// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import ProductController from '@/controllers/ProductController'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function updateProduct(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const { id } = req.query;
        const updateProduct = req.body;
        const product = await ProductController.updateProduct(id, updateProduct);
        res.json({ product });
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}