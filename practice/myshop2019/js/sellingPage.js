function CallSellingPage(categoryName, page){
  const url = "/" + categoryName + "/" + page;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const output = `
      <form>
        
      </form>
      <table style="width: 100%;min-height: 700px;border: 1px solid gray;">
        <thead>
        <th>번호</th>
        <th>상품 이름</th>
        <th>주문 수량</th>
        <th>개당 가격</th>
        <th>할인 가격</th>
        <th>2018년 주문 가격</th>
        <th>소계</th>
        <th>배달비</th>
        <th>총계</th>
        </thead>
        <tbody id="tbody">
      ${data.map(list =>
        `
      <tr>
        <td>${list.rownum}</td>
        <td>${list.product_name}</td>
        <td>${list.order_qty}개</td>
        <td>${list.unit_price}원</td>
        <td>${list.discount}원</td>
        <td>${list.line_total}원</td>
        <td>${list.sub_total}원</td>
        <td>${list.delivery_fee}원</td>
        <td>${list.total_due}원</td>
      </tr>
      `).join('\n')}
      </tbody>
    </table>
    `;
      document.querySelector("#list").innerHTML = output;
    })
    .catch()
    document.querySelector("#form").innerHTML = ''
}
