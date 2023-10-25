import express from 'express';
import customerManagementRouter from './router/customerManagementRouter.js';
import employeeManagementRouter from './router/employeeManagementRouter.js';
import orderManagementRouter from './router/orderManagementRouter.js';
import productManagementRouter from './router/productManagementRouter.js';
import salesManagementRouter from './router/salesManagementRouter.js';
import sellingManagementRouter from './router/sellingManagementRouter.js';
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


app.listen(8080);