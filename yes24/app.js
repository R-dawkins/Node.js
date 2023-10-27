import express from 'express';
import bestRouter from './route/best.js'
import RealBestRouter from './route/RealBest.js'
import DayBestRouter from './route/DayBest.js'
import MonthBestRouter from './route/MonthBest.js'
import HotBestRouter from './route/HotBest.js'
import SteadyBestRouter from './route/SteadyBest.js'
import Reg from './route/reg.js'
import memberRouter from './route/memberRouter.js'
import cookie from 'cookie-parser'

const app = express();
app.use(cookie());
app.use('/', memberRouter); //로그인폼 회원가입,로그인
app.use('/BestSeller',bestRouter);
app.use('/RealTimeBestSeller',RealBestRouter)
app.use('/DayBestSeller',DayBestRouter)
app.use('/MonthWeekBestSeller',MonthBestRouter)
app.use('/HotPriceBestSeller',HotBestRouter)
app.use('/SteadySeller',SteadyBestRouter)
app.use('/Register',Reg)


app.listen(8080);
