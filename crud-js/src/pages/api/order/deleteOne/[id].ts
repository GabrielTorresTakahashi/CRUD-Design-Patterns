// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import OrderController from '@/controllers/OrderController'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function deleteOne(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        if (req.method !== "DELETE") throw new Error("Use method DELETE for this route");
        const { id } = req.query
        if (!id) throw new Error()
        const order = await OrderController.deleteOne(<string>id);
        res.json({ product: order });
    } catch (error) {
        res.json(error);
    }
}