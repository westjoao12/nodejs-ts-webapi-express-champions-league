import {Router}  from "express";
import * as PlayerController from "../controllers/players-controller";

const routerPlayers = Router();

routerPlayers.get('/players', PlayerController.getPlayer);
routerPlayers.get('/players/:id', PlayerController.getPlayerById);
routerPlayers.post('/players',PlayerController.postPlayer );
routerPlayers.delete('/players/:id', PlayerController.deletePlayer);
routerPlayers.put('/players/:id', PlayerController.updatePlayer);
routerPlayers.patch('/players/:id', PlayerController.updateStatisticsPlayer); // Optional: If you want to allow partial updates

export default routerPlayers;