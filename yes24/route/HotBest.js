import express from 'express';
import * as yes24Controller from '../controller/yes24Controller.js'
const router = express.Router();

router.use(express.urlencoded({extended:true}));
router.use(express.json());
//
router.get('/:page', yes24Controller.getHotbestBooks);

export default router;