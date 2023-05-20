import type { NextApiRequest, NextApiResponse } from 'next'
import {models} from "mongoose";
import CategoryController from '@/controllers/CategoryController';

export default async function readAll(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        if(req.method != 'POST') throw new Error("metodo não permitido para esta rota")
        const category = await CategoryController.create(req.body)
        res.json(category);
    } catch (error:any) {
        res.json({error:error.message});
    }
}