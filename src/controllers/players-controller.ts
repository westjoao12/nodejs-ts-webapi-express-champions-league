import { Request, Response } from "express";
import { createPlayerService, deletePlayerService, getPlayerByIdService, getPlayerService, updatePlayerService, updateStatisticsPlayerService } from "../services/players-service";
import { IStatisticsModel } from "../models/interfaces/IStatisticsModel";

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

export const updatePlayer = async (req: Request, res: Response) => {
    // Assuming you have an updatePlayerService function
    const id = parseInt(req.params.id);
    const bodyValue = req.body;
    const httpResponse = await updatePlayerService(id, bodyValue);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const updateStatisticsPlayer = async (req: Request, res: Response) => {
    // Assuming you have a function to update player statistics
    const id = parseInt(req.params.id);
    const statistics: IStatisticsModel = req.body.statistics;
    const httpResponse = await updateStatisticsPlayerService(id,  statistics );
    res.status(httpResponse.statusCode).json(httpResponse.body);
}
