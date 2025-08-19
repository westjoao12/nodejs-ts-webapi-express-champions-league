import { Request, Response } from "express";
import { getClubByIdService, getClubsService } from "../services/clubs-service";

export const getClubs = async (req: Request, res: Response) => {
    const httpResponse = await getClubsService();
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const getClubById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await getClubByIdService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}