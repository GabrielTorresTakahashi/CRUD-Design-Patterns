// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string,
    price: string,
}

export default function readAll(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    
    return res.status(200).json({ name: 'John Doe', price: "7.99" })
}
