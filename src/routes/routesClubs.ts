import { Router } from 'express';
import * as ClubController from '../controllers/clubs-controller';

const routerClubs = Router();

routerClubs.get('/clubs', ClubController.getClubs);

export default routerClubs;