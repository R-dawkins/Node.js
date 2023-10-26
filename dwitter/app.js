import express from 'express';
import dwitterRouter from './route/dwitterRouter.js'
import loginRouter from './route/loginRouter.js'
import signupRouter from './route/signupRouter.js'

const app = express();

app.use('/dwitter',dwitterRouter)
app.use('/login', loginRouter)
app.use('/signup', signupRouter)
app.listen(8080, function(){
  console.log("server start~!")
})