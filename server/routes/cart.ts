import express from 'express';
import * as cart from '../controllers/cart';

const router = express.Router();

router.get('/getAll', cart.getAll);
router.post('/add/:id', cart.add);
router.delete('/removeOne/:id', cart.removeOne);
router.delete('/removeItem/:id', cart.removeItem);

export default router;