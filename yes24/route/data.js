export const bookArray = [
  {
    bid : 101,
    category:'BestSeller',
    url:'https://image.yes24.com/goods/122090360/L',
    bname: '퓨처 셀프',
    author:'벤저민 하디',
    translator:'최은아',
    publisher:'상상스퀘어',
    pday:'2023년 08월',
    price: '17,820',
  },
  {
    bid : 102,
    category:'BestSeller',
    url:'https://image.yes24.com/goods/122457906/L',
    bname: '시대예보: 핵개인의 시대',
    author:'송길영',
    translator:'',
    publisher:'교보문고',
    pday:'2023년 09월',
    price: '18,900',
  },
  {
    bid : 103,
    category:'DayBestSeller',
    url:'https://image.yes24.com/goods/122426425/L',
    bname: '트렌드 코리아 2024',
    author:'김난도, 전미영, 최지혜, 이수진, 권정윤 외 6명',
    translator:'',
    publisher:'미래의창',
    pday:'2023년 10월',
    price: '17,100',
  },
  {
    bid : 104,
    category:'DayBestSeller',
    url:'https://image.yes24.com/goods/122090075/L',
    bname: '도시와 그 불확실한 벽',
    author:'무라카미 하루키',
    translator:'홍은주',
    publisher:'문학동네',
    pday:'2023년 09월',
    price: '17,550',
  },
  {
    bid : 105,
    // title : "국내도서 월간 베스트",
    category:'MonthWeekBestSeller',
    url:'https://image.yes24.com/goods/117014613/L',
    bname: '세이노의 가르침',
    author:'세이노(SayNo)',
    translator:'',
    publisher:'데이원',
    pday:'2023년 03월',
    price: '6,480',
  },
  {
    bid : 106,
    category:'SteadySeller',
    url:'https://image.yes24.com/goods/119608737/L',
    bname:'문과 남자의 과학 공부',
    author:'유시민',
    translator:'',
    publisher:'돌베개',
    pday:'2023년 06월',
    price:'15,750',
  },
  {
    bid : 107,
    category:'HotPriceBestSeller',
    url:'https://image.yes24.com/goods/105526047/L',
    bname:'물고기는 존재하지 않는다',
    author:'룰루 밀러',
    translator:'정지인',
    publisher:'곰출판',
    pday:'2021년 12월',
    price:'15,300',
  },
  {
    bid : 108,
    category:'HotPriceBestSeller',
    url:'https://image.yes24.com/goods/59003542/L',
    bname:'침팬지 폴리틱스',
    author:'프란스 드 발',
    translator:'장대익, 황상익',
    publisher:'바다출판사',
    pday:'2018년 03월',
    price:'16,200',
  },
  {
    bid : 109,
    category:'RealTimeBestSeller',
    url:'https://image.yes24.com/goods/2312211/L',
    bname:'코스모스',
    author:'칼 에드워드 세이건',
    translator:'홍승수',
    publisher:'사이언스북스',
    pday:'2006년 12월',
    price:'17,910',
  },
  {
    bid : 110,
    category:'RealTimeBestSeller',
    url:'https://image.yes24.com/goods/65067259/L',
    bname:'이기적 유전자 The Selfish Gene',
    author:'리처드 도킨스',
    translator:'홍영남, 이상익',
    publisher:'을유문화사',
    pday:'2018년 10월',
    price:'18,000',
  }
];
//json 객체의 구조가 바뀌어야한다
//title은 반복되기때문에 상위 객체로 만들어 준다

export const listArray = 
    [
      {
        title : "국내도서 실시간 베스트",
        bookList:
        [
          {
            bid : 110,
            category:'RealTimeBestSeller',
            url:'https://image.yes24.com/goods/65067259/L',
            bname:'이기적 유전자 The Selfish Gene',
            author:'리처드 도킨스',
            translator:'홍영남, 이상익',
            publisher:'을유문화사',
            pday:'2018년 10월',
            price:'18,000',
          }
          ,
          {
            bid : 109,
            category:'RealTimeBestSeller',
            url:'https://image.yes24.com/goods/2312211/L',
            bname:'코스모스',
            author:'칼 에드워드 세이건',
            translator:'홍승수',
            publisher:'사이언스북스',
            pday:'2006년 12월',
            price:'17,910',
          }
        ]
      }
      ,
      {
        title : "국내도서 특가 베스트",
        bookList :
        [
          {
            bid : 107,
            category:'HotPriceBestSeller',
            url:'https://image.yes24.com/goods/105526047/L',
            bname:'물고기는 존재하지 않는다',
            author:'룰루 밀러',
            translator:'정지인',
            publisher:'곰출판',
            pday:'2021년 12월',
            price:'15,300',
          },
          {
            bid : 108,
            category:'HotPriceBestSeller',
            url:'https://image.yes24.com/goods/59003542/L',
            bname:'침팬지 폴리틱스',
            author:'프란스 드 발',
            translator:'장대익, 황상익',
            publisher:'바다출판사',
            pday:'2018년 03월',
            price:'16,200',
          }
        ]
      },
      {
        title : "국내도서 스테디 셀러",
        bookList :
        [
          {
            bid : 106,
            category:'SteadySeller',
            url:'https://image.yes24.com/goods/119608737/L',
            bname:'문과 남자의 과학 공부',
            author:'유시민',
            translator:'',
            publisher:'돌베개',
            pday:'2023년 06월',
            price:'15,750',
          }
        ]
      },
      {
        title : "국내도서 월간 베스트",
        bookList : 
        [
          {
          bid : 105,
          // title : "국내도서 월간 베스트",
          category:'MonthWeekBestSeller',
          url:'https://image.yes24.com/goods/117014613/L',
          bname: '세이노의 가르침',
          author:'세이노(SayNo)',
          translator:'',
          publisher:'데이원',
          pday:'2023년 03월',
          price: '6,480',
        }
        ]
      },
      {
        title : "국내도서 일별 베스트",
        bookList :
        [
          {
            bid : 103,
            category:'DayBestSeller',
            url:'https://image.yes24.com/goods/122426425/L',
            bname: '트렌드 코리아 2024',
            author:'김난도, 전미영, 최지혜, 이수진, 권정윤 외 6명',
            translator:'',
            publisher:'미래의창',
            pday:'2023년 10월',
            price: '17,100',
          },
          {
            bid : 104,
            category:'DayBestSeller',
            url:'https://image.yes24.com/goods/122090075/L',
            bname: '도시와 그 불확실한 벽',
            author:'무라카미 하루키',
            translator:'홍은주',
            publisher:'문학동네',
            pday:'2023년 09월',
            price: '17,550',
          }
        ]
      },
      {
        title : "국내도서 종합 베스트",
        bookList :
        [
          {
            bid : 101,
            category:'BestSeller',
            url:'https://image.yes24.com/goods/122090360/L',
            bname: '퓨처 셀프',
            author:'벤저민 하디',
            translator:'최은아',
            publisher:'상상스퀘어',
            pday:'2023년 08월',
            price: '17,820',
          },
          {
            bid : 102,
            category:'BestSeller',
            url:'https://image.yes24.com/goods/122457906/L',
            bname: '시대예보: 핵개인의 시대',
            author:'송길영',
            translator:'',
            publisher:'교보문고',
            pday:'2023년 09월',
            price: '18,900',
          }
        ]
      }
    ]
