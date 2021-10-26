import express from 'express';
import * as products from '../controllers/products';

import { roleMiddleware } from '../middlewares/role';
import { authMiddleware } from '../middlewares/auth';
import { adminMiddleware } from '../middlewares/admin';

const router = express.Router();

router.get('/getOne', products.getOne);
router.get('/:category/getAll', products.getAll);
router.post('/create', adminMiddleware, products.create);
router.patch('/update/:id', adminMiddleware, products.update);
router.delete('/remove/:id', adminMiddleware, products.remove);

router.post('/addReview/:id', authMiddleware, products.addReview);

export default router;