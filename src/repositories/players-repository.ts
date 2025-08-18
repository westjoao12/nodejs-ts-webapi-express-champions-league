import { IPlayerModel } from "../models/interfaces/IPlayerModel";

const database: IPlayerModel[] = [
    {
        id: 1,
        name: "Leonel Messi"
    },
    {
        id: 2,
        name: "Cristiano Ronaldo"
    },
    {
        id: 3,
        name: "Neymar Jr"
    },
    {
        id: 4,
        name: "Kylian Mbappé"
    },
    {
        id: 5,
        name: "Kevin De Bruyne"
    }
];

export const findAllPlayers = async (): Promise<IPlayerModel[]> => {
    return database;
}

export const findPlayerById = async (id: number): Promise<IPlayerModel | null> => {
    const player = database.find(p => p.id === id);
    return player || null;
}