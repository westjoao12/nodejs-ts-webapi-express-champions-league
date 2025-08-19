import * as PlayerRepository from "../repositories/players-repository";
import * as httpResponse from "../utils/http-helper";

export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers(); // Assuming findAllPlayers is imported from players-repository
    let response = null;


    if(data){
        response = await httpResponse.ok(data);
    }else {
        response = await httpResponse.noContent();
    }

    return response;
}

export const getPlayerByIdService = async (id: number) => {
    //pedir para o repository buscar o player pelo id
    const data = await PlayerRepository.findPlayerById(id); // Assuming findPlayerById
    let response = null;

    if(data){
        response = await httpResponse.ok(data);
    }
    else {
        response = await httpResponse.noContent();
    }
    return response;
}