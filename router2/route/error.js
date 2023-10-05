import express from 'express';
const router = express.Router();

router
.use((req, res, next) => {
  console.error
  res.status(404).send('404 error page not found');
});

export default router