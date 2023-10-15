import express from 'express';
import ejs from 'ejs';
import newsRouter from './router/content.js'
import replyRouter from './router/reply.js'
const app = express();
app.use('/news',newsRouter);
app.use('/news',replyRouter);


app.listen(8080);