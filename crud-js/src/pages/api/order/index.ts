// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function readAll(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        res.json({
            "routes": [
                { method: "GET", route: "/readAll" },
                { method: "POST", route: "/save" },
                { method: "GET", route: "/readOne/:id" },
                { method: "PATCH", route: "/updateOne/:id" },
                { method: "DELTETE", route: "/deleteOne/:id" },
            ]
        });
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}