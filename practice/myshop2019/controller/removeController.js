import * as removeRepository from '../repository/removeRepository.js'

export async function removeEmployee(req,res){
  const {id} = req.body;
  console.log(id);
  const result = await removeRepository.removeEmployee(id)
  if(result === 'success'){
    res.status(204).send('delete success')
  }
}

export async function removeProduct(req,res){
  const {id} = req.body;
  const result = await removeRepository.removeProduct(id)
  if(result === 'success'){
    res.status(204).send('delete success')
  }
}