import { IClubModel } from "../models/interfaces/IClubModel";

const database: IClubModel[] = [
    {
        id: 1,
        name: "Paris Saint-Germain",
        stadium: "Parc des Princes",
        manager: "Luíz Henrique"
    },
    {
        id: 2,
        name: "Manchester United",
        stadium: "Old Trafford",
        manager: "Ruben Amorim"
    },
    {
        id: 3,
        name: "FC Barcelona",
        stadium: "Camp Nou",
        manager: "Hansi Flick"
    }
];

export const findAllClubs = async (): Promise<IClubModel[]> => {
    return database;
}

export const findClubById = async (id: number): Promise<IClubModel | null> => {
    const club = database.find(c => c.id === id);
    return club || null;
}