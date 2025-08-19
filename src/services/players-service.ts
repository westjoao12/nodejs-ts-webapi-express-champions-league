import { IPlayerModel } from "../models/interfaces/IPlayerModel";
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
    const data = await PlayerRepository.findPlayerById(id);
    let response = null;

    if(data){
        response = await httpResponse.ok(data);
    }
    else {
        response = await httpResponse.noContent();
    }
    return response;
}

export const createPlayerService = async (player: IPlayerModel) => {
    let response = null;

    //verificar se o player está vazio
    if (!player || Object.keys(player).length === 0) {
        response = httpResponse.badRequest("Player data is required");
    }
    //pedir para o repository criar o player
    const createdPlayer = await PlayerRepository.insertPlayer(player);
    
    if (createdPlayer) 
        response = httpResponse.created(createdPlayer);
    else 
        response = httpResponse.badRequest("Failed to create player");
    

    return response;
}