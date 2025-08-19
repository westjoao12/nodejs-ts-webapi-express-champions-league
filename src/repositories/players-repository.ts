import { IPlayerModel } from "../models/interfaces/IPlayerModel";

const database: IPlayerModel[] = [
    {
        id: 1,
        name: "Lionel Messi",
        club: "Paris Saint-Germain",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
            Overall: 93,
            Pace: 85,
            Shooting: 92,
            Passing: 91,
            Dribbling: 95,
            Defending: 38,
            Physical: 65,
        }
    },
    {
        id: 2,
        name: "Criano Ronaldo",
        club: "Manchester United",
        nationality: "Portugal",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 87,
            Shooting: 93,
            Passing: 82,
            Dribbling: 88,
            Defending: 35,
            Physical: 77,
        }
    },
    {
        id: 3,
        name: "Neymar Jr",
        club: "Paris Saint-Germain",
        nationality: "Brazil",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 91,
            Shooting: 85,
            Passing: 84,
            Dribbling: 92,
            Defending: 30,
            Physical: 60,
        }
    },
    {
        id: 4,
        name: "Kylian Mbappé",
        club: "Paris Saint-Germain",
        nationality: "France",
        position: "Forward",
        statistics: {
            Overall: 92,
            Pace: 96,
            Shooting: 89,
            Passing: 84,
            Dribbling: 91,
            Defending: 40,
            Physical: 76,
        }
    },
    {
        id: 5,
        name: "Kevin De Bruyne",
        club: "Manchester City",
        nationality: "Belgium",
        position: "Midfielder",
        statistics: {
            Overall: 91,
            Pace: 76,
            Shooting: 86,
            Passing: 92,
            Dribbling: 88,
            Defending: 64,
            Physical: 78,
        }
    },
];

export const findAllPlayers = async (): Promise<IPlayerModel[]> => {
    return database;
}

export const findPlayerById = async (id: number): Promise<IPlayerModel | null> => {
    const player = database.find(p => p.id === id);
    return player || null;
}

export const insertPlayer = async (player: IPlayerModel): Promise<IPlayerModel> => {
    const newPlayer = { ...player, id: database.length + 1 };
    database.push(newPlayer);
    return newPlayer;
}