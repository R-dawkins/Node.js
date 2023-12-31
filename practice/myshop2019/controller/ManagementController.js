import ejs from 'ejs';
import * as ManagementReopository from '../repository/ManagementRepository.js'

export async function getCustomer(req,res){
  const rows = await ManagementReopository.getCustomer()
  ejs
  .renderFile('./template/list.ejs', {list:rows})
  .then(data=>{res.end(data)})
}

export async function getCustomerPage(req,res){
  const rows = await ManagementReopository.getCustomerPage()
  res.json(rows);
}

export async function getEmployee(req,res){
  const rows = await ManagementReopository.getEmployee()
  res.json(rows);
}

export async function getOrder(req,res){
  const rows = await ManagementReopository.getOrder()
  res.json(rows);
}

export async function getSales(req,res){
  const rows = await ManagementReopository.getSales()
  res.json(rows);
}

export async function getSelling(req,res){
  const rows = await ManagementReopository.getSelling()
  res.json(rows);
}

export async function getProduct(req,res){
  const rows = await ManagementReopository.getProduct()
  res.json(rows);
}

//Sales Category start

export async function getSalesCustomer(req,res){
  const rows = await ManagementReopository.getSalesCustomer()
  res.json(rows);
}

export async function getSalesCategory(req,res){
  const rows = await ManagementReopository.getSalesCategory()
  res.json(rows);
}

export async function getSalesProduct(req,res){
  const rows = await ManagementReopository.getSalesProduct()
  res.json(rows);
}

export async function getSalesAge(req,res){
  const rows = await ManagementReopository.getSalesAge()
  res.json(rows);
}

//Sales Category end

