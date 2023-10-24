import express from 'express';
import newsRouter from './route/newsRouter.js'
import replyRouter from './route/replyRouter.js'
const app = express();
app.use('/news',newsRouter)
app.use('/reply',replyRouter)
app.listen(8080);