import OrderController from '@/controllers/OrderController';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function readAll(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const order  = await OrderController.readAll()
        res.send(order);
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}