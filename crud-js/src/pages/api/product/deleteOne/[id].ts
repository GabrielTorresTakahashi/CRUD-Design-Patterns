// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import ProductController from '@/controllers/ProductController'
import connection from '@/db/connection'
import Product from '@/models/Product'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function deleteOne(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const { id } = req.query
        if (!id) throw new Error()
        const product = await ProductController.deleteOne(<string>id);
        res.json({ product });
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}