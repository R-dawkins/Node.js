import express from 'express';
import * as newsController from '../controller/newsController.js';
const router = express.Router();

router.use(express.urlencoded({extended:true}));
router.use(express.json());

//GET
router.get('/', newsController.getAll);
//

//POST /register
router.post('/register', newsController.create);
//

//GET /:nid
router.get('/:nid', newsController.getNews);
//

//DELETE /remove
router.delete('/remove', newsController.remove);
//

export default router;