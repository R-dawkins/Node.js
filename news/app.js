import express from 'express';
import newsRouter from './route/news.js'
import replyRouter from './route/reply.js'
const app = express();
app.use('/news',newsRouter)
app.use('/reply',replyRouter)
app.listen(8080);