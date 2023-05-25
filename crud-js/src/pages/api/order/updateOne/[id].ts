// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import OrderController from '@/controllers/OrderController'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function updateProduct(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const { id } = req.query;
        const updateOrder = req.body;
        const order = await OrderController.update(<string>id, updateOrder);
        res.json({ product: order });
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}