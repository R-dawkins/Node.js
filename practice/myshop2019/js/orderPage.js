
function CallOrderPage(categoryName, page) {
  const url = "/" + categoryName + "/" + page;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const output = `
      <table style="width: 100%;min-height: 700px;border: 1px solid gray;">
        <thead>
        <th>주문 날짜</th>
        <th>주문 아이디</th>
        <th>주문 고객</th>
        <th>담당 직원</th>
        <th>소계</th>
        <th>배달비</th>
        <th>총계</th>
        </thead>
        <tbody id="tbody">
      ${data.map(list =>
        `
      <tr>
          <td>${list.order_date}</td>
          <td>${list.order_id}</td>
          <td>${list.customer_name}</td>
          <td>${list.employee_name}</td>
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

