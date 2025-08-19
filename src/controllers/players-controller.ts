import { Request, Response } from "express";
import { createPlayerService, getPlayerByIdService, getPlayerService } from "../services/players-service";

export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await getPlayerService();
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await getPlayerByIdService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async (req:Request, res: Response) => {
    const bodyValue = req.body;
    const httpResponse = await createPlayerService(bodyValue);
    if(httpResponse)
        res.status(httpResponse.statusCode).json(httpResponse.body);
    else
        res.status(400).json({ error: "Failed to create player" });
}

export const deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await deletePlayerService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}
