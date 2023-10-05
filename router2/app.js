import express from 'express';
import postsRouter from './route/posts.js'
import usersRouter from './route/users.js'
import errorRouter from './route/error.js'

const app = express();
app.use('/posts', postsRouter);
app.use('/users', usersRouter);
app.use(errorRouter);



app.listen(8080);