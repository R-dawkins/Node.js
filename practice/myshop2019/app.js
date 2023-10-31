import express from 'express';
import customerManagementRouter from './router/customerManagementRouter.js';
import employeeManagementRouter from './router/employeeManagementRouter.js';
import orderManagementRouter from './router/orderManagementRouter.js';
import productManagementRouter from './router/productManagementRouter.js';
import salesManagementRouter from './router/salesManagementRouter.js';
import sellingManagementRouter from './router/sellingManagementRouter.js';
import createRouter from './router/createRouter.js'
import updateRouter from './router/updateRouter.js'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const router = express.Router();
router.use(express.urlencoded({extended:true}))
router.use(express.json());

app.use('/customerManagement', customerManagementRouter);
app.use('/employeeManagement', employeeManagementRouter);
app.use('/orderManagement', orderManagementRouter);
app.use('/productManagement', productManagementRouter);
app.use('/salesManagement', salesManagementRouter);
app.use('/sellingManagement', sellingManagementRouter);

app.use('/',createRouter);
app.use('/',updateRouter);

app.use('/', express.static(path.join(__dirname, 'js')));//정적 파일 ex) js,css 파일 연결
app.listen(8080);