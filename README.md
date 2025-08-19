# Champions Project

This project is a RESTful API for managing football clubs and players, built with TypeScript and Express.

## Project Structure

```
.env
.gitignore
package.json
tsconfig.json
src/
  app.ts
  server.ts
  controllers/
    clubs-controller.ts
    players-controller.ts
  data/
    clubs.json
  models/
    interfaces/
      IClubModel.ts
      IHttpResponse.ts
      IPlayerModel.ts
      IStatisticsModel.ts
  repositories/
    clubs-repository.ts
    players-repository.ts
  routes/
    routesClubs.ts
    routesPlayers.ts
  services/
    clubs-service.ts
    players-service.ts
  utils/
    http-helper.ts
```

## Folder Organization

- **controllers/**: Contains route handler logic for clubs and players.
- **data/**: Static data files (e.g., `clubs.json`).
- **models/interfaces/**: TypeScript interfaces for data models.
- **repositories/**: Data access logic for clubs and players.
- **routes/**: Express route definitions for API endpoints.
- **services/**: Business logic and service layer for clubs and players.
- **utils/**: Utility functions (e.g., HTTP response helpers).

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```

2. Start the development server:
   ```sh
   npm run start:dev
   ```

3. The API will run on the port specified in `.env` (default: 3333).

## API Endpoints

- **Clubs**
  - `GET /api/clubs` - List all clubs
  - `GET /api/clubs/:id` - Get club by ID

- **Players**
  - `GET /api/players` - List all players
  - `GET /api/players/:id` - Get player by ID
  - `POST /api/players` - Create a new player
  - `DELETE /api/players/:id` - Delete a player
  - `PUT /api/players/:id` - Update a player
  - `PATCH /api/players/:id` - Update player statistics

## Technologies Used

- TypeScript
- Express
- Node.js
