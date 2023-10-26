import express from 'express';
import * as dwitterController from '../controller/dwitterController.js';

const router = express.Router();
router.use(express.urlencoded({extended:true}));
router.use(express.json())



// 1. GET: /dwitter - all tweets list
router.get('/', dwitterController.getAll); //함수지만 ()를 붙이지 않는다.

// 2. POST: /dwitter - tweet create
router.post('/', dwitterController.create)

// 3.  GET: /dwitter/:id - my tweets list
// a태그로 넘어오는 데이터는 get방식으로 넘어온다
router.get('/:id', dwitterController.getDwitter)

// 4.  PUT: /dwitter/:id - my dweet update
router.put('/', dwitterController.update);

// 5.  DELETE: /dwitter/:id - my dweet delete
router.delete('/', dwitterController.remove)


export default router