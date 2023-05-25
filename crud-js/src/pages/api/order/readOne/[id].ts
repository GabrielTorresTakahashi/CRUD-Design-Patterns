// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import OrderController from '@/controllers/OrderController'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function readById(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const { id } = req.query;
        const order = await OrderController.readById(<string>id);
        res.json(order);
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}