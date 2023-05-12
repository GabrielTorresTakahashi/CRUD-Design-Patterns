// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connection from '@/db/connection'
import Product from '@/models/Product'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function readAll(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        await connection();
        const product = await Product.create({});
        res.json({ product });
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}