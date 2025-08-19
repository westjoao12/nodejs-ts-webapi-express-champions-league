import { Request, Response } from "express";

export const getClubs = async (req: Request, res: Response) => {
    // Logic to get all clubs
    res.status(200).json({ message: "List of clubs" });
}