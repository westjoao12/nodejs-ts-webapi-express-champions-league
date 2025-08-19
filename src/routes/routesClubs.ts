import { Router } from 'express';
import * as ClubController from '../controllers/clubs-controller';

const routerClubs = Router();

routerClubs.get('/clubs', ClubController.getClubs);
routerClubs.get('/clubs/:id', ClubController.getClubById);

export default routerClubs;