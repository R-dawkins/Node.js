function CallProductPage(categoryName, page) {
  const url = "/" + categoryName + "/" + page;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const output = `
      <h4><a onclick="createProductForm()">Product Register</a></h4>
      <table style="width: 100%;min-height: 700px;border: 1px solid gray;">
        <thead>
        <th>번호</th>
        <th>상품명</th>
        <th>아이디</th>
        <th>범주</th>
        <th>범주아이디</th>
        <th>하위범주</th>
        <th>하위범주아이디</th>
        </thead>
        <tbody id="tbody">
      ${data.map(list =>
        `
      <tr>
          <td>${list.rownum}</td>
          <td>${list.product_name} <a href="#" onclick="removeProduct('${list.product_id}')">상품삭제</a></td>
          <td>${list.product_id}</td>
          <td>${list.category_name}</td>
          <td>${list.category_id}</td>
          <td>${list.sub_category_name}</td>
          <td>${list.sub_category_id}</td>
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
function removeProduct(id){
  fetch('/productmanagement/product/remove',{
    method:"delete",
    headers:{"content-type" : "application/json"},
    body:JSON.stringify({id:id})
  })
  .then(result=>{
    if(result.status === 204){
      window.location.reload();
    }else{console.error}
  })
}


function createProductForm(){
  const output = `
  <div style="display:block">
      <h4><a onclick="displayToggle('productForm')">상품 등록 창 토글</a></h4>
      <form action="/productReg" id="productForm" name="productForm" method="post" style="margin-top: 40px;display:none;">
        <p>Product Register Form</p>
        <input type="text" name="pid" id="pid" placeholder="상품아이디 ex) XXX00" style="width: 50%;background: lightcoral;">
        <input type="text" name="pname" id="pname" placeholder="상품명" style="width: 50%;background: lightcoral;">
        <select style="display:block;width:400px" name="sid" id="sid">
          <option value="10001">대형 가전제품</option>
          <option value="10002">중형 가전제품</option>
          <option value="10003">소형 가전제품</option>
          <option value="20001">컴퓨터</option>
          <option value="20002">프린터</option>
          <option value="20003">악세사리</option>
          <option value="30001">생활용품</option>
        </select>
        <button style="display:block;width:100px;margin-top:10px;" type="submit" onclick="">상품등록</button>
      </form>
  </div>
  `;
  document.querySelector("#form").innerHTML = output;
}