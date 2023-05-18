import ProductController from '@/controllers/ProductController';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function readAll(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const product = await ProductController.readAll()
        res.send(product);
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}