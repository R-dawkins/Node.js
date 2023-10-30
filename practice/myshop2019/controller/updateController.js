import * as updateRepository from '../repository/updateRepository.js'

export async function updateEmployee(req,res){
  let id = req.params.eid;
  let {name} = req.body;
  console.log(id);
  console.log(name);
  const result = await updateRepository.updateEmployee(name,id);
  if(result === 'success'){ res.redirect('/customerManagement')}
}