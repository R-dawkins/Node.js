import  express  from "express";
import route from "./route.js";
import testRouter from "./test.js"
import joinRouter from "./join.js"
const app = express();

app.use(express.json());

app.use('/',route); 
// app.put('/:id',route) use를 사용하여 하위 디렉토리 모두다 자동 바인딩 되어 put,delete를 따로 해줄 필요 없다
// app.delete('/:id/:name/:address',route)
app.use('/test',testRouter) //여기서 기본 경로를 /test로 지정했을 시 test router 내부 미들웨어에서 지정한 경로 앞에 /test가 붙는다
//
app.use('/join',joinRouter)



//라우팅이란? 
app.listen(8080);

//api 디자인
//요즘에는 /:id 방식을 자주 사용하지만 ?id= 같은 querystring을 사용하는 사이트가 아직 많다