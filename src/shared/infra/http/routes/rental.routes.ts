import { Router } from 'express';

import { CreateRentalController } from '@modules/rentals/useCases/createRental/createRentalController';

import { ensureAuthenticated } from '../middlewares/ensuredAuthenticated';

const rentalRoutes = Router();

const createRentalController = new CreateRentalController();

rentalRoutes.post('/', ensureAuthenticated, createRentalController.handle);

export { rentalRoutes };
