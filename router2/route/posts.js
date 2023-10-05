import express from 'express';
const router = express.Router();

router
.get('/',(req, res, next) => {
  res.send('POSTS GET')
})
.post('/',(req, res, next) => {
  res.send('POSTS POST')
})
.put('/:id',(req, res, next) => {
  const id = req.params.id
  res.send(`POSTS PUT ${id}`)
})
.delete('/:id',(req, res, next) => {
  const id = req.params.id
  res.send(`POSTS DELETE ${id}`)
})
export default router;