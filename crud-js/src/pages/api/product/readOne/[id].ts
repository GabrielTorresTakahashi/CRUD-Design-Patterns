// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import ProductController from '@/controllers/ProductController'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function readById(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const { id } = req.query;
        const product = await ProductController.readById(<string>id);
        res.json(product);
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}