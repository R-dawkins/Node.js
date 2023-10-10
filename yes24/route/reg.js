import express from 'express';
import { listArray } from './data.js';
const router = express.Router();
router.use(express.urlencoded({extended:true}));
router.use(express.json());
router
.post('/',(req, res, next) => {
  const {title, bname, author, translator, publisher, pday, price, url, category} = req.body
  const bid = Math.trunc(Math.random()*1000)
  console.log(bid);
  const bookObj = 
  {
    bid : bid,
    category : category,
    url : url,
    bname : bname,
    author : author,
    translator : translator,
    publisher : publisher,
    pday : pday,
    price : price
  }
  const RealBestIndex = listArray.findIndex((item) => item.title === "국내도서 실시간 베스트");
  const HotBestIndex = listArray.findIndex((item) => item.title === "국내도서 특가 베스트");
  const SteadyBestIndex = listArray.findIndex((item) => item.title === "국내도서 스테디 셀러");
  const MonthBestIndex = listArray.findIndex((item) => item.title === "국내도서 월간 베스트");
  const DayBestIndex = listArray.findIndex((item) => item.title === "국내도서 일별 베스트");
  const BestSellerIndex = listArray.findIndex((item) => item.title === "국내도서 종합 베스트");
  console.log(BestSellerIndex);
  console.log(DayBestIndex);
  if(title === "국내도서 실시간 베스트"){
    listArray[RealBestIndex].bookList.push(bookObj)
    console.log(bookObj);
  }
  else if(title === "국내도서 특가 베스트"){
    listArray[HotBestIndex].bookList.push(bookObj)
    console.log(bookObj);
  }
  else if(title === "국내도서 스테디 셀러"){
    listArray[SteadyBestIndex].bookList.push(bookObj)
    console.log(bookObj);
  }
  else if(title === "국내도서 월간 베스트"){
    listArray[MonthBestIndex].bookList.push(bookObj)
    console.log(bookObj);
  }
  else if(title === "국내도서 일별 베스트"){
    listArray[DayBestIndex].bookList.push(bookObj)
    console.log(bookObj);
  }
  else if(title === "국내도서 종합 베스트"){
    listArray[BestSellerIndex].bookList.push(bookObj)
    console.log(bookObj);
  }
  res.redirect('/BestSeller')
})

export default router;