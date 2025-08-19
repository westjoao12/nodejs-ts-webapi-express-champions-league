import { Router } from 'express';

const routerClubs = Router();

routerClubs.get('/clubs', (req, res) => {
    // Logic to get all clubs
    res.status(200).json({ message: "List of clubs" });
});
export default routerClubs;