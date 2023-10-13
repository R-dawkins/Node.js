import express from 'express';
import ejs from 'ejs';
import newsRouter from './router/content.js'
const app = express();
app.use('/news',newsRouter);


app.listen(8080);