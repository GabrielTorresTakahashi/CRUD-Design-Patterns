import ProductController from '@/controllers/ProductController';
import type { NextApiRequest, NextApiResponse } from 'next'
import {models} from "mongoose";

export default async function readAll(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const product = await ProductController.create(req.body)
        res.json({ product });
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}