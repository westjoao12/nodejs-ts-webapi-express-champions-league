import { IClubModel } from "../models/interfaces/IClubModel";
import fs from "fs";

export const findAllClubs = async (): Promise<IClubModel[]> => {
    //const data = fs.readFileSync('src/data/clubs.json', 'utf-8');
    const data = fs.readFileSync(__dirname + '/../data/clubs.json', 'utf-8');
    if (!data) {
        return [];
    }
    const database: IClubModel[] = JSON.parse(data);
    return database;
}

export const findClubById = async (id: number): Promise<IClubModel | null> => {
    //const data = fs.readFileSync('src/data/clubs.json', 'utf-8');
    const data = fs.readFileSync(__dirname + '/../data/clubs.json', 'utf-8');
    if (!data) {
        return null;
    }
    const database: IClubModel[] = JSON.parse(data);
    const club = database.find(c => c.id === id);
    return club || null;
}