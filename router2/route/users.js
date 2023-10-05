import express from 'express';
const router = express.Router();

router
.get('/',(req, res, next) => {
  res.send('USERS GET')
})
.post('/',(req, res, next) => {
  res.send('USERS POST')
})
.put('/:id',(req, res, next) => {
  const id = req.params.id
  res.send(`USERS PUT ${id}`)
})
.delete('/:id',(req, res, next) => {
  const id = req.params.id
  res.send(`USERS DELETE ${id}`)
})

export default router;