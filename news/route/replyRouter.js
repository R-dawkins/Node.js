import express from 'express';
import * as newsController from '../controller/newsController.js';
const router = express.Router();

router.use(express.urlencoded({extended:true}));
router.use(express.json());

//GET reply /:nid
router.get('/:nid', newsController.getReply);
//

//POST reply 
router.post('/', newsController.postReply);
//

//DELETE reply /remove
router.delete('/remove', newsController.removeReply);
//

export default router