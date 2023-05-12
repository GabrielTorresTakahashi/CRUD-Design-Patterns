// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connection from '@/db/connection'
import Product from '@/models/Product'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function readAll(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        console.log('CONNECTING TO MONGO');
        await connection();
        console.log('CONNECTED TO MONGO');

        console.log('CREATING DOCUMENT');
        const product = await Product.create({});
        console.log('CREATED DOCUMENT');

        res.json({ product });
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}