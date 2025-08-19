import { IClubModel } from "../models/interfaces/IClubModel";

const database: IClubModel[] = [
    {
        id: 1,
        name: "Paris Saint-Germain",
        stadium: "Parc des Princes",
        manager: "Christophe Galtier"
    },
    {
        id: 2,
        name: "Manchester United",
        stadium: "Old Trafford",
        manager: "Erik ten Hag"
    },
    {
        id: 3,
        name: "FC Barcelona",
        stadium: "Camp Nou",
        manager: "Xavi Hernandez"
    }
];
export const findAllClubs = async (): Promise<IClubModel[]> => {
    return database;
}