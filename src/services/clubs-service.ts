import * as httpResponse from "../utils/http-helper";
import * as clubRespository from "../repositories/clubs-repository";

export const getClubsService = async () => {
    const data = await clubRespository.findAllClubs(); // Assuming findAllPlayers is imported from players-repository
        let response = null;
    
    
        if(data){
            response = await httpResponse.ok(data);
        }else {
            response = await httpResponse.noContent();
        }
    
        return response;
}