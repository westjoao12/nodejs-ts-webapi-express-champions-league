import {Router}  from "express";
import * as PlayerController from "../controllers/players-controller";

const router = Router();

router.get('/players', PlayerController.getPlayer);
router.post('/players',PlayerController.postPlayer );
router.delete('/players/:id', PlayerController.deletePlayer);
router.put('/players/:id', PlayerController.updatePlayer);
router.patch('/players/:id', PlayerController.updateStatisticsPlayer); // Optional: If you want to allow partial updates

router.get('/players/:id', PlayerController.getPlayerById);


export default router;