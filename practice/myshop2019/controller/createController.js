import * as createRepository from '../repository/createRepository.js'

export async function postEmployee(req,res){
  let {name,gender,email,phone} = req.body
  const params = [name,gender,phone,email]
  let result = await createRepository.postEmployee(params)
  if(result === 'success') res.redirect('/customerManagement')
}