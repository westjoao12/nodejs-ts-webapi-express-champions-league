import * as PlayerRepository from "../repositories/players-repository";
import { ok, noContent } from "../utils/http-helper";

export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers(); // Assuming findAllPlayers is imported from players-repository
    let response = null;


    if(data){
        response = await ok(data);
    }else {
        response = await noContent();
    }

    return response;
}