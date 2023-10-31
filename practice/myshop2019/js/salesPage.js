function CallSalesPage(categoryName, page) {
  const url = "/" + categoryName + "/" + page;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const output = `
      <h3> 연도별 </h3>
      <table style="width: 100%;min-height: 700px;border: 1px solid gray;">
        <thead>
        <th>주문 년도</th>
        <th>주문 금액</th>
        <th>총 배달비</th>
        <th>총계</th>
        </thead>
        <tbody id="tbody">
      ${data.map(list =>
        `
      <tr>
        <td>${list.order_date}년</td>
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
    document.querySelector("#form").innerHTML = `
    <p><a onclick="CallSalesPage('salesManagement','1')">연도별</a></p>
    <p><a onclick='CallSalesCustomer()'>고객별</a></p>
    <p><a onclick='CallSalesAge()'>연령별</a></p>
    <p><a onclick='CallSalesCategory()'>카테고리별</a></p>
    <p><a onclick='CallSalesProduct()'>상품별</a></p>
    `
  }

function CallSalesCustomer() {
  fetch("/salesManagement/salesCustomer")
    .then(response => response.json())
    .then((data) => {
      const output = `
      <h3> 고객별 </h3>
      <table style="width: 100%;min-height: 700px;border: 1px solid gray;">
        <thead>
        <th>고객명</th>
        <th>주문 금액</th>
        <th>총 배달비</th>
        <th>총계</th>
        </thead>
        <tbody id="tbody">
      ${data.map(list =>
        `
      <tr>
        <td>${list.customer_name}</td>
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
    // document.querySelector("#form").innerHTML = `
    // <p><a onclick="CallSalesPage('salesManagement','1')">연도별</a></p>
    // <p><a onclick='CallSalesCustomer()'>고객별</a></p>
    // <p><a onclick='CallSalesAge()'>연령별</a></p>
    // <p><a onclick='CallSalesCategory()'>카테고리별</a></p>
    // <p><a onclick='CallSalesProduct()'>상품별</a></p>
    // `
  }

function CallSalesAge() {
  fetch("/salesManagement/salesAge")
    .then(response => response.json())
    .then((data) => {
      const output = `
      <h3> 연령별 </h3>
      <table style="width: 100%;min-height: 700px;border: 1px solid gray;">
        <thead>
        <th>연령</th>
        <th>주문 금액</th>
        <th>총 배달비</th>
        <th>총계</th>
        </thead>
        <tbody id="tbody">
      ${data.map(list =>
        `
      <tr>
        <td>${list.age}년생</td>
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
  }

  function CallSalesCategory() {
  fetch("/salesManagement/salesCategory")
    .then(response => response.json())
    .then((data) => {
      const output = `
      <h3> 카테고리별 </h3>
      <table style="width: 100%;min-height: 700px;border: 1px solid gray;">
        <thead>
        <th>카테고리</th>
        <th>주문 금액</th>
        <th>총 배달비</th>
        <th>총계</th>
        </thead>
        <tbody id="tbody">
      ${data.map(list =>
        `
      <tr>
        <td>${list.category_name}</td>
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
  }

  function CallSalesProduct() {
  fetch("/salesManagement/salesProduct")
    .then(response => response.json())
    .then((data) => {
      const output = `
      <h3> 상품별 </h3>
      <table style="width: 100%;min-height: 700px;border: 1px solid gray;">
        <thead>
        <th>상품명</th>
        <th>주문 금액</th>
        <th>총 배달비</th>
        <th>총계</th>
        </thead>
        <tbody id="tbody">
      ${data.map(list =>
        `
      <tr>
        <td>${list.product_name}</td>
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
  }