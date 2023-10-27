import * as removeRepository from '../repository/removeRepository.js'

export async function remove(req,res){
  const {id} = req.body;
  console.log(id);
  const result = await removeRepository.remove(id)
  if(result === 'success'){
    res.status(204).send('delete success')
  }
}