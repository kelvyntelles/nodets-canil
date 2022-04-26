import { Router } from 'express';
import * as PageController from '../controllers/pageController';
import * as SerachController from '../controllers/searchController';

import * as PageCarController from '../controllers/controllersCar/pageCarController';
import * as SearchCarController from '../controllers/controllersCar/searchCarController';

const router = Router();

router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);

router.get('/search', SerachController.search);

router.get('/homeCar', PageCarController.homeCar);
router.get('/jaguar', PageCarController.jaguar);
router.get('/bmw', PageCarController.bmw);
router.get('/maserati', PageCarController.maserati);

router.get('/searchCar', SearchCarController.searchCar);

export default router;

