import express from 'express';

const router = express.Router();

router.use((_request, response, _next) => {
  response
    .status(404)
    .send('<h1>Page not found :(</h1>');
});

export default router;
