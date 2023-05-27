import MemberController from '@/controllers/MemberController';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function readAll(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        if (req.method != 'GET') throw new Error("metodo não permitido para esta rota")
        const member = await MemberController.readAll()
        res.send(member);
    } catch (error: any) {
        res.json({ error: error.message });
    }
}